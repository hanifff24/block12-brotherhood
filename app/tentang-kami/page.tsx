import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Users, HeartHandshake, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
                <div className="max-w-3xl mx-auto z-10 relative">
                    <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
                        Mengenal Lebih Dekat
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black uppercase text-white mt-2">
                        Tentang Blok 12 Brotherhood
                    </h1>
                    <p className="text-neutral-400 text-sm md:text-base mt-4 leading-relaxed">
                        Berawal dari kebersamaan dan rasa saling peduli, tumbuh menjadi wadah pemuda yang berpegang pada integritas dan aksi nyata.
                    </p>
                </div>
            </section>

            {/* Cerita & Visi Misi */}
            <section className="py-12 px-6 max-w-5xl mx-auto space-y-12">
                <div className="bg-neutral-950/80 border border-white/5 p-8 md:p-10 rounded-2xl leading-relaxed">
                    <h2 className="text-2xl font-bold uppercase text-white mb-4">Sejarah Singkat</h2>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                        Blok 12 Brotherhood didirikan sebagai respon atas pentingnya ruang positif bagi generasi muda untuk bersinergi. Bukan sekadar tempat berkumpul, melainkan sebuah ikatan persaudaraan yang berkomitmen memberikan kontribusi nyata bagi sesama anggota dan lingkungan sekitar melalui berbagai kegiatan yang bermanfaat.
                    </p>
                </div>

                {/* Visi & Misi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-neutral-950/80 border border-white/5 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold uppercase text-white mb-3 flex items-center gap-2">
                            <Shield className="text-red-500" size={20} /> Visi Kami
                        </h3>
                        <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                            Menjadi komunitas teladan yang mandiri, solid, dan berpengaruh positif dalam merajut persaudaraan serta mendorong karya pemuda yang berdaya saing.
                        </p>
                    </div>

                    <div className="bg-neutral-950/80 border border-white/5 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold uppercase text-white mb-3 flex items-center gap-2">
                            <HeartHandshake className="text-red-500" size={20} /> Misi Kami
                        </h3>
                        <ul className="space-y-2 text-xs md:text-sm text-neutral-400 list-disc list-inside">
                            <li>Menumbuhkan rasa persaudaraan tanpa membedakan latar belakang.</li>
                            <li>Menyelenggarakan program sosial dan lingkungan yang berkesinambungan.</li>
                            <li>Membuka peluang sinergi dengan mitra dan pelaku usaha kreatif.</li>
                        </ul>
                    </div>
                </div>

                {/* Core Values */}
                <div className="pt-6">
                    <h2 className="text-2xl font-bold uppercase text-white text-center mb-8">
                        Nilai-Nilai Inti (Core Values)
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div className="p-6 rounded-xl border border-white/5 bg-neutral-900/40">
                            <Users className="mx-auto text-red-500 mb-3" size={28} />
                            <h4 className="font-bold text-white text-sm mb-1">Loyalitas</h4>
                            <p className="text-xs text-neutral-400">Menjaga komitmen dan kepercayaan bersama antaranggota.</p>
                        </div>

                        <div className="p-6 rounded-xl border border-white/5 bg-neutral-900/40">
                            <Shield className="mx-auto text-red-500 mb-3" size={28} />
                            <h4 className="font-bold text-white text-sm mb-1">Integritas</h4>
                            <p className="text-xs text-neutral-400">Mengutamakan kejujuran dan etika dalam setiap pergerakan.</p>
                        </div>

                        <div className="p-6 rounded-xl border border-white/5 bg-neutral-900/40">
                            <Award className="mx-auto text-red-500 mb-3" size={28} />
                            <h4 className="font-bold text-white text-sm mb-1">Dampak Nyata</h4>
                            <p className="text-xs text-neutral-400">Selalu berupaya menghasilkan aksi nyata yang solutif bagi sosial.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}