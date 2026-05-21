import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlbumCarousel } from "@/components/AlbumCarousel";
import { useSeo } from "@/hooks/use-seo";
import imgHero from "@assets/stock_images/gestante_1.jpg";
import imgGal1 from "@assets/stock_images/gestante_2.jpg";
import imgGal2 from "@assets/stock_images/gestante_3.jpg";
import imgGal3 from "@assets/stock_images/gestante_4.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Gestante() {
  useSeo({
    title: "Gestante | Iusti Produções | Ensaio de Maternidade",
    description: "Registre a gestação com um ensaio fotográfico cheio de sensibilidade. Transformamos a beleza do corpo materno e da espera em imagens memoráveis.",
    image: imgHero,
    imageAlt: "Ensaio de gestante com luz suave",
    url: "https://www.iusti.productions/gestante",
    keywords: "ensaio gestante, fotografia de maternidade, fotos de gravidez, ensaio de gestação, registros maternos",
    twitterSite: "@iustifotografia",
    twitterCreator: "@iustifotografia",
    ogType: "website",
    siteName: "Iusti Produções",
    locale: "pt_BR",
    themeColor: "#111111"
  });

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imgHero}
            alt="Ensaio gestante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>

        <div className="relative z-10 container px-4 pb-24 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeIn} className="inline-block text-primary uppercase tracking-[0.3em] text-xs font-sans">
              Ensaio Fotográfico
            </motion.span>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display italic text-white leading-tight drop-shadow-lg">
              Gestante
            </motion.h1>
            <motion.p variants={fadeIn} className="text-white/80 text-lg font-light max-w-xl mx-auto leading-relaxed">
              A maternidade é a forma mais pura de amor. Registramos esse momento com a delicadeza e a arte que ele merece.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Texto principal */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-10 text-center"
          >
            <motion.span variants={fadeIn} className="inline-block text-primary uppercase tracking-[0.3em] text-xs font-sans">
              Uma nova vida
            </motion.span>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display italic leading-tight">
              O ventre que guarda o maior amor do mundo.
            </motion.h2>
            <motion.div variants={fadeIn} className="w-16 h-px bg-primary mx-auto" />
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
              A gestação é um momento único — cheio de emoção, antecipação e uma beleza que jamais se repete. Nosso ensaio de gestante é pensado para capturar essa fase com sensibilidade, luz trabalhada com cuidado e direção de poses que valorizam cada detalhe desse corpo que carrega uma nova vida.
            </motion.p>
            <motion.p variants={fadeIn} className="text-muted-foreground text-base font-light leading-relaxed max-w-2xl mx-auto">
              Cada imagem é uma memória afetiva: para você, para o seu companheiro e, um dia, para o filho que vai querer ver como tudo começou — antes mesmo de chegar ao mundo.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-1"
          >
            {[
              { src: imgGal1, alt: "Ensaio gestante vestido vermelho" },
              { src: imgGal2, alt: "Ensaio gestante elegante" },
              { src: imgGal3, alt: "Ensaio gestante vestido preto" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="aspect-[3/4] overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* O que inclui */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif text-center">
              O que está incluído no ensaio
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { titulo: "Consultoria prévia", desc: "Conversamos antes para entender o seu estilo, escolher locação e definir os looks que mais combinam com você." },
                { titulo: "Direção de poses", desc: "Orientação durante todo o ensaio para que você se sinta segura, bonita e natural em cada ângulo." },
                { titulo: "Edição autoral", desc: "Tratamento de imagem com nossa assinatura: luz suave, tons harmoniosos e pele trabalhada com delicadeza." },
                { titulo: "Entrega digital", desc: "As melhores imagens entregues em alta resolução, prontas para imprimir, emoldurar e guardar para sempre." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-background border border-border/50 p-8 hover:border-primary/30 transition-colors duration-300"
                >
                  <h3 className="font-serif text-xl mb-3 text-foreground">{item.titulo}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-foreground text-background text-center px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif">Registre este momento único.</h2>
          <p className="text-background/70 text-lg font-light max-w-xl mx-auto">
            Entre em contato e vamos criar juntos um ensaio que vai emocionar você para sempre.
          </p>
          <Link href="/contato">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-12 py-8 text-base uppercase tracking-widest mt-8 transition-transform duration-300 hover:-translate-y-1">
              Solicitar Ensaio
            </Button>
          </Link>
        </div>
      </section>
      <AlbumCarousel />

    </div>
  );
}
