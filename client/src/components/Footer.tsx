import { motion } from "framer-motion";
import { Link } from "wouter";
import { Instagram, Mail, Facebook } from "lucide-react";
import { SiGoogle } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-wide text-foreground">Iusti Produções</h3>
            <p className="text-muted-foreground font-light max-w-xs leading-relaxed">
              Fotografia e filmes autorais para casamentos. Criando legados visuais com sensibilidade e excelência.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-primary">Navegação</h4>
            <nav className="flex flex-col gap-4 text-muted-foreground font-light">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/portfolio" className="hover:text-primary transition-colors">Portfólio</Link>
              <Link href="/gestante" className="hover:text-primary transition-colors">Gestante</Link>
              <Link href="/formaturas" className="hover:text-primary transition-colors">Formaturas</Link>
              <Link href="/sobre" className="hover:text-primary transition-colors">Sobre</Link>
              <Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link>
              <Link href="/seguranca" className="hover:text-primary transition-colors">Política de Cobertura</Link>
              <Link href="/contato" className="hover:text-primary transition-colors">Contato</Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-primary">Contato</h4>
            <div className="flex items-center gap-4">
              <motion.a
                href="mailto:contato@iusti.productions"
                aria-label="Enviar e-mail"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-background text-primary shadow-sm shadow-black/10"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Mail size={26} />
              </motion.a>

              <motion.a
                href="https://instagram.com/iustifotografia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-background text-primary shadow-sm shadow-black/10"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Instagram size={26} />
              </motion.a>

              <motion.a
                href="https://web.facebook.com/IustiFotografia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-background text-primary shadow-sm shadow-black/10"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Facebook size={26} />
              </motion.a>

              <motion.a
                href="https://share.google/W7sNlc2QSiwXLgUPO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-background text-primary shadow-sm shadow-black/10"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <SiGoogle size={26} />
              </motion.a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground text-sm font-light space-y-2">
          <p>&copy; {new Date().getFullYear()} Iusti Produções. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.innovaiusti.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Innova Iusti
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
