import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlbumCarousel } from "@/components/AlbumCarousel";
import { useSeo } from "@/hooks/use-seo";
import imgCinema from "@assets/stock_images/wedding_reception_ce_59f815fe.jpg";

export default function Services() {
  useSeo({
    title: "Serviços | Iusti Produções | Fotografia e Vídeo de Casamento",
    description: "Conheça nossos serviços exclusivos de fotografia e filme cinematográfico para casamentos, com cobertura completa, direção sutil e legado visual.",
    image: imgCinema,
    imageAlt: "Recepção de casamento com luz cinematográfica",
    url: "https://www.iusti.productions/servicos",
    keywords: "serviços de fotografia, vídeo de casamento, cobertura de casamento, filme cinematográfico, ensaio pré-wedding",
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
        
        <div className="max-w-4xl mb-24 text-center mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display italic mb-6"
          >
            Experiências visuais criadas sob medida
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-light text-lg"
          >
            Nossa dedicação é exclusiva e nosso número de datas é limitado.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-24 mb-32">
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="text-primary text-sm uppercase tracking-widest font-medium">01</span>
              <h2 className="text-4xl font-display italic">Fotografia de Casamento</h2>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Registro autoral, com foco em emoção, luz natural e momentos autênticos. Estaremos ao seu lado desde o making of até o final da festa, garantindo que nenhum sorriso, lágrima ou abraço passe despercebido.
              </p>
              <p className="text-muted-foreground font-light text-base leading-relaxed">
                Utilizamos técnicas de iluminação avançadas combinadas com processos de revelação refinados, criando imagens com profundidade, textura e tom que transcendem o cronológico e contam sua história de forma poética.
              </p>
              <ul className="space-y-3 pt-4 text-muted-foreground font-light">
                <li>• Cobertura completa do dia (8-10 horas)</li>
                <li>• Dois fotógrafos principais + assistentes</li>
                <li>• Curadoria e edição artística</li>
                <li>• Entrega em alta resolução + álbum premium</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60" 
                alt="Photography service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] relative">
              <img 
                src={imgCinema} 
                alt="Cinema service" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <span className="text-primary text-sm uppercase tracking-widest font-medium">02</span>
              <h2 className="text-4xl font-display italic">Filme Cinematográfico</h2>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Narrativa fluida, trilha cuidadosamente escolhida e edição refinada. Criamos filmes que não são apenas registros cronológicos, mas verdadeiras experiências cinematográficas que capturam a essência do casal.
              </p>
              <p className="text-muted-foreground font-light text-base leading-relaxed">
                Cada filme é uma composição de luz, som e emoção. Trabalhamos com equipment de cinema profissional e colorizamos com precisão para que seu filme seja tão memorizável quanto os melhores filmes que você já viu.
              </p>
              <ul className="space-y-3 pt-4 text-muted-foreground font-light">
                <li>• Filme Teaser (1 min)</li>
                <li>• Filme Highlight (3-5 min)</li>
                <li>• Filme Documental Completo (20-40 min)</li>
                <li>• Trilha original ou curada com precisão</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="text-primary text-sm uppercase tracking-widest font-medium">03</span>
              <h2 className="text-4xl font-display italic">Ensaios Pré & Pós-Wedding</h2>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Conexão, leveza e direção sutil. Uma oportunidade de registrar o amor de vocês sem a correria do dia do casamento, em locações que tenham significado para a sua história.
              </p>
              <p className="text-muted-foreground font-light text-base leading-relaxed">
                Os ensaios são tão importantes quanto o dia do casamento. É quando vocês podem ser autênticos, explorar a química naturalmente e criar imagens que contam a intimidade da sua relação com toda a elegância técnica que nos define.
              </p>
              <ul className="space-y-3 pt-4 text-muted-foreground font-light">
                <li>• 3 a 4 horas de sessão em locação</li>
                <li>• Consultoria de styling e locação</li>
                <li>• Direção artística refinada</li>
                <li>• 80-100+ fotos editadas com cuidado</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&auto=format&fit=crop&q=60" 
                alt="Session service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-secondary/30 -mx-4 md:-mx-8 px-4 md:px-8 py-24 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display italic mb-16 text-center">Um processo claro, seguro e sem surpresas</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Reunião", desc: "Alinhamento artístico e expectativas." },
                { step: "02", title: "Planejamento", desc: "Roteiro e detalhes técnicos." },
                { step: "03", title: "O Grande Dia", desc: "Cobertura discreta e profissional." },
                { step: "04", title: "Curadoria", desc: "Edição autoral e tratamento." },
                { step: "05", title: "Entrega", desc: "Material refinado, no prazo." },
              ].map((item, i) => (
                <div key={i} className="text-center space-y-3">
                  <div className="text-4xl font-serif text-primary/30">{item.step}</div>
                  <h3 className="font-medium uppercase tracking-widest text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-32">
          <Link href="/contato">
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-8 uppercase tracking-widest">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
        <AlbumCarousel />

      </div>
    </div>
  );
}
