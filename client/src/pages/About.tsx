import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlbumCarousel } from "@/components/AlbumCarousel";
import { useSeo } from "@/hooks/use-seo";
import imgPhotographer from "@assets/stock_images/wedding_reception_ce_f49bc301.jpg";
export default function About() {
  useSeo({
    title: "Sobre | Iusti Produções | Fotografia e Cinema de Casamento",
    description: "Conheça a filosofia da Iusti Produções: atendimento exclusivo, narrativa autoral e cobertura cinematográfica para casamentos com emoção e técnica refinada.",
    image: imgPhotographer,
    imageAlt: "Fotógrafo fotografando a noiva",
    url: "https://www.iusti.productions/sobre",
    keywords: "fotógrafo de casamento, portfólio de casamento, atendimento exclusivo, fotografia autoral, filmes de casamento",
    twitterSite: "@iustifotografia",
    twitterCreator: "@iustifotografia",
    ogType: "website",
    siteName: "Iusti Produções",
    locale: "pt_BR",
    themeColor: "#111111"
  });

  return (
    <div className="pt-32 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display italic mb-8 leading-tight"
          >
            Onde técnica encontra emoção, e a arte se torna memória.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-[1px] bg-primary mb-8" 
          />
        </div>

        {/* Content Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32 items-center">
          <div className="relative aspect-[3/4]">
             {/* Unsplash Photographer working */}
            <img 
              src={imgPhotographer} 
              alt="Photographer at work" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display italic">Nossa Filosofia</h2>
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              Acreditamos que cada casamento é único — e merece ser tratado como uma obra autoral. Nossa abordagem une domínio técnico absoluto, olhar sensível e narrativa cinematográfica para registrar não apenas o que foi visto, mas o que foi sentido.
            </p>
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              Não somos apenas fotógrafos; somos contadores de histórias. Nosso objetivo é criar imagens que, daqui a 20 ou 50 anos, transportem vocês de volta para aquele exato momento, com a mesma intensidade e emoção.
            </p>
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              Atendemos apenas uma quantidade limitada de casamentos por ano. Isso não é restrição; é compromisso. Significa que cada cliente receberá dedicação completa, planejamento impecável e presença total durante seu dia mais importante.
            </p>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-secondary/30 -mx-4 md:-mx-8 px-4 md:px-8 py-24 mb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-display italic">Nosso Compromisso</h2>
            <p className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed">
              "Entregar imagens atemporais, emocionalmente verdadeiras e tecnicamente impecáveis."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
              {[
                { title: "Excelência", text: "Busca incessante pela perfeição técnica e estética em cada frame." },
                { title: "Discrição", text: "Registramos tudo sem interferir na naturalidade do momento." },
                { title: "Exclusividade", text: "Atendimento limitado para garantir dedicação total ao seu evento." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-lg font-serif uppercase tracking-widest text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-32">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Vamos contar a sua história?</h2>
          <Link href="/contato">
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-8 uppercase tracking-widest">
              Entrar em contato
            </Button>
          </Link>
        </div>

      </div>
      <AlbumCarousel />
    </div>
  );
}
