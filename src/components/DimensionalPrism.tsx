import { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Vertex shader for refractor
const refractorVertexShader = `
uniform sampler2D tDiffuse;
uniform mat4 textureMatrix;
varying vec4 vUv;
void main() {
  vUv = textureMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Fragment shader for refractor
const refractorFragmentShader = `
uniform vec3 color;
uniform sampler2D tDiffuse;
varying vec4 vUv;

vec4 texture2DProj(sampler2D sampler, vec4 coord) {
  coord.xy /= coord.w;
  return texture2D(sampler, coord.xy);
}

void main() {
  vec4 finalColor = texture2DProj(tDiffuse, vUv);
  finalColor.rgb = vec3(dot(finalColor.rgb, vec3(0.299, 0.587, 0.114)));
  finalColor.rgb += vec3(1.0, 0.95, 0.95);
  finalColor.rgb *= color;
  gl_FragColor = finalColor;
}
`;

// RoundedBoxGeometry - creates a box with rounded edges
function createRoundedBoxGeometry(
  width: number,
  height: number,
  depth: number,
  segments: number,
  radius: number
): THREE.BoxGeometry {
  const geometry = new THREE.BoxGeometry(width, height, depth, segments, segments, segments);
  const positionAttribute = geometry.attributes.position;
  const vertex = new THREE.Vector3();

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const x = Math.abs(vertex.x);
    const y = Math.abs(vertex.y);
    const z = Math.abs(vertex.z);

    const halfW = width / 2;
    const halfH = height / 2;
    const halfD = depth / 2;

    if (x > halfW - radius && y > halfH - radius && z > halfD - radius) {
      const nx = (x - (halfW - radius)) / radius;
      const ny = (y - (halfH - radius)) / radius;
      const nz = (z - (halfD - radius)) / radius;
      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      if (len > 0) {
        const scale = radius / len;
        vertex.x = Math.sign(vertex.x) * ((halfW - radius) + nx * scale);
        vertex.y = Math.sign(vertex.y) * ((halfH - radius) + ny * scale);
        vertex.z = Math.sign(vertex.z) * ((halfD - radius) + nz * scale);
      }
    }
  }

  positionAttribute.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

// Refractor class
class Refractor extends THREE.Mesh {
  virtualCamera: THREE.PerspectiveCamera;
  textureMatrix: THREE.Matrix4;
  renderTarget: THREE.WebGLRenderTarget;
  materialConf: THREE.ShaderMaterialParameters;

  constructor(
    geometry: THREE.BoxGeometry,
    options: {
      width?: number;
      height?: number;
      materialConf?: THREE.ShaderMaterialParameters;
    } = {}
  ) {
    const virtualCamera = new THREE.PerspectiveCamera();
    const textureMatrix = new THREE.Matrix4();

    const parameters = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
    };

    const renderTarget = new THREE.WebGLRenderTarget(
      options.width || 512,
      options.height || 512,
      parameters
    );
    renderTarget.texture.generateMipmaps = false;

    const uniforms = {
      color: { value: new THREE.Color('#611CFC') },
      tDiffuse: { value: renderTarget.texture },
      textureMatrix: { value: textureMatrix },
    };

    const material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(uniforms),
      vertexShader: refractorVertexShader,
      fragmentShader: refractorFragmentShader,
      transparent: true,
      opacity: 0.45,
      ...(options.materialConf || {}),
    });

    super(geometry, material);

    this.virtualCamera = virtualCamera;
    this.textureMatrix = textureMatrix;
    this.renderTarget = renderTarget;
    this.materialConf = options.materialConf || {};

    this.onBeforeRender = (
      renderer: THREE.WebGLRenderer,
      scene: THREE.Scene,
      camera: THREE.Camera
    ) => {
      const prevTarget = renderer.getRenderTarget();
      const currentCamWorld = camera.matrixWorld.clone();

      this.virtualCamera.matrixWorld.copy(camera.matrixWorld);
      if (camera instanceof THREE.PerspectiveCamera) {
        this.virtualCamera.projectionMatrix.copy(camera.projectionMatrix);
      }
      this.virtualCamera.updateMatrixWorld();

      const inverseWorld = this.matrixWorld.clone().invert();
      const reflectionMatrix = new THREE.Matrix4()
        .copy(this.virtualCamera.matrixWorld)
        .invert()
        .multiply(this.matrixWorld)
        .multiply(inverseWorld);

      this.virtualCamera.matrixWorld.multiply(reflectionMatrix);

      const inverseCamWorld = new THREE.Matrix4()
        .copy(this.virtualCamera.matrixWorld)
        .invert();

      this.textureMatrix.copy(
        this.virtualCamera.projectionMatrix.clone().multiply(inverseCamWorld)
      );

      renderer.setRenderTarget(this.renderTarget);
      this.visible = false;
      renderer.render(scene, this.virtualCamera);
      this.visible = true;
      renderer.setRenderTarget(prevTarget);
      camera.matrixWorld.copy(currentCamWorld);
    };
  }

  dispose() {
    this.renderTarget.dispose();
    (this.material as THREE.ShaderMaterial).dispose();
    this.geometry.dispose();
  }
}

// Fragment shader material for background texture
const fragmentShaderMaterialVertex = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShaderMaterialFragment = `
uniform float uTime;
uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform vec2 uImageRes;
varying vec2 vUv;

vec2 coverUv(vec2 uv, vec2 resolution, vec2 imageRes) {
  vec2 ratio = vec2(
    min((resolution.x / resolution.y) / (imageRes.x / imageRes.y), 1.0),
    min((resolution.y / resolution.x) / (imageRes.y / imageRes.x), 1.0)
  );
  return uv * ratio + (1.0 - ratio) * 0.5;
}

vec3 halftone(vec2 uv, float t, float angle, float size, vec3 color) {
  float c = cos(angle);
  float s = sin(angle);
  vec2 rotUv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
  vec2 u = vec2(sin(rotUv.x * size + t), cos(rotUv.y * size + t));
  float dotVal = sin(u.x) * cos(u.y) * 4.0;
  return vec3(angle) + color * (1.0 - smoothstep(0.0, 0.1, dotVal));
}

void main() {
  vec2 uv = coverUv(vUv, uResolution, uImageRes);

  float c = cos(uTime * 0.1);
  float s = sin(uTime * 0.1);
  vec2 center = uv - vec2(0.5);
  uv = vec2(c * center.x - s * center.y, s * center.x + c * center.y) + vec2(0.5);

  vec3 texColor = texture2D(uTexture, uv).rgb;
  texColor = vec3(dot(texColor, vec3(0.299, 0.587, 0.114)));

  vec3 resultColor = mix(texColor, halftone(uv, uTime * 0.5, 0.5, 25.0, vec3(0.45)), 0.6);
  resultColor = mix(resultColor, halftone(uv, uTime * 0.5, 3.0, 15.0, vec3(0.55)), 0.4);

  float vignette = smoothstep(0.0, 1.0, pow(length(vUv - 0.5) * 1.5, 3.0));
  gl_FragColor.rgb = mix(resultColor, vec3(0.0), vignette);
  gl_FragColor.a = 1.0;
}
`;

// Background shader
const backgroundVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const backgroundFragmentShader = `
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;
void main() {
  vec3 color = mix(uColor1, uColor2, vUv.x);
  gl_FragColor = vec4(color, 1.0);
}
`;

export default function DimensionalPrism() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth || 600;
    const height = container.offsetHeight || 600;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scenes
    const mainScene = new THREE.Scene();
    const bgScene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // Background setup
    const bgGeometry = new THREE.PlaneGeometry(20, 20);
    const bgMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uColor1: { value: new THREE.Color('#E0DCFF') },
        uColor2: { value: new THREE.Color('#D2F5F0') },
      },
      vertexShader: backgroundVertexShader,
      fragmentShader: backgroundFragmentShader,
      depthWrite: false,
    });
    const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
    bgMesh.position.z = -5;
    bgScene.add(bgMesh);

    // Background render target
    const bgRenderTarget = new THREE.WebGLRenderTarget(width, height);

    // Load texture for fragment shader material
    const textureLoader = new THREE.TextureLoader();
    const gradientTexture = textureLoader.load('/gradient-texture.jpg');
    gradientTexture.wrapS = THREE.ClampToEdgeWrapping;
    gradientTexture.wrapT = THREE.ClampToEdgeWrapping;

    // Fragment shader material plane (for refractor to sample)
    const sourceGeometry = new THREE.PlaneGeometry(10, 10);
    const sourceMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: gradientTexture },
        uResolution: { value: new THREE.Vector2(width, height) },
        uImageRes: { value: new THREE.Vector2(1024, 1024) },
      },
      vertexShader: fragmentShaderMaterialVertex,
      fragmentShader: fragmentShaderMaterialFragment,
      side: THREE.DoubleSide,
    });
    const sourceMesh = new THREE.Mesh(sourceGeometry, sourceMaterial);
    sourceMesh.position.z = -2;
    mainScene.add(sourceMesh);

    // Prism (Refractor)
    const prismGeometry = createRoundedBoxGeometry(2, 2, 2, 16, 0.25);
    const prism = new Refractor(prismGeometry, {
      width: 512,
      height: 512,
      materialConf: {
        transparent: true,
        opacity: 0.45,
      },
    });
    mainScene.add(prism);

    // Lights
    const spotLight = new THREE.SpotLight('#FFFFFF', 30, 20, 1.0, 0.5, 1.0);
    spotLight.position.set(0, 0, 10);
    mainScene.add(spotLight);

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.1);
    mainScene.add(ambientLight);

    // Animation
    let time = 0;

    const tick = () => {
      time += 0.01;

      prism.rotation.x = time * 0.1;
      prism.rotation.y = time * 0.15;
      prism.rotation.z = time * 0.05;

      sourceMaterial.uniforms.uTime.value = time;

      // Render background to offscreen target
      renderer.setRenderTarget(bgRenderTarget);
      renderer.render(bgScene, camera);
      renderer.setRenderTarget(null);

      // Render main scene
      renderer.render(mainScene, camera);

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    // Resize handler
    const handleResize = () => {
      const w = container.offsetWidth || 600;
      const h = container.offsetHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      bgRenderTarget.setSize(w, h);
      sourceMaterial.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      prism.dispose();
      bgRenderTarget.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '500px',
        position: 'relative',
      }}
    />
  );
}
