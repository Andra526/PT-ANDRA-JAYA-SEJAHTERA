import type { Service, Project, TeamMember, Testimonial, Stat, NavLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Tim', href: '#tim' },
  { label: 'Kontak', href: '#kontak' },
];

export const services: Service[] = [
  {
    id: 1,
    icon: '🏗️',
    title: 'Konstruksi Bangunan',
    description: 'Pembangunan gedung komersial, perumahan, dan fasilitas industri dengan standar mutu SNI dan manajemen proyek terkontrol.',
    features: ['Desain & Build', 'Manajemen Site', 'Quality Control', 'K3 Terjamin'],
  },
  {
    id: 2,
    icon: '🔨',
    title: 'Renovasi Gedung',
    description: 'Modernisasi dan pemugaran bangunan eksisting untuk meningkatkan fungsi, estetika, serta nilai aset properti Anda.',
    features: ['Audit Bangunan', 'Desain Interior', 'Pengerjaan Rapi', 'Minim Gangguan'],
  },
  {
    id: 3,
    icon: '📦',
    title: 'Pengadaan Barang',
    description: 'Layanan pengadaan material bangunan, peralatan kantor, dan perlengkapan operasional dengan harga kompetitif dan terverifikasi.',
    features: ['Vendor Terseleksi', 'Harga Terbaik', 'Pengiriman Tepat', 'Garansi Produk'],
  },
  {
    id: 4,
    icon: '📋',
    title: 'Konsultasi Proyek',
    description: 'Pendampingan teknis dan strategis dari tahap perencanaan hingga serah terima proyek dengan tim konsultan berpengalaman.',
    features: ['Feasibility Study', 'RAB & Estimasi', 'Jadwal Proyek', 'Risk Assessment'],
  },
  {
    id: 5,
    icon: '⚙️',
    title: 'Manajemen Konstruksi',
    description: 'Pengelolaan menyeluruh proyek konstruksi mulai dari mobilisasi, pengawasan, koordinasi subkontraktor, hingga dokumentasi akhir.',
    features: ['Monitoring Proyek', 'Laporan Berkala', 'Cost Control', 'As-Built Drawing'],
  },
  {
    id: 6,
    icon: '🔧',
    title: 'Maintenance & Perawatan',
    description: 'Program pemeliharaan preventif dan korektif untuk menjaga kinerja aset infrastruktur dan bangunan jangka panjang.',
    features: ['Jadwal Rutin', 'Respon Cepat', 'Tim Standby', 'Laporan Kondisi'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Gedung Perkantoran Sentral',
    category: 'Konstruksi',
    location: 'Jakarta Selatan',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    description: 'Pembangunan gedung perkantoran 8 lantai dengan luas 6.200 m² dilengkapi sistem mekanikal-elektrikal terkini.',
  },
  {
    id: 2,
    title: 'Renovasi Sekolah Menengah',
    category: 'Renovasi',
    location: 'Bandung',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    description: 'Renovasi total 12 ruang kelas, laboratorium, dan fasilitas olahraga untuk meningkatkan mutu pendidikan.',
  },
  {
    id: 3,
    title: 'Gudang Industri Logistik',
    category: 'Konstruksi',
    location: 'Karawang',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
    description: 'Pembangunan gudang modern seluas 4.800 m² dengan sistem penyimpanan racking dan loading dock standar internasional.',
  },
  {
    id: 4,
    title: 'Pengadaan Peralatan Kantor',
    category: 'Pengadaan',
    location: 'Surabaya',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    description: 'Pengadaan 500 unit workstation, sistem server, dan furniture kantor untuk instansi pemerintah daerah.',
  },
  {
    id: 5,
    title: 'Infrastruktur Jalan Lingkungan',
    category: 'Infrastruktur',
    location: 'Semarang',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    description: 'Proyek peningkatan jalan lingkungan 3,2 km dengan drainase dan penerangan jalan umum terintegrasi.',
  },
  {
    id: 6,
    title: 'Pusat Perbelanjaan Modern',
    category: 'Konstruksi',
    location: 'Yogyakarta',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    description: 'Pembangunan pusat perbelanjaan 3 lantai seluas 9.500 m² dengan konsep green building dan sistem HVAC efisien.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ir. Andrianto Wijaya, M.T.',
    position: 'Direktur Utama',
    description: 'Lebih dari 20 tahun pengalaman di industri konstruksi nasional. Memimpin lebih dari 80 proyek strategis di seluruh Indonesia.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Drs. Budi Santosa, PMP',
    position: 'Project Manager',
    description: 'Bersertifikasi PMP internasional dengan rekam jejak pengelolaan proyek multi-miliar dari sektor komersial dan pemerintah.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Ir. Citra Ayu Lestari',
    position: 'Site Engineer',
    description: 'Ahli teknik sipil lulusan ITB dengan spesialisasi struktur bangunan bertingkat dan pengawasan lapangan presisi tinggi.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Diana Puspita, S.E., M.M.',
    position: 'Finance Manager',
    description: 'Pakar manajemen keuangan proyek konstruksi dengan pengalaman audit dan pelaporan keuangan untuk klien BUMN dan swasta nasional.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80',
    linkedin: '#',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    company: 'PT Mandiri Properti Indonesia',
    position: 'Direktur Pengembangan',
    content: 'PT Andra Jaya Sejahtera menyelesaikan proyek gedung kami tepat waktu dan melebihi standar kualitas yang disepakati. Tim mereka sangat profesional, komunikatif, dan responsif. Kami sangat puas dan tidak ragu untuk bermitra kembali di proyek berikutnya.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    company: 'Dinas Pendidikan Kota Bandung',
    position: 'Kepala Bagian Pengadaan',
    content: 'Proses pengadaan barang melalui Andra Jaya sangat transparan dan efisien. Seluruh spesifikasi terpenuhi, pengiriman sesuai jadwal, dan harga sangat kompetitif. Menjadi mitra pengadaan terpercaya kami selama tiga tahun berturut-turut.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: 3,
    name: 'Hendri Setiawan',
    company: 'CV Nusantara Logistik',
    position: 'General Manager',
    content: 'Renovasi gudang kami selesai 2 minggu lebih cepat dari jadwal tanpa mengorbankan kualitas sedikit pun. Komunikasi tim sangat baik, laporan progres selalu tepat, dan hasilnya benar-benar melampaui ekspektasi kami.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
];

export const stats: Stat[] = [
  { value: '100', label: 'Proyek Selesai', suffix: '+' },
  { value: '50', label: 'Klien Puas', suffix: '+' },
  { value: '10', label: 'Tahun Pengalaman', suffix: '+' },
  { value: '30', label: 'Tenaga Profesional', suffix: '+' },
];

export const companyValues = [
  {
    icon: '🤝',
    title: 'Integritas',
    description: 'Kami menjunjung tinggi kejujuran dan transparansi dalam setiap aspek pekerjaan dan hubungan bisnis.',
  },
  {
    icon: '⭐',
    title: 'Profesionalisme',
    description: 'Tim kami terdiri dari tenaga ahli bersertifikasi yang berkomitmen pada standar kualitas tertinggi.',
  },
  {
    icon: '💡',
    title: 'Inovasi',
    description: 'Kami terus mengadopsi teknologi dan metode terkini untuk solusi konstruksi yang lebih efisien dan efektif.',
  },
  {
    icon: '😊',
    title: 'Kepuasan Pelanggan',
    description: 'Kepuasan klien adalah tolok ukur keberhasilan kami. Setiap proyek dikerjakan sepenuh hati.',
  },
];
