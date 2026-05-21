import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlbumCarousel } from "@/components/AlbumCarousel";
import { useSeo } from "@/hooks/use-seo";
import imgSecurity from "@assets/stock_images/wedding_reception_ce_59f815fe.jpg";
import {
  MapPin,
  Users,
  UserCheck,
  HardDrive,
  Shield,
  BookOpen,
  Camera,
  Clock,
} from "lucide-react";

const pillars = [
  {
    icon: <MapPin className="w-7 h-7 text-primary" />,
    number: "01",
    title: "Visita Técnica Prévia ao Local",
    short: "Conhecemos cada centímetro do seu espaço antes do grande dia.",
    body: `Antes de qualquer evento, nossa equipe realiza uma visita técnica completa ao local da cerimônia e da recepção. Mapeamos os melhores ângulos de luz natural em diferentes horários do dia, identificamos pontos de interesse para a cobertura, avaliamos as condições elétricas para os equipamentos e planejamos cada deslocamento interno da equipe.

Essa visita não é um detalhe operacional — é o que nos permite antecipar o imprevisível. Quando o momento mais emocionante da cerimônia acontecer, nossa equipe já saberá exatamente onde estar.`,
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    number: "02",
    title: "Integração com a Equipe de Cerimonialistas",
    short: "Trabalhamos em sintonia total com todos os profissionais do seu evento.",
    body: `Um casamento de alto nível é uma orquestra de profissionais. E orquestras só funcionam quando cada músico conhece a partitura dos demais. Por isso, antes do seu dia, nos reunimos com sua equipe de cerimonialistas, assessores e coordenadores para alinhar roteiro, timing e posicionamentos.

Sabemos quando o buquê será lançado, quando as luzes serão apagadas para a entrada dos noivos, qual o ritmo da mesa dos padrinhos. Essa integração elimina surpresas, garante fluidez e nos permite antecipar os instantes — e não apenas reagir a eles.`,
  },
  {
    icon: <UserCheck className="w-7 h-7 text-primary" />,
    number: "03",
    title: "Equipe de Sobreaviso",
    short: "Nenhum imprevisto humano compromete o registro do seu casamento.",
    body: `O seu casamento acontece uma única vez. E isso é exatamente por isso que mantemos profissionais seniores de sobreaviso em todos os eventos que cobrimos. Em caso de qualquer imprevisto — saúde, acidente, emergência — um membro qualificado da nossa equipe estará pronto para assumir a cobertura sem interrupção e sem perda de qualidade.

Não é uma apólice de seguro escrita em papel. É uma equipe real, disponível e treinada, aguardando apenas para garantir que absolutamente nada coloque em risco o registro da sua história.`,
  },
  {
    icon: <Camera className="w-7 h-7 text-primary" />,
    number: "04",
    title: "Equipamentos Redundantes",
    short: "Uma falha técnica nunca será motivo para perder um momento.",
    body: `Todo equipamento que utilizamos em campo possui um espelho idêntico disponível no evento — corpos de câmera reservas, lentes duplicadas, baterias extras, cartões de memória adicionais, fontes de energia independentes e sistemas de iluminação de backup.

Nossa filosofia é simples: o equipamento existe para servir ao momento, nunca para limitá-lo. Falhas técnicas são raras, mas em um contexto onde não há segunda tomada, a única resposta aceitável é a redundância total.`,
  },
  {
    icon: <HardDrive className="w-7 h-7 text-primary" />,
    number: "05",
    title: "Backup em Tempo Real Durante o Evento",
    short: "Seus arquivos já estão protegidos antes mesmo de você chegar em casa.",
    body: `Durante a finalização do evento — ainda no local — realizamos o backup completo de todos os arquivos originais em múltiplos dispositivos de armazenamento independentes. Isso significa que, ao encerrar nossa cobertura, seus registros já existem em mais de um lugar simultaneamente.

Nunca dependemos de um único ponto de falha. Seus momentos mais preciosos não percorrem o risco de uma única mídia, de um único HD ou de uma única decisão. Antes de dormirmos, sua memória já está segura.`,
  },
  {
    icon: <Shield className="w-7 h-7 text-primary" />,
    number: "06",
    title: "Guarda de Arquivos por 10 Anos",
    short: "Uma década de segurança para os registros mais importantes da sua vida.",
    body: `Guardamos os arquivos originais e finais do seu casamento — incluindo todos os RAWs fotográficos e os projetos de vídeo — por um período de 10 anos em servidores seguros e com redundância geográfica.

Isso significa que se você precisar de uma cópia adicional, quiser presentear alguém especial com uma seleção de imagens, ou simplesmente desejar revisitar os momentos originais sem edição, estaremos aqui. Uma memória desta magnitude merece uma guardiã à sua altura — e por tempo suficiente para que seus filhos, um dia, possam pedi-la a você.`,
  },
  {
    icon: <BookOpen className="w-7 h-7 text-primary" />,
    number: "07",
    title: "Garantia do Álbum por 10 Anos",
    short: "Um objeto que atravessa gerações, com a responsabilidade que isso exige.",
    body: `Nossos álbuns de casamento são produzidos com materiais de arquivamento profissional — papéis de vida útil superior a um século, encadernação artesanal e tintas estáveis que não desbotam com o tempo. E garantimos cada um deles por 10 anos.

Se, nesse período, houver qualquer problema de fabricação — descolamento, desbotamento, defeito de acabamento — substituímos ou restauramos sem custo. Porque o álbum que vocês deixarão aos seus filhos não pode ser uma promessa frágil. Ele precisa ser tão sólido quanto a memória que carrega.`,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Seguranca() {
  useSeo({
    title: "Segurança | Iusti Produções | Proteção de Arquivos e Backup",
    description: "Veja como garantimos a segurança total dos seus arquivos de casamento: backups em tempo real, redundância, e guarda de arquivos por 10 anos.",
    image: imgSecurity,
    imageAlt: "Backup seguro de arquivos de casamento",
    url: "https://www.iusti.productions/seguranca",
    keywords: "segurança de fotos, backup de arquivos, guarda de imagens, proteção de memória, armazenamento de casamento",
    twitterSite: "@iustifotografia",
    twitterCreator: "@iustifotografia",
    ogType: "website",
    siteName: "Iusti Produções",
    locale: "pt_BR",
    themeColor: "#111111"
  });

  return (
    <div className="pt-32 min-h-screen bg-background text-foreground">

      {/* Hero */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-6"
          >
            Protocolo de Segurança
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display italic leading-tight mb-8"
          >
            O seu casamento acontece uma única vez. Nossa responsabilidade é absoluta.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-[1px] bg-primary mb-10"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-light text-xl leading-relaxed max-w-3xl"
          >
            Não existe ensaio geral. Não existe segunda chance. O dia do seu casamento é um evento irrepetível — e é precisamente por isso que construímos, ao longo de anos, um protocolo de segurança que vai muito além do que qualquer cliente poderia imaginar exigir.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground font-light text-lg leading-relaxed max-w-3xl mt-6"
          >
            Senioridade não é apenas experiência técnica — é a consciência profunda de que cada detalhe importa, de que a confiança dos nossos clientes é sagrada, e que a única falha inaceitável é não estar preparado.
          </motion.p>
        </div>
      </div>

      {/* Divider with pull quote */}
      <div className="bg-foreground text-background py-16 md:py-20 px-4 mb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-background/90 leading-relaxed">
            "Equipe sênior não é um luxo. É a única escolha racional quando não há segunda oportunidade."
          </p>
        </div>
      </div>

      {/* Pillars */}
      <div className="container mx-auto px-4 md:px-8 mb-32">
        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-border/60 py-16 md:py-20 ${
                i === pillars.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Number + Icon */}
              <div className="lg:col-span-2 flex items-start gap-4 mb-8 lg:mb-0">
                <span className="text-4xl font-serif text-primary/25 leading-none">{pillar.number}</span>
                <div className="mt-1">{pillar.icon}</div>
              </div>

              {/* Title + Short */}
              <div className="lg:col-span-4 lg:pr-12 mb-8 lg:mb-0">
                <h2 className="text-2xl md:text-3xl font-serif mb-4 leading-snug">{pillar.title}</h2>
                <p className="text-primary font-light text-base italic leading-relaxed">{pillar.short}</p>
              </div>

              {/* Body */}
              <div className="lg:col-span-6 lg:pl-8 border-l-0 lg:border-l border-border/40">
                {pillar.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-muted-foreground font-light text-base leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary commitment block */}
      <div className="bg-secondary/40 py-24 md:py-32 px-4 mb-0">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-display italic text-center mb-16"
          >
            O que você está contratando, na prática
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border/50">
            {[
              { icon: <Clock className="w-5 h-5 text-primary" />, label: "Visita prévia ao espaço", sub: "Conhecimento antecipado do local" },
              { icon: <UserCheck className="w-5 h-5 text-primary" />, label: "Equipe de sobreaviso", sub: "Profissional sênior disponível no dia" },
              { icon: <HardDrive className="w-5 h-5 text-primary" />, label: "Backup ainda no evento", sub: "Arquivos protegidos antes do fim da festa" },
              { icon: <Shield className="w-5 h-5 text-primary" />, label: "10 anos de guarda & garantia", sub: "Arquivos e álbum protegidos por uma década" },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 flex flex-col gap-4 ${i < 3 ? "border-b md:border-b-0 md:border-r border-border/50" : ""}`}
              >
                {item.icon}
                <p className="font-serif text-lg leading-snug">{item.label}</p>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-32 bg-foreground text-background text-center px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Agora que você conhece nossa responsabilidade, vamos conversar sobre o seu dia.
          </h2>
          <p className="text-background/70 font-light text-lg max-w-xl mx-auto leading-relaxed">
            Cada casamento que cobrimos carrega o peso de uma história única. E essa responsabilidade nos move a ser, sempre, melhores do que fomos ontem.
          </p>
          <Link href="/contato">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-12 py-8 text-sm uppercase tracking-widest mt-4 transition-transform duration-300 hover:-translate-y-1">
              Solicitar Proposta Personalizada
            </Button>
          </Link>
        </div>
      </section>
      <AlbumCarousel />

    </div>
  );
}
