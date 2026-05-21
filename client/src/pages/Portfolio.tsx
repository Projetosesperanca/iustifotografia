import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSeo } from "@/hooks/use-seo";

type PortfolioItem = {
  src: string;
  title: string;
  type: string;
  id: string;
};

const portfolioFiles = import.meta.glob(
  "@assets/stock_images/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
) as Record<string, { default: string }>;

const images: PortfolioItem[] = Object.values(
  Object.entries(portfolioFiles).reduce<Record<string, PortfolioItem>>((acc, [path, mod]) => {
    const normalizedPath = path.replace(/\\/g, "/");
    const match = normalizedPath.match(/stock_images\/([^/]+)\/[^/]+$/i);
    if (!match) return acc;

    const folderName = match[1];
    const id = folderName.toLowerCase().replace(/_/g, "-");

    if (!acc[id]) {
      acc[id] = {
        src: mod.default,
        title: folderName.replace(/_/g, " & "),
        type: "Casamento",
        id,
      };
    }

    return acc;
  }, {})
).sort((a, b) => a.title.localeCompare(b.title));

export default function Portfolio() {
  useSeo({
    title: "Portfólio | Iusti Produções | Casamentos e Ensaios Fotográficos",
    description: "Explore nosso portfólio de casamentos, ensaios e filmes autorais. Imagens criadas para registrar histórias reais com sensibilidade e excelência técnica.",
    image: images[1]?.src ?? "/favicon.png",
    imageAlt: images[0]?.title ? `${images[0].title} em portfólio` : "Portfólio de casamentos",
    url: "https://www.iusti.productions/portfolio",
    keywords: "portfólio de casamento, fotos de casamento, ensaio de casamento, fotografia autoral, filme de casamento",
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
        
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display italic mb-6"
          >
            Portfólio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-light text-lg max-w-2xl"
          >
            Cada imagem aqui representa uma história real, registrada com respeito, sensibilidade e precisão. Não seguimos tendências passageiras — criamos registros que atravessam o tempo.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-light text-base max-w-2xl mt-4"
          >
            Nossos clientes retornam porque sabem que estão confiando sua história mais importante a profissionais que compreendem que fotografia de alto nível é uma combinação de técnica impecável, sensibilidade artística e presença humana.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 pb-24">
          {images.map((img, index) => (
            <Link key={index} href={`/casamento/${img.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <h3 className="text-2xl font-serif mb-2">{img.title}</h3>
                  <span className="text-sm uppercase tracking-widest font-light">{img.type}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
