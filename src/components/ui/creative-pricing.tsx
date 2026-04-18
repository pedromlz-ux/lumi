import * as React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    useCase: string;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
    link?: string;
}

function CreativePricing({
    tag = "Jornadas Lumi",
    title = "Escolha o sistema certo para cada jornada",
    description = "Os módulos devem ser apresentados por uso, não por tecnicismo",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20 relative overflow-hidden">
             {/* Background Ambience adapted for dark mode */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#611CFC]/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 text-center space-y-6 mb-20">
                <div className="text-xl md:text-2xl text-[#4ECDC4] font-bold tracking-widest uppercase animate-pulse">
                    {tag}
                </div>
                <div className="relative">
                    <h2 className="text-4xl md:text-6xl font-black text-white px-4 leading-[1.05] tracking-tight">
                        {title}
                        <div className="absolute -right-8 -top-8 text-amber-500 animate-float-slow hidden md:block text-4xl">
                            ✨
                        </div>
                        <div className="absolute -left-12 bottom-0 text-blue-500 animate-float-delayed hidden md:block text-3xl">
                            ⭐
                        </div>
                    </h2>
                    <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-80 h-3 bg-[#611CFC]/30 
                        rotate-[-1deg] rounded-full blur-xl"
                    />
                </div>
                <p className="text-xl md:text-2xl text-white/50 font-medium max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "transition-all duration-300",
                            index % 3 === 0 && "rotate-[-1deg]",
                            index % 3 === 1 && "rotate-[1deg]",
                            index % 3 === 2 && "rotate-[-1.5deg]"
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 bg-white/5 backdrop-blur-sm",
                                "border-2 border-white/10",
                                "rounded-[32px] shadow-[6px_6px_0px_0px] shadow-[#611CFC]/20",
                                "transition-all duration-300",
                                "group-hover:shadow-[12px_12px_0px_0px] group-hover:shadow-[#611CFC]/40",
                                "group-hover:translate-x-[-6px]",
                                "group-hover:translate-y-[-6px]",
                                "group-hover:bg-white/[0.08]"
                            )}
                        />

                        <div className="relative p-8 h-full flex flex-col">
                            {tier.popular && (
                                <div
                                    className="absolute -top-3 -right-3 bg-amber-400 text-zinc-900 
                                    font-bold px-4 py-1.5 rounded-full rotate-12 text-sm border-2 border-zinc-900 shadow-lg uppercase tracking-wider"
                                >
                                    Pilar Lumi!
                                </div>
                            )}

                            <div className="mb-6 flex-grow">
                                <div
                                    className={cn(
                                        "w-16 h-16 rounded-2xl mb-6 shadow-2xl",
                                        "flex items-center justify-center",
                                        "border-2 border-white/20 transition-transform duration-500 group-hover:scale-110",
                                    )}
                                    style={{ backgroundColor: tier.color }}
                                >
                                    <div className="text-white">
                                        {tier.icon}
                                    </div>
                                </div>
                                <h3 className="text-3xl text-white mb-2 font-black tracking-tight uppercase">
                                    {tier.name}
                                </h3>
                                <p className="text-white/40 text-lg font-medium leading-snug">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className="w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0"
                                        >
                                            <Check className="w-3 h-3 text-[#4ECDC4]" strokeWidth={4} />
                                        </div>
                                        <span className="text-lg text-white/70 font-semibold tracking-tight">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4">
                                <div className="text-xs font-bold text-[#4ECDC4]/50 uppercase tracking-[2px]">
                                    Uso: {tier.useCase}
                                </div>
                                <Button
                                    asChild
                                    className={cn(
                                        "w-full h-14 text-lg font-black uppercase tracking-widest relative rounded-2l",
                                        "border-2 border-white transition-all duration-300 shadow-xl",
                                        "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                        tier.popular
                                            ? "bg-amber-400 text-zinc-900 hover:bg-amber-300"
                                            : "bg-[#611CFC] text-white hover:bg-[#5215D9]"
                                    )}
                                >
                                    <a href={tier.link || "/contact"}>
                                        Ativar agora
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative doodles - subtle but present */}
            <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-10 text-6xl text-white/5 rotate-12 font-black opacity-20">
                    ✎
                </div>
                <div className="absolute bottom-[20%] right-10 text-6xl text-white/5 -rotate-12 font-black opacity-20">
                    ✏️
                </div>
            </div>
        </div>
    );
}

export { CreativePricing, type PricingTier }
