import Hero from '../sections/Hero';
import Metrics from '../sections/Metrics';
import Integrations from '../sections/Integrations';
import ImpactBlock from '../sections/ImpactBlock';
import Capabilities from '../sections/Capabilities';
import MagicBlock from '../sections/MagicBlock';
import CTAFinal from '../sections/CTAFinal';

export default function Home() {
  return (
    <main>
      <Hero />
      <Metrics />
      <Integrations />
      <ImpactBlock />
      <Capabilities />
      <MagicBlock />
      <CTAFinal />
    </main>
  );
}
