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
import { SkeletonCard } from "@/components/templates/skeleton/skeleton-template"
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
    title: "Langsung Pakai & Didampingi",
    desc: "Produk siap digunakan, selalu diperbarui, dan didukung oleh tim ahli untuk pengalaman terbaik.",
  }
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

  return (
    <>
      <section className="relative overflow-hidden h-screen flex items-center justify-center p-res-xxl shadow-lg shadow-foreground/10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-background to-purple-600 opacity-20 -z-20"></div>
        <FloatingBackground className="-z-10 animate-pulse" />
        <FadeIn direction="up" className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-background">
            <span className="mr-2" style={{ WebkitTextStroke: "0.5px var(--muted-foreground)", textShadow: "0 0 5px var(--primary)" }}>
              Empowering Brands with
            </span>
            <br className="md:block hidden" />
            <TypingEffect
              texts={["Smart Websites", "AI Automation"]}
              className="text-primary"
            />
          </h1>
          <p className="mt-2 md:text-lg text-muted-foreground">
            Lumino adalah platform teknologi yang membantu bisnis membangun website profesional dan mengotomatisasi operasional mereka menggunakan kekuatan AI.
            Kami menyediakan layanan Website Development yang cepat, estetis, dan responsif didukung solusi AI automation untuk mempercepat pertumbuhan dan efisiensi kerja.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Button size={"lg"} className="rounded-full shadow-md" asChild>
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
              <Card key={index} className="w-full h-full bg-background hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <CardContent className="h-full flex items-center">
                  <div className="p-2 flex items-center justify-center min-w-14 h-14 rounded-full border bg-primary/10">
                    <item.icons className="w-full text-primary" />
                  </div>
                  <div className="ml-4">
                    <CardTitle className="text-primary">{item.name}</CardTitle>
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
            {loading ? (
              <>
                <CarouselItem><SkeletonCard /></CarouselItem>
                <CarouselItem><SkeletonCard /></CarouselItem>
                <CarouselItem><SkeletonCard /></CarouselItem>
              </>
            ) : (
              BestProduct.map((item, index) => (
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
              ))
            )}
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
              Hanya empat langkah sederhana untuk membangun dan menerapkan solusi digital Anda dengan cepat dan aman.
            </p>
          </FadeIn>
          <hr className="my-4" />
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <FadeIn delay={idx * 0.1} direction="center" key={idx} className="relative mt-4 border rounded-lg p-2 shadow flex flex-col items-center text-center">
                <div className="absolute top-[-20px] bg-background rounded-full">
                  <div className="text-secondary bg-secondary/10 p-2 rounded-full border">{step.icon}</div>
                </div>
                <h3 className="font-medium mt-6">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
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
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            </FadeIn>
          ))}
        </Accordion>
      </section>
    </ >
  )
}

export default HomePage