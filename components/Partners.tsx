"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function Partners() {
    const tiers = [
        { tier: "Main Sponsor", slots: ["Slot Terbuka", "Slot Terbuka"] },
        { tier: "Official Partners", slots: ["Partner A", "Partner B", "Partner C", "Partner D"] },
        { tier: "Media & Community Partners", slots: ["Media 1", "Media 2", "Media 3", "Media 4", "Media 5", "Media 6"] },
    ];

    return (
        <section className="py-16 px-6 bg-neutral-950/40 border-t border-white/5">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
                    <Handshake size={15} /> Sinergi & Kolaborator
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase mb-10">
                    Didukung Oleh Mitra Terpercaya
                </h2>

                <div className="space-y-8">
                    {tiers.map((t, idx) => (
                        <div key={idx}>
                            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4 block">
                                {t.tier}
                            </span>
                            <div className="flex flex-wrap justify-center gap-4">
                                {t.slots.map((name, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.03 }}
                                        className="px-6 py-4 rounded-lg bg-neutral-900/80 border border-dashed border-white/10 hover:border-red-500/50 flex items-center justify-center min-w-[140px] text-neutral-400 text-xs font-medium tracking-wide transition-colors"
                                    >
                                        {name}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}