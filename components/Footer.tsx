import Link from "next/link";
import { Mail, MapPin, Phone, Shield } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-white/10 text-neutral-400 text-sm relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Kolom 1: Identitas Komunitas */}
                    <div className="md:col-span-1 space-y-4">
                        <Link href="/" className="text-xl font-black tracking-wider text-white uppercase inline-block">
                            Blok 12 <span className="text-red-500">Brotherhood</span>
                        </Link>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                            Wadah persaudaraan, solidaritas tanpa batas, kolaborasi kreatif, dan gerakan sosial positif di tengah masyarakat.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-red-400 font-medium">
                            <Shield size={14} /> Official Community Hub
                        </div>
                    </div>

                    {/* Kolom 2: Navigasi Cepat */}
                    <div>
                        <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-4">Navigasi</h4>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <Link href="#about" className="hover:text-white transition-colors">Tentang Kami</Link>
                            </li>
                            <li>
                                <Link href="#stats" className="hover:text-white transition-colors">Dampak & Statistik</Link>
                            </li>
                            <li>
                                <Link href="#timeline" className="hover:text-white transition-colors">Roadmap Agenda</Link>
                            </li>
                            <li>
                                <Link href="#sponsorship" className="hover:text-white transition-colors">Kemitraan & Sponsor</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Kontak & Kemitraan */}
                    <div>
                        <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-4">Sekretariat & Hubungan Luar</h4>
                        <ul className="space-y-2.5 text-xs">
                            <li className="flex items-start gap-2">
                                <MapPin size={15} className="text-red-500 shrink-0 mt-0.5" />
                                <span>Lapangan Block 12</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={15} className="text-red-500 shrink-0" />
                                <span>blok12brotherhood@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={15} className="text-red-500 shrink-0" />
                                <span>+62 812-xxxx-xxxx</span>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 4: Media Sosial */}
                    <div>
                        <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-4">Ikuti Perjalanan Kami</h4>
                        <p className="text-xs text-neutral-400 mb-4">
                            Dapatkan dokumentasi dan kabar kegiatan terbaru di akun resmi kami:
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/blok12_brotherhood"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-red-500 hover:bg-red-500/10 transition-all"
                                aria-label="Instagram Blok 12 Brotherhood"
                            >
                                <svg
                                    className="w-4 h-4 text-pink-500 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bagian Bawah: Copyright */}
                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} Dev Block 12 Brotherhood. All rights reserved.</p>
                    <p className="text-neutral-600">Built for Brotherhood & Community Synergy</p>
                </div>
            </div>
        </footer>
    );
}