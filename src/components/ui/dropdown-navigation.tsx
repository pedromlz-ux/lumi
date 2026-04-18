import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SubMenuItem = {
  label: string;
  description: string;
  icon: LucideIcon;
  link?: string;
};

type SubMenu = {
  title: string;
  items: SubMenuItem[];
};

type NavItem = {
  id: number;
  label: string;
  subMenus?: SubMenu[];
  link?: string;
};

type DropdownNavigationProps = {
  navItems: NavItem[];
  isDark?: boolean;
};

export function DropdownNavigation({ navItems, isDark }: DropdownNavigationProps) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  const textClass = isDark ? "text-white/70 hover:text-white" : "text-[#6B6B78] hover:text-[#611CFC]";
  const hoverBgClass = isDark ? "bg-white/10" : "bg-[#611CFC]/5";

  return (
    <div className="relative flex items-center justify-center">
      <ul className="relative flex items-center gap-2">
        {navItems.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.subMenus ? (
              <button
                className={cn(
                  "text-sm font-medium py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1.5 relative z-10",
                  textClass
                )}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                <ChevronDown
                  className={`h-4 w-4 relative z-10 text-current transition-transform duration-300
                    ${openMenu === navItem.label ? "rotate-180" : ""}`}
                />
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className={cn("absolute inset-0", hoverBgClass)}
                    style={{ borderRadius: 99 }}
                  />
                )}
              </button>
            ) : (
              <a
                href={navItem.link}
                className={cn(
                  "text-sm font-medium py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 relative z-10",
                  textClass
                )}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                {(isHover === navItem.id) && (
                  <motion.div
                    layoutId="hover-bg"
                    className={cn("absolute inset-0", hoverBgClass)}
                    style={{ borderRadius: 99 }}
                  />
                )}
              </a>
            )}

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="bg-white/95 backdrop-blur-xl border border-[#611CFC]/10 p-6 shadow-[0_20px_50px_rgba(97,28,252,0.15)] overflow-hidden"
                    style={{ borderRadius: 24 }}
                    layoutId="menu"
                  >
                    <div className="flex gap-10">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="min-w-[200px]" key={sub.title}>
                          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-[#611CFC]/50">
                            {sub.title}
                          </h3>
                          <ul className="space-y-4">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <a
                                    href={item.link || "#"}
                                    className="flex items-center space-x-4 group/item"
                                  >
                                    <div className="bg-white border border-[#611CFC]/10 text-[#611CFC] rounded-xl flex items-center justify-center size-10 shrink-0 group-hover/item:bg-[#611CFC] group-hover/item:text-white transition-all duration-300 shadow-sm">
                                      <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex flex-col">
                                      <p className="text-sm font-bold text-[#1A1A2E]">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-[#6B6B78] group-hover/item:text-[#1A1A2E] transition-colors duration-300">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}
