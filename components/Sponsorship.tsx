"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, Send } from "lucide-react";

const benefits = [
    "Branding placement di setiap event besar dan atribut merchandise.",
    "Eksposur media sosial melalui kampanye Instagram & dokumentasi video.",
    "Akses langsung ke basis audiens pemuda yang aktif dan loyal.",
    "Kolaborasi aktivasi khusus (booth sponsorship, product sampling).",
];

export default function Sponsorship() {
    return (
        <section id="sponsorship" className="py-24 px-6 relative">
            <div className="max-w-5xl mx-auto bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="text-xs uppercase tracking-wider text-red-500 font-bold">Kolaborasi & Kemitraan</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4 uppercase">
                            Tumbuh Bersama Blok 12
                        </h2>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Kami membuka peluang kemitraan strategis dengan brand, bisnis, maupun instansi yang ingin menjalin kedekatan langsung dengan komunitas.
                        </p>

                        <ul className="space-y-3">
                            {benefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-black/50 border border-white/5 p-6 rounded-xl flex flex-col justify-center text-center">
                        <h3 className="text-lg font-bold text-white mb-2">Dapatkan Proposal Resmi</h3>
                        <p className="text-xs text-neutral-400 mb-6">
                            Pelajari rincian skema kerja sama, data audiens, dan jadwal agenda mendatang.
                        </p>

                        <a
                            href="#"
                            className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 text-sm border border-white/10 mb-3 transition-colors"
                        >
                            <FileText size={16} /> Unduh Pitch Deck (PDF)
                        </a>

                        <a
                            href="https://wa.me/6289608323966"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 text-sm transition-colors shadow-lg shadow-red-600/30"
                        >
                            <Send size={16} /> Hubungi via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}