import OrganicGraphics from '../components/OrganicGraphics';
import FloatingParticles from '../components/FloatingParticles';
import { BlogListing } from '@/components/blocks/BlogListing';
import { POSTS } from '@/data/posts';

export default function Blog() {
  return (
    <div className="relative pt-24 pb-24 overflow-hidden min-h-screen bg-[#F9F9FB]">
      <FloatingParticles count={20} colors={['#611CFC', '#4ECDC4', '#A78BFA']} className="opacity-30" />
      <OrganicGraphics className="opacity-15 fixed -top-20 -left-20 scale-150 -rotate-12" />
      
      <div className="relative z-10">
        <BlogListing posts={POSTS} />
      </div>
    </div>
  );
}
