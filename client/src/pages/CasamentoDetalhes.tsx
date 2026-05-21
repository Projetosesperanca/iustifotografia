import { motion } from "framer-motion";
import { Link, useLocation, useParams } from "wouter";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlbumCarousel } from "@/components/AlbumCarousel";
import { useSeo } from "@/hooks/use-seo";
import imgDetailDefault from "@assets/stock_images/alincas_casamento.jpg";

const portfolioFiles = import.meta.glob("@assets/stock_images/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", { eager: true }) as Record<string, { default: string }>;

const portfolioFolders = Object.entries(portfolioFiles).reduce<Record<string, {
  title: string;
  couple: string;
  date: string;
  location: string;
  description: string;
  images: string[];
}>>((acc, [path, mod]) => {
  const normalizedPath = path.replace(/\\/g, "/");
  const match = normalizedPath.match(/stock_images\/([^/]+)\/[^/]+$/i);
  if (!match) return acc;

  const folderName = match[1];
  const id = folderName.toLowerCase().replace(/_/g, "-");
  const title = folderName.replace(/_/g, " & ");

  if (!acc[id]) {
    acc[id] = {
      title,
      couple: title,
      date: "Data especial",
      location: "Local especial",
      description: `Galeria de fotos de ${title}, reunindo os principais momentos e detalhes capturados com sensibilidade e estilo autoral.`,
      images: [],
    };
  }

  acc[id].images.push(mod.default);
  return acc;
}, {});

export default function CasamentoDetalhes() {
  const [location] = useLocation();
  const { id } = useParams<{ id: string }>();
  const casamento = id ? portfolioFolders[id] : undefined;

  useSeo({
    title: casamento
      ? `${casamento.title} | Portfólio de Casamentos | Iusti Produções`
      : "Casamento não encontrado | Iusti Produções",
    description: casamento
      ? casamento.description
      : "Detalhes de portfólio de casamento e histórias reais registradas com sensibilidade e técnica.",
    image: casamento ? casamento.images[0] ?? imgDetailDefault : imgDetailDefault,
    imageAlt: casamento ? `Detalhes do casamento de ${casamento.title}` : "Iusti Produções casamentos",
    url: typeof window !== "undefined" ? `${window.location.origin}${location}` : `https://www.iusti.productions${location}`,
    keywords: casamento
      ? `${casamento.title}, portfólio de casamento, fotografia de casamento, filme de casamento`
      : "casamento, portfólio, fotografia de casamento, casamento real, história de casamento",
    twitterSite: "@iustifotografia",
    twitterCreator: "@iustifotografia",
    ogType: "article",
    siteName: "Iusti Produções",
    locale: "pt_BR",
    themeColor: "#111111"
  });

  if (!id || !casamento) {
    return (
      <div className="pt-32 min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display italic mb-4">Casamento não encontrado</h1>
          <Link href="/portfolio">
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-8 uppercase tracking-widest">
              Voltar ao Portfólio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8 mb-24">
        
        {/* Header com botão voltar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex items-center gap-4"
        >
          <Link href="/portfolio">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm uppercase tracking-widest">Voltar</span>
            </button>
          </Link>
        </motion.div>

        {casamento.images[0] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 overflow-hidden rounded-3xl"
          >
            <img
              src={casamento.images[0]}
              alt={`Principal de ${casamento.title}`}
              className="w-full h-[520px] object-cover"
            />
          </motion.div>
        )}

        {/* Informações do Casamento */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-6xl md:text-7xl font-display italic mb-6">
            {casamento.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-border">
            <div>
              <span className="text-muted-foreground text-sm uppercase tracking-widest block mb-2">Data</span>
              <p className="text-lg font-light">{casamento.date}</p>
            </div>
            <div>
              <span className="text-muted-foreground text-sm uppercase tracking-widest block mb-2">Local</span>
              <p className="text-lg font-light">{casamento.location}</p>
            </div>
            <div>
              <span className="text-muted-foreground text-sm uppercase tracking-widest block mb-2">Casal</span>
              <p className="text-lg font-light flex items-center gap-2">
                <Heart size={18} className="text-primary" />
                {casamento.couple}
              </p>
            </div>
          </div>

          <p className="text-lg font-light leading-relaxed text-muted-foreground max-w-3xl">
            {casamento.description}
          </p>
        </motion.div>

        {/* Galeria de Detalhes */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-display italic mb-12"
          >
            Detalhes & Momentos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {casamento.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Detalhe ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center py-24 border-t border-border"
        >
          <h2 className="text-4xl md:text-5xl font-display italic mb-8">
            Gostou? Vamos contar sua história do mesmo jeito.
          </h2>
          <Link href="/contato">
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-8 uppercase tracking-widest">
              Solicitar Proposta
            </Button>
          </Link>
        </motion.div>

      </div>
      <AlbumCarousel />
    </div>
  );
}
