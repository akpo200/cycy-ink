import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-card to-background border-t border-border/20 py-8 px-6">      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2025 Cycy Ink. Tous droits réservés.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-accent" />
              <span>contact@cycyink.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-accent" />
              <span>nancyakpo@gmail.com</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/nancyakpo/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;