"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Flame, Users, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
            {/* Pendaran Cahaya Dinamis */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-red-600/20 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[200px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Ornamen Badge Melayang 1 (Kiri Atas) */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:flex items-center gap-3 absolute top-36 left-12 xl:left-24 px-4 py-2.5 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-xl pointer-events-none z-20"
            >
                <div className="w-8 h-8 rounded-xl bg-red-500/20 text-red-500 flex items-center justify-center">
                    <Flame size={18} />
                </div>
                <div className="text-left">
                    <p className="text-[11px] text-neutral-400 font-medium">Keluarga & Sahabat</p>
                    <p className="text-xs font-bold text-white tracking-wide">Solidaritas Tanpa Syarat</p>
                </div>
            </motion.div>

            {/* Ornamen Badge Melayang 2 (Kanan Tengah) */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="hidden lg:flex items-center gap-3 absolute top-1/2 right-10 xl:right-24 px-4 py-2.5 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-xl pointer-events-none z-20"
            >
                <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Sparkles size={18} />
                </div>
                <div className="text-left">
                    <p className="text-[11px] text-neutral-400 font-medium">Gerakan Positif</p>
                    <p className="text-xs font-bold text-white tracking-wide">Aksi Nyata Pemuda</p>
                </div>
            </motion.div>

            {/* Ornamen Badge Melayang 3 (Kiri Bawah) */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="hidden lg:flex items-center gap-3 absolute bottom-20 left-20 xl:left-36 px-4 py-2.5 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-xl pointer-events-none z-20"
            >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Users size={18} />
                </div>
                <div className="text-left">
                    <p className="text-[11px] text-neutral-400 font-medium">Jejaring</p>
                    <p className="text-xs font-bold text-white tracking-wide">Terbuka Untuk Bersahabat</p>
                </div>
            </motion.div>

            {/* Konten Utama */}
            <div className="relative max-w-4xl mx-auto text-center z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs tracking-wider uppercase mb-6 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Ruang Silaturahmi & Persaudaraan
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.1]">
                    Bukan Sekadar Kumpul, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-400">
                        Ini Tentang Persaudaraan.
                    </span>
                </h1>

                <p className="mt-6 text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Selamat datang di rumah digital <strong>Blok 12 Brotherhood</strong>. Tempat kami berbagi cerita, menjaga tali kebersamaan, dan mengubah tongkrongan menjadi karya serta aksi nyata yang berdampak.
                </p>

                {/* Tombol Interaksi Baru Khusus Publik */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/program"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-red-600/30 active:scale-95"
                    >
                        Lihat Cerita & Kegiatan <ArrowRight size={18} />
                    </Link>
                    <a
                        href="https://www.instagram.com/blok12_brotherhood"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-200 font-semibold rounded-xl transition-all active:scale-95"
                    >
                        <svg
                            className="w-4 h-4 text-pink-500 fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Kunjungi Instagram Kami
                    </a>
                </div>
            </div>
        </section>
    );
}