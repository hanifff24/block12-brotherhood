"use client";

import { CalendarDays } from "lucide-react";

const steps = [
    {
        phase: "Q1 2026",
        title: "Brotherhood Gathering & Open Recruitment",
        desc: "Konsolidasi internal anggota, penyusunan program tahunan, dan pembukaan registrasi anggota baru.",
    },
    {
        phase: "Q2 2026",
        title: "Community Social Action & Charity",
        desc: "Aksi kemanusiaan, pembagian bantuan logistik/sosial, dan kolaborasi dengan yayasan lokal.",
    },
    {
        phase: "Q3 2026",
        title: "Creative Collab & Workshop",
        desc: "Pelatihan skill anggota bersama praktisi industri, pembuatan konten kampanye positif, dan rilis merchandise.",
    },
    {
        phase: "Q4 2026",
        title: "Anniversary & Grand Meetup",
        desc: "Event puncak tahunan yang mempertemukan anggota lintas wilayah, sponsor resmi, dan apresiasi karya.",
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-wider text-red-500 font-bold">
                    Roadmap Komunitas
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mt-2 uppercase">
                    Agenda & Rencana Kerja
                </h2>
                <p className="text-neutral-400 text-sm mt-2 max-w-xl mx-auto">
                    Rangkaian program terstruktur yang kami jalankan sepanjang tahun untuk memastikan dampak nyata dan eksposur sponsor.
                </p>
            </div>

            <div className="relative border-l border-neutral-800 ml-4 md:ml-32 space-y-10">
                {steps.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Titik Marker */}
                        <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-neutral-900 border-2 border-red-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                        </div>

                        {/* Label Periode */}
                        <span className="md:absolute md:-left-32 md:top-1.5 md:w-24 md:text-right text-xs font-bold text-red-400 flex items-center gap-1 md:justify-end mb-1 md:mb-0">
                            <CalendarDays size={13} className="inline md:hidden" />
                            {item.phase}
                        </span>

                        {/* Konten Card */}
                        <div className="bg-neutral-950/80 border border-white/5 p-5 rounded-xl hover:border-red-500/40 transition-colors shadow-lg">
                            <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}