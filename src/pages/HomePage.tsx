import CardProduk from "@/components/templates/card/CardProduk"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowRight, UserPlus, Search, CreditCard, Download, Rocket, Brain, DollarSign, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import { FadeIn } from "@/components/templates/animated/FadeMotion"
import faqData from "@/data/faqData.json"
import { AccordionContent, AccordionItem, AccordionTrigger, Accordion } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

import FloatingBackground from "@/assets/background/FloatingBackground"
import { TypingEffect } from "@/components/templates/animated/TextEffect"
import useProduct from "@/hooks/useProduct"
import Loading from "@/components/layouts/Loading"

const steps = [
  {
    icon: <UserPlus className="w-7 h-7" />,
    title: "Buat Akun Gratis",
    desc: "Daftar dengan cepat dan langsung akses semua produk digital dan fitur AI.",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Jelajahi & Pilih Produk",
    desc: "Telusuri berdasarkan kategori, harga, popularitas, dan kompatibilitas AI.",
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    title: "Bayar Sekali, Akses Selamanya",
    desc: "Bayar dengan aman dan dapatkan akses penuh dengan lisensi resmi.",
  },
  {
    icon: <Download className="w-7 h-7" />,
    title: "Siap Pakai. Selalu Update. Didampingi Ahli.",
    desc: "Kami pastikan Anda tidak hanya mendapatkan produk, tapi juga pengalaman dan bantuan terbaik.",
  },
];

const howLumino = [
  {
    name: " Bangun & Luncurkan Produk dengan Cepat",
    desc: "Tanpa developer, tanpa ribet cukup klik, sesuaikan, dan langsung pakai.",
    icons: Rocket,
  },
  {
    name: "Solusi AI untuk Otomatisasi Bisnis Anda",
    desc: "Gunakan agen AI untuk melayani pelanggan, rekomendasi pintar, dan efisiensi internal.",
    icons: Brain,
  },
  {
    name: " Bayar Sekali, Miliki Seumur Hidup",
    desc: "Produk dengan lisensi resmi dan akses penuh selamanya.",
    icons: DollarSign
  },
  {
    name: "Rumah bagi Produk Digital Berkualitas Tinggi",
    desc: "Dari desain elegan hingga solusi otomatisasi cerdas—beli dan jual hanya karya terbaik dari para ahli.",
    icons: ShoppingCart,
  }
]


const HomePage = () => {
  const { products, loading } = useProduct()
  const BestProduct = products.slice(0, 3);
  const FaqData = faqData.slice(0, 3);

  if (loading) {
    return <Loading />
  }
  return (
    <>
      <section className="relative overflow-hidden h-screen flex items-center justify-center p-res-xxl shadow-lg shadow-foreground/10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-background to-purple-600 opacity-20 -z-20"></div>
        <FloatingBackground />
        <FadeIn direction="up" className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight leading-tight">
            Empowering Brands with <br className="hidden md:block" />
            <TypingEffect texts={["Smart Websites & AI Solutions"]} className="text-primary text-4xl" />
          </h1>
          <p className="mt-2 text-sm md:text-lg text-muted-foreground">
            Lumino adalah platform teknologi yang membantu bisnis membangun website profesional dan mengotomatisasi operasional mereka menggunakan kekuatan AI.
            Kami menyediakan layanan Website Development yang cepat, estetis, dan responsif didukung solusi AI automation untuk mempercepat pertumbuhan dan efisiensi kerja.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Button size={"lg"} className="rounded-full" asChild>
              <Link to="/products" >Jelajahi Produk</Link>
            </Button>
            <Button variant="outline" className="rounded-full" size={"lg"} asChild>
              <Link to="/about">Tentang Kami</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      <section className="w-full flex flex-col items-center justify-center px-res-xxl py-20 overflow-hidden shadow-lg shadow-foreground/10 bg-gradient-to-bl from-blue-600/10 dark:from-indigo-600/20 via-background to-purple-600/10 dark:to-purple-600/20">
        <FadeIn className="w-full mt-4">
          <h1 className="text-2xl font-bold text-secondary">Mengapa Pilih Lumino?</h1>
        </FadeIn>
        <hr className="w-full my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {howLumino.map((item, index) => (
            <FadeIn key={index} direction="down" delay={index * 0.1} className="w-full h-full">
              <Card key={index} className="w-full h-full">
                <CardContent className="h-full flex">
                  <item.icons className="h-full w-10 text-primary" />
                  <div className="ml-4">
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="w-full flex items-center justify-between mt-20">
          <h1 className="text-2xl font-bold text-secondary">Temukan Produk Digital Sesuai Kebutuhan Anda</h1>
          <Button variant="link" asChild>
            <Link to="/products">
              Lihat Semua Produk <ArrowRight />
            </Link>
          </Button>
        </FadeIn>
        <hr className="mt-4 w-full" />
        <Carousel className="w-full">
          <CarouselContent className="py-6 px-1">
            {BestProduct.map((item, index) => (
              <CarouselItem key={index} className="w-full h-full lg:basis-1/3 sm:basis-1/2">
                <FadeIn className="w-full h-full">
                  <CardProduk
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    tools={item.tools}
                    rating={item.rating}
                  />
                </FadeIn>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="-translate-x-8" />
          <CarouselPrevious className="translate-x-8" />
        </Carousel>
      </section>

      <section className="pt-20 px-res-xxl">
        <div className="w-full">
          <FadeIn>
            <h1 className="text-2xl font-bold text-secondary">
              Bagaimana Cara Kerja Lumino
            </h1>
            <p className="text-muted-foreground">
              Hanya lima langkah sederhana untuk membangun dan menerapkan solusi digital Anda dengan cepat dan aman.
            </p>
          </FadeIn>
          <hr className="my-4" />
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <FadeIn delay={idx * 0.1} direction="center" key={idx} className="flex flex-col items-center text-center">
                <div className="text-primary mb-4">{step.icon}</div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center p-res-xxl">
        <FadeIn>
          <h1 className="text-2xl font-bold text-secondary">Menjawab Pertanyaan Anda</h1>
        </FadeIn>
        <hr className="my-4" />
        <Accordion type="multiple">
          {FaqData.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="left">
              <AccordionItem value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </FadeIn>
          ))}
        </Accordion>
      </section>
    </ >
  )
}

export default HomePage