"use client";

import { useState } from "react";
import { Camera, ArrowUpRight, Sparkles } from "lucide-react";

interface ActivityItem {
    id: number;
    title: string;
    category: "Gathering" | "Sosial" | "Kreatif";
    date: string;
    description: string;
    image?: string; // Tautan gambar lokal misal '/gallery/foto1.jpg'
}

const activities: ActivityItem[] = [
    {
        id: 1,
        title: "Malam Keakraban & Kopi Santai",
        category: "Gathering",
        date: "Agenda Rutin",
        description: "Ruang berbagi cerita, mempererat silaturahmi, dan merawat kebersamaan antaranggota lintas generasi.",
    },
    {
        id: 2,
        title: "Aksi Tanggap Berbagi Sesama",
        category: "Sosial",
        date: "Bakti Sosial",
        description: "Penyaluran bantuan langsung dan keterlibatan aktif anggota untuk membantu warga sekitar.",
    },
    {
        id: 3,
        title: "Project Kolaborasi & Merchandise",
        category: "Kreatif",
        date: "Karya Mandiri",
        description: "Inisiatif kreatif anggota dalam merancang identitas visual, atribut, dan karya bersama.",
    },
    {
        id: 4,
        title: "Touring & Silaturahmi Komunitas",
        category: "Gathering",
        date: "Kegiatan Khusus",
        description: "Perjalanan bersama menjelajahi rute baru seraya membangun solidaritas di jalan dan persaudaraan tanpa sekat.",
    },
];

export default function Gallery() {
    const [filter, setFilter] = useState<string>("Semua");

    const filteredItems =
        filter === "Semua"
            ? activities
            : activities.filter((item) => item.category === filter);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
            {/* Judul & Narasi Seksi */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-red-500 font-bold mb-2">
                        <Camera size={15} /> Jejak Langkah & Cerita
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
                        Momen & Dokumentasi
                    </h2>
                    <p className="text-neutral-400 text-sm mt-2 max-w-xl">
                        Kumpulan kilas balik kegiatan nyata kami di lapangan. Setiap momen menyimpan cerita persaudaraan yang tak tergantikan.
                    </p>
                </div>

                {/* Tombol Filter Kategori */}
                <div className="flex flex-wrap gap-2">
                    {["Semua", "Gathering", "Sosial", "Kreatif"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${filter === cat
                                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                                    : "bg-neutral-900 text-neutral-400 hover:text-white border border-white/5 hover:border-white/20"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Kartu Dokumentasi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="group relative bg-neutral-950/80 border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between min-h-[220px] overflow-hidden"
                    >
                        {/* Background Glow saat hover */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-2xl rounded-full group-hover:bg-red-600/20 transition-all pointer-events-none" />

                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-neutral-900 border border-white/10 text-red-400 uppercase tracking-wide">
                                    {item.category}
                                </span>
                                <span className="text-xs text-neutral-500 font-medium">{item.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors flex items-center gap-2">
                                {item.title}
                                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400" />
                            </h3>

                            <p className="text-sm text-neutral-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
                            <span className="flex items-center gap-1.5 text-neutral-400 font-medium">
                                <Sparkles size={13} className="text-red-500" /> Blok 12 Authentic Archive
                            </span>
                            <a
                                href="https://www.instagram.com/blok12_brotherhood"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                Lihat di Instagram &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}