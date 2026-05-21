import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Camera, Film, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlbumCarousel } from "@/components/AlbumCarousel";
import { useState, useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";
import imgNoiva from "@assets/stock_images/noiva_mae.jpg";
import imgCouple1 from "@assets/stock_images/bride_groom_wedding__1fcc4186.jpg";
import imgCouple2 from "@assets/stock_images/wedding_couple_sunse_e6a338bd.jpg";

const heroImages = [
  { src: imgNoiva, alt: "Noiva abraçando a mãe" },
  { src: imgCouple1, alt: "Casal no casamento" },
  { src: imgCouple2, alt: "Casal ao pôr do sol" },
];

export default function Home() {
  useSeo({
    title: "Home | Iusti Produções | Fotografia e Cinema de Casamento",
    description: "Fotografia e filmes autorais para casamentos e eventos. Registramos cada emoção com sensibilidade artística, transformamos momentos em obras de arte de luz e narrativa cinematográfica.",
    image: imgNoiva,
    imageAlt: "Noiva com véu ao vento",
    url: "https://www.iusti.productions/",
    keywords: "fotografia de casamento, cinema de casamento, fotografia autoral, ensaio de casal, casamento de alto padrão",
    twitterSite: "@iustifotografia",
    twitterCreator: "@iustifotografia",
    ogType: "website",
    siteName: "Iusti Produções",
    locale: "pt_BR",
    themeColor: "#000000"
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={current}
              src={heroImages[current].src}
              alt={heroImages[current].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-display italic text-white leading-tight drop-shadow-lg">
              Criamos um legado visual <br/> da sua história.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed pt-4 drop-shadow">
              Fotografia e filmes autorais, com excelência técnica, sensibilidade artística e total compromisso com cada detalhe.
            </motion.p>
          </motion.div>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      {/* Family & Legacy Section */}
      <section className="py-24 md:py-36 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center space-y-10"
          >
            <motion.span variants={fadeIn} className="inline-block text-primary uppercase tracking-[0.3em] text-xs font-sans mb-2">
              O que realmente importa
            </motion.span>

            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-display italic leading-tight text-foreground">
              Uma nova família nasce.<br /> Este momento merece ser eterno.
            </motion.h2>

            <motion.div variants={fadeIn} className="w-16 h-px bg-primary mx-auto" />

            <motion.p variants={fadeIn} className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              O casamento é muito mais do que uma celebração — é o instante em que duas histórias se tornam uma só, e em que uma nova família começa. Filhos, netos e gerações que ainda nem existem um dia vão olhar para essas imagens e entender de onde vieram, quem os amou antes mesmo de nascerem.
            </motion.p>

            <motion.p variants={fadeIn} className="text-muted-foreground text-base font-light leading-relaxed max-w-2xl mx-auto">
              Registrar esse momento com sensibilidade e precisão não é apenas uma responsabilidade técnica — é um ato de amor ao legado de uma família. Cada detalhe, cada olhar, cada lágrima contida e cada sorriso espontâneo fazem parte de uma narrativa que pertence a vocês para sempre.
            </motion.p>

            <motion.p variants={fadeIn} className="text-foreground/80 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto italic font-serif">
              "Não fotografamos casamentos. Construímos a memória afetiva de uma família."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Experiências visuais criadas sob medida</h2>
            <p className="text-muted-foreground font-light">Atendemos um número limitado de casamentos por ano para garantir excelência total em cada projeto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Camera className="w-8 h-8 text-primary" />,
                title: "Fotografia Autoral",
                desc: "Registro com foco em emoção, luz natural e momentos autênticos."
              },
              { 
                icon: <Film className="w-8 h-8 text-primary" />,
                title: "Filme Cinematográfico",
                desc: "Narrativa fluida, trilha cuidadosamente escolhida e edição refinada."
              },
              { 
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "Ensaios & Conexão",
                desc: "Ensaios pré e pós-wedding com direção sutil e muita leveza."
              }
            ].map((service, i) => (
              <div key={i} className="bg-background p-10 border border-border/50 hover:border-primary/30 transition-colors duration-300 group">
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{service.icon}</div>
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/servicos">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 uppercase tracking-widest text-xs transition-all duration-300">
                Ver todos os serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
          <h2 className="text-4xl md:text-5xl font-serif">Histórias Reais</h2>
          <Link href="/portfolio" className="hidden md:block text-sm uppercase tracking-widest hover:text-primary transition-colors">
            Ver Portfolio Completo
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* Unsplash Wedding 1 */}
          <div className="aspect-[4/5] relative group overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=60" 
              alt="Wedding Details" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-serif text-2xl tracking-wide">Mariana & João</span>
            </div>
          </div>
          
          {/* Unsplash Wedding 2 */}
          <div className="aspect-[4/5] relative group overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&auto=format&fit=crop&q=60" 
              alt="Ceremony moment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-serif text-2xl tracking-wide">Carol & Pedro</span>
            </div>
          </div>

          {/* Unsplash Wedding 3 */}
          <div className="aspect-[4/5] relative group overflow-hidden cursor-pointer md:hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=60" 
              alt="Reception party" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-serif text-2xl tracking-wide">Ana & Lucas</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/portfolio" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">
            Ver Portfolio Completo
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground text-background text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif">Vamos eternizar sua história?</h2>
          <p className="text-background/70 text-lg font-light max-w-2xl mx-auto">
            O registro do seu casamento é o único investimento que dura para sempre. Vamos conversar sobre como torná-lo inesquecível.
          </p>
          <Link href="/contato">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-12 py-8 text-base uppercase tracking-widest mt-8 transition-transform duration-300 hover:-translate-y-1">
              Solicitar Proposta
            </Button>
          </Link>
        </div>
      </section>
      <AlbumCarousel />
    </div>
  );
}
