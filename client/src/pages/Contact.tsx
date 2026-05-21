import { motion } from "framer-motion";
import { useSeo } from "@/hooks/use-seo";
import { AlbumCarousel } from "@/components/AlbumCarousel";
import imgContact from "@assets/stock_images/wedding_couple_sunse_e6a338bd.jpg";

export default function Contact() {
  useSeo({
    title: "Contato | Iusti Produções | Solicite Seu Orçamento",
    description: "Fale conosco para registrar seu casamento ou ensaio gestante com uma equipe que une técnica, sensibilidade e atendimento exclusivo.",
    image: imgContact,
    imageAlt: "Casal feliz em sessão de casamento",
    url: "https://www.iusti.productions/contato",
    keywords: "contato fotografia, orçamento casamento, reservar fotógrafo, ensaio gestante, serviço de casamento",
    twitterSite: "@iustifotografia",
    twitterCreator: "@iustifotografia",
    ogType: "website",
    siteName: "Iusti Produções",
    locale: "pt_BR",
    themeColor: "#111111"
  });

  return (
    <div className="pt-32 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8 pb-24">

        <div className="max-w-3xl mx-auto space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
              Vamos eternizar a sua história com a importância que ela merece.
            </h1>
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              Se vocês acreditam que o registro do casamento é um investimento em memória, emoção e legado, será um prazer conversar.
            </p>
            <div className="space-y-2 text-muted-foreground font-light">
              <p>São Paulo, SP - Brasil</p>
              <p>Disponível para Destination Weddings em todo o mundo.</p>
              <p className="pt-2">contato@iusti.productions</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfaTurCAuGn-loV5_a-TwsiuRPp2wbJk-q4GHw2r_nlOeP9gA/viewform?embedded=true"
              width="100%"
              height="1653"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="max-w-2xl w-full"
            >
              Carregando…
            </iframe>
          </motion.div>

        </div>
      </div>
      <AlbumCarousel />
    </div>
  );
}
