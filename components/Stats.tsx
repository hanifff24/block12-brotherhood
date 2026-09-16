"use client";

import { Users, Calendar, Award, Sparkles } from "lucide-react";

const stats = [
    { icon: Users, label: "Anggota Terdaftar", value: "100+" },
    { icon: Calendar, label: "Kegiatan Sukses", value: "25+" },
    { icon: Award, label: "Mitra & Kolaborator", value: "10+" },
    { icon: Sparkles, label: "Jangkauan Audiens", value: "5k+" },
];

export default function Stats() {
    return (
        <section id="stats" className="py-16 bg-neutral-950/80 border-y border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
                    >
                        <item.icon className="w-8 h-8 text-red-500 mb-3" />
                        <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            {item.value}
                        </span>
                        <span className="text-sm text-neutral-400 mt-1 font-medium">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}