import { motion } from 'framer-motion';
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface Tier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  icon: React.ReactNode;
  popular?: boolean;
}

interface SquishyPricingProps {
  tiers: Tier[];
}

export const SquishyPricing: React.FC<SquishyPricingProps> = ({ tiers }) => {
  return (
    <div className="mx-auto flex flex-nowrap justify-center gap-4 px-4 overflow-visible">
      {tiers.map((tier, index) => (
        <PricingCard
          key={tier.name}
          tier={tier}
          index={index}
        />
      ))}
    </div>
  );
};

const PricingCard = ({ tier, index }: { tier: Tier; index: number }) => {
  // Color mapping based on tier index/name for Lumia brand
  const getStyles = () => {
    if (tier.name === 'Individual') return { 
      bg: "bg-white", 
      text: "text-[#1A1A2E]", 
      accent: "text-[#611CFC]",
      btn: "bg-[#1A1A2E] text-white hover:bg-slate-800",
      tag: "bg-[#1A1A2E]/5 text-[#1A1A2E]",
      svg: "fill-[#1A1A2E]/5"
    };
    if (tier.name === 'Bundle Starter') return { 
      bg: "bg-[#4ECDC4]", 
      text: "text-[#1A1A2E]", 
      accent: "text-[#1A1A2E]",
      btn: "bg-[#1A1A2E] text-white hover:bg-slate-800",
      tag: "bg-white/30 text-[#1A1A2E]",
      svg: "fill-[#1A1A2E]/10"
    };
    if (tier.name === 'Bundle Pro') return { 
      bg: "bg-[#611CFC]", 
      text: "text-white", 
      accent: "text-white",
      btn: "bg-white text-[#611CFC] hover:bg-white/90",
      tag: "bg-white/20 text-white",
      svg: "fill-white/10"
    };
    return { // Enterprise (Preto)
      bg: "bg-[#0A0A0A]", 
      text: "text-white", 
      accent: "text-[#4ECDC4]",
      btn: "bg-white text-[#0A0A0A] hover:bg-slate-100",
      tag: "bg-white/10 text-white",
      svg: "fill-white/10"
    };
  };

  const styles = getStyles();
  const BGComponents = [BGComponent1, BGComponent2, BGComponent3, BGComponent4];
  const SelectedBG = BGComponents[index % BGComponents.length];

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      variants={{ 
        hover: { scale: 1.05, y: -10 },
        initial: { scale: 1, y: 0 }
      }}
      className={`relative min-h-[580px] w-full sm:w-[300px] shrink-0 overflow-hidden rounded-[2.5rem] p-8 ${styles.bg} shadow-2xl transition-shadow flex flex-col border border-white/10`}
    >
      <div className={`relative z-10 ${styles.text} flex flex-col h-full`}>
        {/* Label Tag */}
        <div className="flex justify-between items-start mb-6">
          <span className={`block w-fit rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest border border-current/10 ${styles.tag}`}>
            {tier.name}
          </span>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-current/10 ${styles.tag}`}>
            {tier.icon}
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <motion.div
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-baseline gap-1 origin-left"
          >
            {tier.price !== 'Sob Consulta' && <span className="text-xl font-black opacity-40">R$</span>}
            <span className={`block font-black tracking-tighter leading-none ${tier.price === 'Sob Consulta' ? 'text-4xl' : 'text-6xl'}`}>
              {tier.price}
            </span>
          </motion.div>
          {tier.price !== 'Sob Consulta' && <span className="text-xs font-black opacity-40 uppercase tracking-widest ml-1">/ Mês</span>}
        </div>

        {/* Description */}
        <p className="text-sm font-bold opacity-70 mb-8 leading-relaxed italic">
          "{tier.description}"
        </p>

        {/* Features List */}
        <div className="space-y-4 mb-10 flex-grow">
          {tier.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Check className={`w-4 h-4 mt-0.5 shrink-0 ${styles.accent}`} strokeWidth={3} />
              <span className="text-[11px] font-black leading-tight uppercase tracking-tight opacity-70">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`relative z-20 w-full py-5 rounded-2xl flex items-center justify-between px-6 font-black uppercase text-[11px] tracking-[0.2em] transition-all duration-300 ${styles.btn}`}>
          {tier.cta}
          <ArrowRight size={18} />
        </button>
      </div>

      <SelectedBG fillColor={styles.svg} />
    </motion.div>
  );
};

const BGComponent1 = ({ fillColor }: { fillColor: string }) => (
  <motion.svg
    width="400"
    height="400"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.4, rotate: 10 } }}
    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
    className="absolute -right-20 -bottom-20 z-0 opacity-40"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.6, y: -30 } }}
      transition={{ duration: 1, ease: "backInOut" }}
      cx="160.5"
      cy="114.5"
      r="120.5"
      className={fillColor}
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.5, y: -40, rotate: 15 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.1 }}
      cx="160.5"
      cy="265.5"
      rx="120.5"
      ry="50.5"
      className={fillColor}
    />
  </motion.svg>
);

const BGComponent2 = ({ fillColor }: { fillColor: string }) => (
  <motion.svg
    width="400"
    height="400"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.1, rotate: -5 } }}
    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
    className="absolute -right-10 -top-20 z-0 opacity-40"
  >
    <motion.rect
      x="14"
      width="180"
      height="180"
      rx="40"
      className={fillColor}
      variants={{ hover: { y: 220, rotate: "45deg", scale: 1.2 } }}
      style={{ y: 20 }}
      transition={{ delay: 0.1, duration: 1.2, ease: "backInOut" }}
    />
    <motion.rect
      x="160"
      width="180"
      height="180"
      rx="40"
      className={fillColor}
      variants={{ hover: { y: 20, rotate: "-45deg", scale: 1.2 } }}
      style={{ y: 220 }}
      transition={{ delay: 0.1, duration: 1.2, ease: "backInOut" }}
    />
  </motion.svg>
);

const BGComponent3 = ({ fillColor }: { fillColor: string }) => (
  <motion.svg
    width="400"
    height="400"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.3, rotate: 15 } }}
    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
    className="absolute -left-20 -bottom-20 z-0 opacity-40"
  >
    <motion.path
      variants={{ hover: { y: -60, x: 20 } }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      d="M148.893 157.531C154.751 151.673 164.249 151.673 170.107 157.531L267.393 254.818L100.25 324.674L51.6068 254.818L148.893 157.531Z"
      className={fillColor}
    />
    <motion.path
      variants={{ hover: { y: -40, x: -10 } }}
      transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
      d="M148.893 99.069C154.751 93.2111 164.249 93.2111 170.107 99.069L267.393 196.356L100.25 266.212L51.6068 196.356L148.893 99.069Z"
      className={fillColor}
    />
  </motion.svg>
);

const BGComponent4 = ({ fillColor }: { fillColor: string }) => (
  <motion.svg
    width="400"
    height="400"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5, rotate: -20 } }}
    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
    className="absolute inset-0 z-0 opacity-40"
  >
    <motion.path
      variants={{ hover: { scale: 1.2, x: 50, y: 50 } }}
      transition={{ duration: 1.5, ease: "backInOut" }}
      d="M50,50 Q160,0 270,50 T270,250 T50,250 Z"
      className={fillColor}
    />
    <motion.path
      variants={{ hover: { scale: 0.8, x: -30, y: -30 } }}
      transition={{ duration: 1.2, ease: "backInOut" }}
      d="M100,100 Q160,50 220,100 T220,200 T100,200 Z"
      className={fillColor}
    />
  </motion.svg>
);

export default SquishyPricing;
