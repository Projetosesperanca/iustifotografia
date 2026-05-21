import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const albumFiles = import.meta.glob(
  "@assets/stock_images/Albuns/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
) as Record<string, { default: string }>

const albumImages = Object.entries(albumFiles)
  .map(([path, mod]) => {
    const filename = path.replace(/.*\//, "").replace(/\.[^.]+$/, "")

    const title = filename
      .replace(/_/g, " ")
      .replace(/\s*\(\d+\)$/, "")
      .replace(/\b(album|encadernado)\b/gi, (match) =>
        match.toLowerCase() === "album"
          ? "Álbum"
          : "Encadernado"
      )

    return {
      src: mod.default,
      alt: title,
      title,
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

export function AlbumCarousel() {
  if (!albumImages.length) {
    return null
  }

  return (
    <section className="py-24 md:py-32 bg-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-primary uppercase tracking-[0.4em] text-xs font-sans mb-4">
            Álbuns Exclusivos diagramados de acordo com a identidade visual do seu casamento, pensados para preservar suas memórias com qualidade e elegância.
          <br/>
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
            Descubra nossos álbuns elegantes com qualidade superior          </h2>

          <p className="mt-4 text-muted-foreground font-light max-w-2xl mx-auto">
            Cada álbum é pensado para preservar sua história com acabamento
            premium, design sofisticado e fotografias que merecem ser
            revisitadas sempre.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselContent className="-ml-4">
            {albumImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-background shadow-2xl shadow-black/10"
                >
                  <div className="overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-black/50 backdrop-blur-md px-6 py-6 text-white">
                    <p className="mb-2 text-xs uppercase tracking-[0.35em] text-primary/90">
                      Coleção de álbuns
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 md:left-[-4rem] top-1/2 z-10 -translate-y-1/2 bg-background/90 backdrop-blur" />

          <CarouselNext className="right-2 md:right-[-4rem] top-1/2 z-10 -translate-y-1/2 bg-background/90 backdrop-blur" />
        </Carousel>
      </div>
    </section>
  )
}