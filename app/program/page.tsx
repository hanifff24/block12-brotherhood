import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { Sparkles, Target, Compass } from "lucide-react";

export default function ProgramPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="pt-32 pb-12 px-6 text-center relative overflow-hidden">
                <div className="max-w-3xl mx-auto z-10 relative">
                    <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
                        Aktivitas & Rencana
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black uppercase text-white mt-2">
                        Program Kerja & Agenda
                    </h1>
                    <p className="text-neutral-400 text-sm md:text-base mt-4 leading-relaxed">
                        Deretan inisiatif strategis, kegiatan sosial, dan agenda tahunan yang dijalankan secara profesional oleh Blok 12 Brotherhood.
                    </p>
                </div>
            </section>

            {/* Pilar Program */}
            <section className="py-8 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-neutral-950/80 border border-white/5 p-6 rounded-2xl">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-4">
                            <Target size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Aksi Sosial Mandiri</h3>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                            Program tanggap kepedulian lingkungan dan bakti sosial yang menyasar masyarakat membutuhkan secara langsung.
                        </p>
                    </div>

                    <div className="bg-neutral-950/80 border border-white/5 p-6 rounded-2xl">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                            <Compass size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Gathering & Solidaritas</h3>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                            Pertemuan rutin anggota lintas divisi guna mempererat persaudaraan dan konsolidasi rencana kerja komunitas.
                        </p>
                    </div>

                    <div className="bg-neutral-950/80 border border-white/5 p-6 rounded-2xl">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                            <Sparkles size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Kolaborasi Kreatif</h3>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                            Workshop pengembangan kemampuan, perilisan merchandise orisinal, serta kolaborasi kampanye bersama sponsor.
                        </p>
                    </div>
                </div>
            </section>

            {/* Roadmap Timeline */}
            <Timeline />

            <Footer />
        </main>
    );
}