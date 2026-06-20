import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Jl. Sudirman No. 45, Lantai 8\nJakarta Pusat, DKI Jakarta 10220',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 21 5555 1234\n+62 812 3456 7890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@andrajaya.co.id\nproyek@andrajaya.co.id',
  },
  {
    icon: Clock,
    label: 'Jam Kerja',
    value: 'Senin – Jumat: 08.00 – 17.00\nSabtu: 08.00 – 13.00',
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-navy-500 transition-all text-sm';

  return (
    <section id="kontak" className="section-padding bg-white dark:bg-navy-900">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">Kontak</span>
            <h2 className="section-title">Hubungi Kami</h2>
            <p className="section-subtitle mx-auto">
              Ada pertanyaan atau ingin konsultasi proyek? Tim kami siap membantu Anda kapan saja.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4 p-5 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-100 dark:border-navy-700">
                  <div className="w-10 h-10 bg-navy-100 dark:bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-navy-700 dark:text-navy-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 dark:text-white text-sm mb-1">{item.label}</div>
                    {item.value.split('\n').map((line, i) => (
                      <div key={i} className="text-slate-500 dark:text-slate-400 text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </FadeIn>

            {/* Google Maps Embed */}
            <FadeIn delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-navy-700 h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81724831476895!3d-6.194938395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sid!2sid!4v1678886400000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi PT Andra Jaya Sejahtera"
                />
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <FadeIn delay={0.15}>
            <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-8 border border-slate-100 dark:border-navy-700 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="font-display font-bold text-2xl text-navy-900 dark:text-white mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">
                    Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 1×24 jam kerja.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-navy-900 dark:text-white mb-6">
                    Kirim Pesan
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        No. Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+62 812 xxxx xxxx"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@perusahaan.com"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Kebutuhan Layanan
                    </label>
                    <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                      <option value="">Pilih layanan...</option>
                      <option>Konstruksi Bangunan</option>
                      <option>Renovasi Gedung</option>
                      <option>Pengadaan Barang</option>
                      <option>Konsultasi Proyek</option>
                      <option>Manajemen Konstruksi</option>
                      <option>Maintenance & Perawatan</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ceritakan kebutuhan proyek Anda..."
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email || !form.message}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Mengirim...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Kirim Pesan
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
