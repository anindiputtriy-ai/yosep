'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, UserCheck, Cookie, Lock } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              YOSEF SATRIA DEWATA SOEMARSONO PUTRA - Perlindungan data dan privasi Anda adalah prioritas utama kami.
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
                onClick={() => scrollToSection('data-collection')}
                className="flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Database className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Pengumpulan Data</span>
              </button>
              <button
                onClick={() => scrollToSection('data-usage')}
                className="flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Penggunaan Data</span>
              </button>
              <button
                onClick={() => scrollToSection('user-rights')}
                className="flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors"
              >
                <UserCheck className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Hak Pengguna</span>
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
                  Selamat datang di YSDP PRINTING. Kebijakan Privasi ini menjelaskan bagaimana <strong>YOSEF SATRIA DEWATA SOEMARSONO PUTRA</strong> mengumpulkan, 
                  menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika menggunakan layanan percetakan kami, 
                  termasuk melalui website kami dan interaksi langsung di lokasi kami.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Kami berkomitmen untuk melindungi privasi Anda dan memastikan bahwa data pribadi Anda 
                  ditangani dengan aman dan sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.
                </p>
              </div>
            </Card>

            {/* Data Collection */}
            <Card id="data-collection" className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Informasi Pribadi</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Nama lengkap sesuai identitas</li>
                    <li>Nomor telepon yang dapat dihubungi</li>
                    <li>Alamat email (jika ada)</li>
                    <li>Alamat lengkap untuk pengiriman</li>
                    <li>Informasi pembayaran (rekening, metode pembayaran)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Informasi Layanan</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Detail pesanan percetakan</li>
                    <li>Spesifikasi file yang dicetak</li>
                    <li>Riwayat transaksi dan pembayaran</li>
                    <li>Preferensi layanan percetakan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Informasi Teknis</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Alamat IP untuk keamanan sistem</li>
                    <li>Jenis browser dan perangkat</li>
                    <li>Informasi cookies yang digunakan</li>
                    <li>Data penggunaan website untuk analisis</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Data Usage */}
            <Card id="data-usage" className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Penggunaan Informasi</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Kami menggunakan informasi Anda untuk:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Menyediakan Layanan:</strong> Memproses pesanan percetakan Anda sesuai spesifikasi</li>
                    <li><strong>Komunikasi:</strong> Menghubungi Anda mengenai status pesanan dan layanan</li>
                    <li><strong>Peningkatan Layanan:</strong> Menganalisis kebutuhan untuk meningkatkan kualitas</li>
                    <li><strong>Keamanan:</strong> Melindungi transaksi dan mencegah penipuan</li>
                    <li><strong>Legal:</strong> Memenuhi kewajiban hukum dan peraturan</li>
                    <li><strong>Marketing:</strong> Memberikan informasi promosi dengan persetujuan Anda</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Penting:</strong> Kami tidak akan pernah menjual, menyewakan, atau membagikan informasi pribadi Anda 
                    kepada pihak ketiga tanpa persetujuan tertulis dari Anda, kecuali diwajibkan oleh hukum.
                  </p>
                </div>
              </div>
            </Card>

            {/* Data Protection */}
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>YOSEF SATRIA DEWATA SOEMARSONO PUTRA</strong> menerapkan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Enkripsi data sensitif dalam penyimpanan dan transmisi</li>
                  <li>Akses terbatas kepada data pribadi hanya untuk staf yang berwenang</li>
                  <li>Sistem keamanan fisik di lokasi percetakan</li>
                  <li>Backup data teratur untuk mencegah kehilangan informasi</li>
                  <li>Update keamanan sistem secara berkala</li>
                  <li>Pelatihan staf mengenai perlindungan data pribadi</li>
                </ul>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Perhatian:</strong> Meskipun kami telah berupaya keras melindungi data Anda, 
                    tidak ada sistem yang 100% aman. Kami terus meningkatkan keamanan kami sesuai teknologi terkini.
                  </p>
                </div>
              </div>
            </Card>

            {/* Cookies */}
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Cookie className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Kebijakan Cookies</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Cookies Esensial:</h4>
                    <p className="text-sm">Diperlukan untuk fungsi dasar website seperti navigasi dan akses area aman.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Cookies Performa:</h4>
                    <p className="text-sm">Mengumpulkan informasi anonim tentang penggunaan website untuk analisis.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Cookies Fungsional:</h4>
                    <p className="text-sm">Mengingat preferensi Anda untuk kunjungan berikutnya.</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  Anda dapat mengatur cookies melalui pengaturan browser Anda.
                </p>
              </div>
            </Card>

            {/* User Rights */}
            <Card id="user-rights" className="p-8 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Hak Anda sebagai Pengguna</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hak Privasi Anda:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                    <li><strong>Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                    <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi (dengan batasan)</li>
                    <li><strong>Pembatasan:</strong> Membatasi pengolahan data tertentu</li>
                    <li><strong>Portabilitas:</strong> Memindahkan data ke layanan lain</li>
                    <li><strong>Penolakan:</strong> Menolak pengolahan data untuk marketing</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Cara Melaksanakan Hak Anda:</h4>
                  <p className="text-sm text-purple-800">
                    Untuk melaksanakan hak privasi Anda, silakan hubungi kami melalui:
                  </p>
                  <ul className="text-sm text-purple-800 mt-2">
                    <li>Telepon: 085353876138</li>
                    <li>Alamat: PRM CANDI GEBANG PERMAI DD-22 JETIS, Wedomartani, Ngemplak, Sleman, DIY</li>
                  </ul>
                  <p className="text-sm text-purple-800 mt-2">
                    Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-orange-50 border-0 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Jika Anda memiliki pertanyaan, keluhan, atau permintaan mengenai Kebijakan Privasi ini, 
                  silakan hubungi <strong>YOSEF SATRIA DEWATA SOEMARSONO PUTRA</strong> melalui:
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
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