import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlbumCarousel } from "@/components/AlbumCarousel";
import { useSeo } from "@/hooks/use-seo";
import imgFormatura from "@assets/stock_images/formatura_3.png";



export default function Formaturas () {
  useSeo({
    title: "Formaturas | Iusti Produções | Cobertura de Formatura",
    description: "Cobertura autoral para formaturas, com fotos e vídeo que preservam emoção, conquistas e celebrações. Entregamos um legado visual para toda família.",
    image: imgFormatura,
    imageAlt: "Formandos celebrando a formatura com becas e capelos",
    url: "https://www.iusti.productions/formaturas",
    keywords: "formatura, cobertura de formatura, fotógrafo de formatura, filme de formatura, festa de formatura, registro de formatura",
    twitterSite: "@iustifotografia",
    twitterCreator: "@iustifotografia",
    ogType: "website",
    siteName: "Iusti Produções",
    locale: "pt_BR",
    themeColor: "#111111"
  });

  return (
    <div className="pt-32 min-h-screen bg-background text-foreground">
      <section className="relative h-[90vh] lg:h-[75vh] flex items-center overflow-hidden">
        <img
          src={imgFormatura}
          alt="Celebração de formatura com palco e convidados"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block text-primary uppercase tracking-[0.4em] text-xs font-sans mb-4">
              Formaturas
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display italic leading-tight text-white mb-6">
              Cobertura de formatura que celebra cada conquista como história.
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Registramos cerimônia, festa e momentos de celebração em formato fotográfico e cinematográfico. Sua formatura merece um registro emocional, elegante e pensado para durar gerações.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contato">
                <Button className="rounded-none px-10 py-5 uppercase tracking-widest">Peça seu orçamento</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-sans mb-4 inline-block">
              O registro perfeito para a sua formatura
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Imagens autorais que valorizam a energia, o orgulho e a emoção do momento.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Cada formatura é única. Por isso combinamos fotografia documental e direção cinematográfica para capturar tanto a formalidade da cerimônia quanto a alegria da festa e as conexões espontâneas entre família e amigos.
            </p>
            <div className="grid gap-6">
              {[
                {
                  title: "Cerimônia completa",
                  text: "Cobertura detalhada do desfile, juramento, homenagens e os momentos decisivos do palco."
                },
                {
                  title: "Festa memorável",
                  text: "Registro da celebração com convidados, discursos, emoção e toda a energia da comemoração."
                },
                {
                  title: "Formato premium",
                  text: "Entregamos fotos em alta resolução e um vídeo highlight que transforma o evento em narrativa audiovisual."
                }
              ].map((item, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-2xl font-display">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
            <img src={imgFormatura} alt="Formatura celebrada em festa" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-sans mb-4 inline-block">
            Cobertura de formatura
          </span>
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Serviços pensados para você e para quem celebra essa conquista.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Cobertura completa",
                desc: "Cerimônia, festa e backstage com equipe dedicada e sem ruídos na narrativa visual."
              },
              {
                title: "Edição autoral",
                desc: "Seleção e tratamento que preservam o clima do dia, com identidade visual elegante e moderna."
              },
              {
                title: "Entrega rápida",
                desc: "Fotos e vídeo highlight prontos em prazo combinado, para compartilhar com orgulho desde o primeiro dia."
              }
            ].map((item, index) => (
              <div key={index} className="bg-background p-8 border border-border/50 rounded-3xl">
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-sans mb-4 inline-block">
              Momentos de formatura
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Mais fotos reais de formandos celebrando suas conquistas.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Uma seleção de imagens que mostra a energia do palco, a alegria dos amigos e a emoção da família ao celebrar a formatura.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Cada esforço realizado, cada noite sem dormir, cada desafio superado — tudo culminando no momento em que o formando sobe ao palco para receber seu diploma, cercado por aplausos e sorrisos de orgulho."
              },
              {
                src: "https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f?q=80&w=1114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Sua familia vai se orgulhar de ver a emoção estampada em cada foto, revivendo a alegria do dia da formatura e compartilhando esse momento especial com as próximas gerações."
              },
              {
                src: "https://plus.unsplash.com/premium_photo-1714397546754-3c1ef1be26e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Sua formatura é um marco que merece ser registrado com emoção, elegância e autenticidade. Cada foto é uma memória viva, pronta para ser compartilhada e celebrada por toda a família."
              },
              {
                src: "https://images.unsplash.com/photo-1618355776464-8666794d2520?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Seu álbum reflete a excelente profissional que você é, a jornada que percorreu e o orgulho de sua família. Cada imagem é uma celebração da sua conquista, pronta para ser compartilhada e revivida por toda a família."
              }
            ].map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-3xl bg-black/5 shadow-lg shadow-black/5">
                <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105" />
                <div className="p-4 text-sm text-muted-foreground">{photo.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Transforme sua formatura em um legado que passa de geração em geração.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Temos pacotes especiais de recordação de formatura, com fotos e vídeos que preservam a emoção do dia, para que você e sua família possam reviver esse momento especial por toda a vida. Se você é representante de turma, entre em contato para condições especiais para grupos. Não vale a penas deixar esse momento passar sem um registro à altura da sua conquista. Solicite seu orçamento e garanta que sua formatura seja lembrada para sempre.   
          </p>
          <Link href="/contato">
            <Button className="rounded-none px-12 py-6 uppercase tracking-widest">Solicitar cobertura</Button>
          </Link>
        </div>
      </section>      <AlbumCarousel />    </div>
  );
}
