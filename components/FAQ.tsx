"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Apa fokus utama kegiatan Blok 12 Brotherhood?",
        a: "Blok 12 Brotherhood berfokus pada penguatan persaudaraan antar-pemuda melalui kegiatan sosial kemasyarakatan, kegiatan kreatif berkala, serta penyelenggaraan event komunitas yang positif.",
    },
    {
        q: "Bagaimana cara brand atau instansi mengajukan sponsorship?",
        a: "Calon mitra dapat mengunduh Pitch Deck resmi di bagian Kemitraan atau langsung menghubungi kontak humas kami via WhatsApp untuk mendiskusikan proposal dan kustomisasi aktivasi brand.",
    },
    {
        q: "Apakah komunitas ini terbuka untuk anggota baru?",
        a: "Ya, kami membuka pendaftaran anggota baru secara berkala sesuai timeline roadmap kegiatan. Pengumuman resmi dibagikan lewat website dan kanal Instagram resmi.",
    },
    {
        q: "Benefit apa saja yang didapatkan oleh pihak sponsor?",
        a: "Mulai dari logo placement pada atribut event, penyebutan berkala di media sosial komunitas, pendirian booth aktivasi produk, hingga akses interaksi langsung dengan audiens komunitas.",
    },
];

export default function FAQ() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-wider text-red-500 font-bold">FAQ</span>
                <h2 className="text-3xl font-black text-white uppercase mt-2">Pertanyaan Umum</h2>
            </div>

            <div className="space-y-4">
                {faqs.map((item, idx) => {
                    const isOpen = activeIdx === idx;
                    return (
                        <div
                            key={idx}
                            className="border border-white/10 rounded-xl bg-neutral-950 overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIdx(isOpen ? null : idx)}
                                className="w-full p-5 text-left flex justify-between items-center text-sm md:text-base font-semibold text-neutral-200 hover:text-white transition-colors"
                            >
                                <span>{item.q}</span>
                                <ChevronDown
                                    size={18}
                                    className={`text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-red-500" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-3">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}