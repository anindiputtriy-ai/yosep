'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Printer, 
  FileText, 
  Image,
  Palette,
  Scissors,
  Package,
  Star,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage(data.message || 'Pesan berhasil dikirim!')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        setSubmitMessage(data.error || 'Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitMessage('Terjadi kesalahan jaringan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
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
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Layanan</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Kontak</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🎨 Industri Percetakan Umum Terpercaya
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-blue-600">YOSEF SATRIA DEWATA SOEMARSONO PUTRA</span>
                <br />
                Solusi Percetakan Profesional
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Mitra terpercaya untuk semua kebutuhan percetakan Anda. Kami menyediakan 
                layanan percetakan umum dengan kualitas terbaik dan harga kompetitif di Yogyakarta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Hubungi Kami
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('services')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Lihat Layanan
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Layanan Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <FileText className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900">Print Dokumen</h3>
                  <p className="text-sm text-gray-600 mt-2">Kualitas tinggi, hasil tajam</p>
                </Card>
                <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <Image className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="font-semibold text-gray-900">Print Foto</h3>
                  <p className="text-sm text-gray-600 mt-2">Warna vibrant, detail presisi</p>
                </Card>
                <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <Palette className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-gray-900">Desain Grafis</h3>
                  <p className="text-sm text-gray-600 mt-2">Kreatif dan profesional</p>
                </Card>
                <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <Package className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="font-semibold text-gray-900">Packaging</h3>
                  <p className="text-sm text-gray-600 mt-2">Kemasan menarik dan berkualitas</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              Tentang Kami
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">YSDP PRINTING</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah mitra percetakan terpercaya dengan komitmen terhadap kualitas dan kepuasan pelanggan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                YOSEF SATRIA DEWATA SOEMARSONO PUTRA
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sebagai penyedia layanan percetakan umum yang berlokasi di Yogyakarta, 
                kami telah melayani berbagai kebutuhan percetakan untuk perusahaan, institusi, 
                dan individu. Dengan pengalaman bertahun-tahun, kami memahami betul kebutuhan 
                pelanggan akan hasil cetakan yang berkualitas tinggi.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kami menggunakan teknologi percetakan modern dan bahan berkualitas untuk 
                memastikan setiap hasil cetakan memenuhi standar tertinggi. Tim profesional 
                kami siap membantu Anda mewujudkan ide-ide kreatif menjadi nyata.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Kualitas cetakan terbaik dengan teknologi modern</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Harga kompetitif dan transparan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Pengerjaan tepat waktu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Konsultasi gratis untuk desain dan spesifikasi</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-orange-50 border-0 shadow-xl">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Alamat
                  </h4>
                  <p className="text-gray-700">
                    PRM CANDI GEBANG PERMAI DD-22 JETIS<br />
                    Desa/Kelurahan Wedomartani<br />
                    Kec. Ngemplak, Kab. Sleman<br />
                    Provinsi Daerah Istimewa Yogyakarta
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-green-600" />
                    Kontak
                  </h4>
                  <p className="text-gray-700">085353876138</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-orange-600" />
                    Jam Operasional
                  </h4>
                  <p className="text-gray-700">
                    Senin - Jumat: 08:00 - 17:00<br />
                    Sabtu: 08:00 - 15:00<br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Layanan Kami
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan Percetakan <span className="text-blue-600">Lengkap</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan percetakan untuk memenuhi semua kebutuhan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <FileText className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Print Dokumen</h3>
              <p className="text-gray-600 mb-4">
                Cetak dokumen, laporan, proposal, makalah dengan kualitas tinggi.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Print hitam putih & warna</li>
                <li>• Berbagai ukuran kertas</li>
                <li>• Jilid dan finishing</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <Image className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Print Foto & Poster</h3>
              <p className="text-gray-600 mb-4">
                Cetak foto berkualitas tinggi, poster, dan banner untuk berbagai keperluan.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Photo print berbagai ukuran</li>
                <li>• Poster dan banner</li>
                <li>• Canvas print</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <Palette className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desain Grafis</h3>
              <p className="text-gray-600 mb-4">
                Layanan desain grafis profesional untuk logo, brosur, dan materi marketing.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Logo & branding</li>
                <li>• Brosur & flyer</li>
                <li>• Desain kemasan</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Package className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Packaging & Box</h3>
              <p className="text-gray-600 mb-4">
                Produksi kemasan custom dan box untuk produk Anda.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom packaging</li>
                <li>• Product box</li>
                <li>• Label & sticker</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <Scissors className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cutting & Finishing</h3>
              <p className="text-gray-600 mb-4">
                Layanan cutting, laminating, dan finishing untuk hasil sempurna.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Digital cutting</li>
                <li>• Laminating</li>
                <li>• UV coating</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <Printer className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Merchandise</h3>
              <p className="text-gray-600 mb-4">
                Cetak merchandise custom untuk promosi dan keperluan perusahaan.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Kaos & apparel</li>
                <li>• Mug & tumbler</li>
                <li>• Payung & tote bag</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Hubungi Kami
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Siap Melayani Kebutuhan <span className="text-blue-600">Percetakan Anda</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hubungi kami untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan percetakan Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="08xx-xxxx-xxxx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Jelaskan kebutuhan percetakan Anda..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
                
                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center ${
                    submitMessage.includes('berhasil') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-orange-50 border-0 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <p className="text-gray-700">085353876138</p>
                      <p className="text-sm text-gray-600">Senin - Sabtu, 08:00 - 17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat</h4>
                      <p className="text-gray-700">
                        PRM CANDI GEBANG PERMAI DD-22 JETIS<br />
                        Wedomartani, Ngemplak, Sleman<br />
                        DIY, Yogyakarta
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Jam Operasional</h4>
                      <p className="text-gray-700">
                        Senin - Jumat: 08:00 - 17:00<br />
                        Sabtu: 08:00 - 15:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-600 to-orange-500 text-white border-0 shadow-lg">
                <div className="flex items-center space-x-4">
                  <Star className="w-12 h-12 text-yellow-300" />
                  <div>
                    <h4 className="text-xl font-bold">Garansi Kualitas</h4>
                    <p className="text-blue-100">
                      Hasil cetakan tidak memuaskan? Kami akan mencetak ulang gratis!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <img src="/logo.svg" alt="YSDP PRINTING Logo" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">YSDP PRINTING</h3>
                  <p className="text-xs text-gray-400">YOSEF SATRIA DEWATA SOEMARSONO PUTRA</p>
                </div>
              </div>
              <p className="text-gray-400">
                Mitra terpercaya untuk semua kebutuhan percetakan Anda.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Print Dokumen</li>
                <li>Print Foto & Poster</li>
                <li>Desain Grafis</li>
                <li>Packaging & Box</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li>Tentang Kami</li>
                <li>Kontak</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>085353876138</li>
                <li>PRM CANDI GEBANG PERMAI DD-22 JETIS</li>
                <li>Wedomartani, Ngemplak, Sleman</li>
                <li>DIY, Yogyakarta</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 YOSEF SATRIA DEWATA SOEMARSONO PUTRA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}