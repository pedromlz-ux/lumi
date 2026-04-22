import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Post } from "@/data/posts";
import { motion } from "framer-motion";

interface BlogListingProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts: Post[];
}

export const BlogListing = ({
  tagline = "LUMI Insights",
  heading = "Conteúdo para quem busca escala",
  description = "Exploramos as fronteiras da automação inteligente e estratégias avançadas para transformar sua operação em uma máquina de vendas.",
  buttonText = "Ver todos os artigos",
  buttonUrl = "/blog",
  posts,
}: BlogListingProps) => {
  return (
    <section className="py-12 sm:py-24">
      <div className="container mx-auto flex flex-col items-center gap-12 sm:gap-16 lg:px-16">
        <div className="text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-6 bg-[#611CFC]/10 text-[#611CFC] border-[#611CFC]/20 px-4 py-1.5 rounded-full uppercase tracking-widest text-[10px] font-black">
              {tagline}
            </Badge>
            <h2 className="mb-4 text-pretty text-3xl font-black md:mb-6 md:text-5xl lg:text-6xl text-[#1A1A2E] leading-tight">
              {heading}
            </h2>
            <p className="mb-8 text-[#6B6B78] md:text-lg lg:text-xl font-medium leading-relaxed">
              {description}
            </p>
            <Button variant="link" className="text-[#611CFC] font-bold gap-2 p-0 h-auto hover:no-underline hover:opacity-80" asChild>
              <Link to={buttonUrl}>
                {buttonText}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="grid grid-rows-[auto_auto_1fr_auto] h-full overflow-hidden rounded-[2.5rem] border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(97,28,252,0.05)] hover:shadow-[0_40px_80px_rgba(97,28,252,0.12)] transition-all duration-500 hover:-translate-y-2 group">
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <Link
                    to={`/blog/${post.id}`}
                    className="block w-full h-full"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#1A1A2E] shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                </div>
                <CardHeader className="p-8 pb-4">
                  <h3 className="text-xl font-bold text-[#1A1A2E] group-hover:text-[#611CFC] transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                </CardHeader>
                <CardContent className="px-8 pb-6">
                  <p className="text-sm text-[#6B6B78] line-clamp-3 leading-relaxed font-medium font-inter">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#611CFC] flex items-center justify-center overflow-hidden border border-[#611CFC]/10">
                      <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-bold text-[#6B6B78] uppercase tracking-wider">{post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center text-sm font-black text-[#611CFC] uppercase tracking-widest group/link"
                  >
                    Ler mais
                    <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
