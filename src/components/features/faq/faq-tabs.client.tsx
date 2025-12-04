"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CONTENT } from "@/config/content";
import type { FAQTabKey } from "@/lib/types";
import { faqData } from "./faq-data";
import { FAQAccordionList } from "./faq-accordion.client";

/**
 * FAQタブコンポーネント
 * Client Component - タブ切り替えインタラクションに必要
 */
export function FAQTabs() {
  const [activeTab, setActiveTab] = useState<FAQTabKey>("school");
  const { tabs } = CONTENT.faq;

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as FAQTabKey)}
      className="w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <TabsList className="mb-8 grid h-auto w-full grid-cols-2 gap-3 bg-transparent p-0">
          <TabsTrigger
            value="school"
            className={cn(
              "shimmer-effect relative flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 text-sm font-semibold transition-all duration-300 md:text-base",
              activeTab === "school"
                ? "border-gold bg-gradient-to-br from-gold/10 to-gold/5 text-navy shadow-lg shadow-gold/10"
                : "border-slate-200 bg-white text-slate-600 hover:border-gold/30 hover:bg-gold/5"
            )}
          >
            <Rocket
              className={cn("h-5 w-5", activeTab === "school" ? "text-gold" : "text-slate-400")}
            />
            <span>{tabs.school.label}</span>
            <span className="hidden text-xs font-normal opacity-70 sm:inline">
              {tabs.school.description}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="association"
            className={cn(
              "shimmer-effect relative flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 text-sm font-semibold transition-all duration-300 md:text-base",
              activeTab === "association"
                ? "border-gold bg-gradient-to-br from-gold/10 to-gold/5 text-navy shadow-lg shadow-gold/10"
                : "border-slate-200 bg-white text-slate-600 hover:border-gold/30 hover:bg-gold/5"
            )}
          >
            <Users
              className={cn("h-5 w-5", activeTab === "association" ? "text-gold" : "text-slate-400")}
            />
            <span>{tabs.association.label}</span>
            <span className="hidden text-xs font-normal opacity-70 sm:inline">
              {tabs.association.description}
            </span>
          </TabsTrigger>
        </TabsList>
      </motion.div>

      <AnimatePresence mode="wait">
        <TabsContent value="school" className="mt-0 outline-none" asChild>
          <motion.div
            key="school"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <FAQAccordionList items={faqData.school} tabKey="school" />
          </motion.div>
        </TabsContent>

        <TabsContent value="association" className="mt-0 outline-none" asChild>
          <motion.div
            key="association"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FAQAccordionList items={faqData.association} tabKey="association" />
          </motion.div>
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
}

