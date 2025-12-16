'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, Shield, AlertCircle, Users, CreditCard, Package } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <img src="/logo.svg" alt="YSDP PRINTING Logo" className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">YSDP PRINTING</h1>
                <p className="text-xs text-gray-600">YOSEF SATRIA DEWATA SOEMARSONO PUTRA</p>
              </div>
            </div>
            
            <Link href="/">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              YOSEF SATRIA DEWATA SOEMARSONO PUTRA - Ketentuan penggunaan layanan percetakan kami.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Quick Navigation */}
          <Card className="p-6 mb-12 bg-white shadow-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigasi Cepat</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Package className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Layanan</span>
              </button>
              <button
                onClick={() => scrollToSection('payment')}
                className="flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
              >
                <CreditCard className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Pembayaran</span>
              </button>
              <button
                onClick={() => scrollToSection('responsibility')}
                className="flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Tanggung Jawab</span>
              </button>
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di YSDP PRINTING. Syarat dan Ketentuan ini mengatur penggunaan layanan 
                  percetakan yang disediakan oleh <strong>YOSEF SATRIA DEWATA SOEMARSONO PUTRA</strong>. 
                  Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Harap baca syarat dan ketentuan ini dengan cermat sebelum menggunakan layanan percetakan kami. 
                  Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, jangan gunakan layanan kami.
                </p>
              </div>
            </Card>

            {/* Services */}
            <Card id="services" className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Package className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Layanan Percetakan</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Ruang Lingkup Layanan</h3>
                  <p className="text-gray-700 mb-3">
                    YSDP PRINTING menyediakan layanan percetakan umum meliputi:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Print dokumen hitam putih dan berwarna</li>
                    <li>Print foto dan poster</li>
                    <li>Desain grafis dan layout</li>
                    <li>Packaging dan kemasan custom</li>
                    <li>Cutting, laminating, dan finishing</li>
                    <li>Merchandise custom</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Spesifikasi Pekerjaan</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Pelanggan wajib memberikan spesifikasi pekerjaan yang jelas dan detail</li>
                    <li>Perubahan spesifikasi setelah proses produksi akan dikenakan biaya tambahan</li>
                    <li>Kami berhak menolak pekerjaan yang melanggar hukum atau etika</li>
                    <li>File digital harus dalam format yang didukung (PDF, JPG, PNG, AI, CDR)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Waktu Pengerjaan</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Waktu pengerjaan standar: 3-7 hari kerja tergantung kompleksitas</li>
                    <li>Express service tersedia dengan biaya tambahan</li>
                    <li>Keterlambatan karena force majeur tidak menjadi tanggung jawab kami</li>
                    <li>Pelanggan akan diberitahu jika ada keterlambatan yang signifikan</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Payment */}
            <Card id="payment" className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <CreditCard className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Pembayaran</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Metode Pembayaran</h3>
                  <p className="text-gray-700 mb-3">
                    Kami menerima metode pembayaran berikut:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Tunai (di lokasi)</li>
                    <li>Transfer Bank (BCA, Mandiri, BNI, BRI)</li>
                    <li>E-Wallet (GoPay, OVO, Dana, ShopeePay)</li>
                    <li>QRIS</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Syarat Pembayaran</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>DP minimum 50% untuk pekerjaan di atas Rp 1.000.000</li>
                    <li>Pelunasan sebelum pengambilan atau pengiriman</li>
                    <li>Pembayaran dianggap sah setelah konfirmasi dari sistem kami</li>
                    <li>Biaya admin bank ditanggung pelanggan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Harga dan Biaya</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Harga yang tercantum adalah harga per unit atau per paket</li>
                    <li>Harga sudah termasuk PPN 11% (kecuali disebutkan lain)</li>
                    <li>Biaya tambahan mungkin berlaku untuk desain dan finishing khusus</li>
                    <li>Harga dapat berubah tanpa pemberitahuan sebelumnya</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Quality and Responsibility */}
            <Card id="responsibility" className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Kualitas dan Tanggung Jawab</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Standar Kualitas</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Kami berkomitmen memberikan hasil cetakan terbaik sesuai standar industri</li>
                    <li>Variasi warna hingga 10% masih dalam toleransi yang dapat diterima</li>
                    <li>Sample/proof dapat diminta sebelum produksi massal</li>
                    <li>Kualitas bahan sesuai dengan harga dan kesepakatan awal</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Garansi</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Garansi untuk kesalahan produksi dari pihak kami</li>
                    <li>Pencetakan ulang gratis untuk hasil yang tidak sesuai spesifikasi</li>
                    <li>Garansi tidak berlaku untuk kesalahan dari file pelanggan</li>
                    <li>Klaim garansi maksimal 3 hari setelah penerimaan barang</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Batasan Tanggung Jawab</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Kami tidak bertanggung jawab atas kesalahan dalam file pelanggan</li>
                    <li>Kami tidak bertanggung jawab atas konten yang melanggar hak cipta</li>
                    <li>Kerugian tidak langsung tidak menjadi tanggung jawab kami</li>
                    <li>Maksimal tanggung jawab sebesar nilai transaksi</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Pelanggan menjamin bahwa semua materi yang diserahkan untuk pencetakan:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Tidak melanggar hak cipta, merek dagang, atau hak kekayaan intelektual pihak lain</li>
                  <li>Tidak mengandung konten yang melanggar hukum, pornografi, atau SARA</li>
                  <li>Memiliki izin penggunaan yang sah dari pemilik hak cipta</li>
                  <li>Bebas dari klaim hukum dari pihak ketiga</li>
                </ul>

                <div className="bg-orange-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-orange-800">
                    <strong>Perhatian:</strong> Pelanggan bertanggung jawab penuh atas semua klaim hukum 
                    yang timbul dari materi yang dicetak. Kami berhak menolak pekerjaan yang diduga 
                    melanggar hak kekayaan intelektual.
                  </p>
                </div>
              </div>
            </Card>

            {/* Privacy */}
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privasi dan Data Pribadi</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Perlindungan data pribadi Anda adalah prioritas kami. Kebijakan privasi lengkap 
                  dapat dilihat di halaman terpisah, namun secara garis besar:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Data pribadi hanya digunakan untuk keperluan transaksi dan layanan</li>
                  <li>Kami tidak menjual atau membagikan data pribadi kepada pihak ketiga</li>
                    <li>Data pelanggan dilindungi sesuai peraturan perundang-undangan</li>
                  <li>Pelanggan memiliki hak untuk mengakses dan mengoreksi data mereka</li>
                </ul>
              </div>
            </Card>

            {/* Cancellation */}
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembatalan dan Pengembalian</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Pembatalan Pesanan</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Pembatalan sebelum produksi: pengembalian 100% (dikurangi biaya admin)</li>
                    <li>Pembatalan saat produksi: pengembalian 50% atau sesuai kesepakatan</li>
                    <li>Pembatalan setelah produksi selesai: tidak ada pengembalian</li>
                    <li>Pembatalan harus diajukan secara tertulis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Pengembalian Barang</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Pengembalian hanya untuk produk cacat produksi</li>
                    <li>Barang harus dikembalikan dalam kondisi original</li>
                    <li>Pengembalian harus disertai bukti pembayaran</li>
                    <li>Biaya pengiriman retur ditanggung pelanggan</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Force Majeure */}
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Kami tidak bertanggung jawab atas keterlambatan atau kegagalan dalam memenuhi 
                  kewajiban yang disebabkan oleh:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Bencana alam (gempa, banjir, tsunami, dll)</li>
                  <li>Peristiwa politik atau kerusuhan</li>
                  <li>Pemogokan umum atau lockdown</li>
                  <li>Kegagalan sistem listrik atau telekomunikasi</li>
                  <li>Kebijakan pemerintah yang membatasi operasi</li>
                  <li>Peristiwa lain di luar kendali kami</li>
                </ul>

                <p className="text-sm text-gray-600 mt-4">
                  Dalam kasus force majeure, kami akan memberitahu pelanggan sesegera mungkin 
                  dan menawarkan solusi alternatif.
                </p>
              </div>
            </Card>

            {/* Disputes */}
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Penyelesaian Sengketa</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Semua sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
                </p>
                
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Musyawarah:</strong> Upaya damiah antara kedua belah pihak</li>
                  <li><strong>Mediasi:</strong> Dengan bantuan pihak ketiga netral</li>
                  <li><strong>Yurisdiksi:</strong> Pengadilan Negeri Sleman, Yogyakarta</li>
                </ol>

                <p className="text-sm text-gray-600 mt-4">
                  Hukum yang berlaku adalah hukum Republik Indonesia.
                </p>
              </div>
            </Card>

            {/* Changes to Terms */}
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Diinformasikan melalui website atau lokasi kami</li>
                  <li>Berlaku efektif setelah 7 hari pemberitahuan</li>
                  <li>Tidak berlaku retroaktif untuk transaksi yang sudah berlangsung</li>
                  <li>Dianggap disetujui dengan penggunaan layanan berikutnya</li>
                </ul>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-orange-50 border-0 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Untuk pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi <strong>YOSEF SATRIA DEWATA SOEMARSONO PUTRA</strong>:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Kontak Langsung:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>📞 085353876138</li>
                      <li>📍 PRM CANDI GEBANG PERMAI DD-22 JETIS</li>
                      <li>🏠 Wedomartani, Ngemplak, Sleman</li>
                      <li>🌍 DIY, Yogyakarta 55584</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Jam Operasional:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>Senin - Jumat: 08:00 - 17:00</li>
                      <li>Sabtu: 08:00 - 15:00</li>
                      <li>Minggu: Tutup</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Agreement */}
            <Card className="p-6 bg-gradient-to-r from-blue-600 to-orange-500 text-white border-0 shadow-lg">
              <div className="text-center">
                <FileText className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Persetujuan</h3>
                <p className="text-blue-100">
                  Dengan menggunakan layanan YSDP PRINTING, Anda menyatakan telah membaca, 
                  memahami, dan menyetujui Syarat dan Ketentuan ini serta Kebijakan Privasi kami.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">YSDP PRINTING</h3>
                <p className="text-xs text-gray-400">YOSEF SATRIA DEWATA SOEMARSONO PUTRA</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              &copy; 2024 YOSEF SATRIA DEWATA SOEMARSONO PUTRA. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}