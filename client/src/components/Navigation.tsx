import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    {href: "/contato", label: "Contato" },
    { href: "/portfolio", label: "Portfólio" },
    { href: "/gestante", label: "Gestante" },
    { href: "/formaturas", label: "Formaturas" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/seguranca", label: "Segurança" },
    
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent",
        isScrolled ? "bg-background/95 backdrop-blur-sm py-4 border-border/40 shadow-sm" : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
      <Link href="/" className="font-display italic text-2xl md:text-3xl text-foreground hover:opacity-80 transition-opacity z-50">
         <h1>Iusti Produções
          <br/>
         </h1>
        </Link> 
        </div>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        <br/>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 lg:gap-12">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-300 relative group",
                location === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-2 left-0 w-full h-[1px] bg-primary scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left",
                location === link.href && "scale-x-100 origin-left"
              )} />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-foreground hover:text-primary transition-colors"
          style={{ marginTop: "0px", marginRight: "10px",marginLeft: "80%",border: "1px solid white ",padding: "10px",textAlign: "center" }}
        >
         Clique Aqui! {isOpen ? <X size={24} /> : <Menu size={1} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "fade", duration:1, ease: "circOut" }}
              className="fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 md:hidden"
              
            >
              <br/><br/><br/><br/><br/>
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="font-serif text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                  style={{margin:0, textTransform: "uppercase", letterSpacing: "0.2em",backgroundColor:"black",padding: "10px",borderRadius: "5px" }}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <br/>
      </div>
    </header>
  );
}
