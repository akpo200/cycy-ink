import { Button } from "@/components/ui/button";
import { Calendar, Play, Sparkles } from "lucide-react";
import aiHeroBg from "@/assets/ai-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={aiHeroBg} 
          alt="AI Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-primary opacity-20 blur-xl float animate-delay-100" />
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-gradient-secondary opacity-20 blur-xl float animate-delay-300" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/30 blur-lg float animate-delay-500" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-card rounded-full px-6 py-3 mb-8 animate-pulse-glow">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Formation IA Révolutionnaire</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Formez vos équipes à{" "}
            <span className="gradient-text">l'IA et l'automatisation</span>{" "}
            en seulement quelques heures
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Accessible. Pratique. Sécurisé.
          </p>
          
          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-right animate-delay-200">
            <div className="bg-gradient-card rounded-full px-6 py-2">
              <span className="text-success font-medium">✅ Résultats immédiats</span>
            </div>
            <div className="bg-gradient-card rounded-full px-6 py-2">
              <span className="text-success font-medium">✅ Cas concrets métier</span>
            </div>
            <div className="bg-gradient-card rounded-full px-6 py-2">
              <span className="text-success font-medium">✅ Sécurité garantie</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-400">
            <Button 
              size="lg" 
              className="cta-primary hover-glow group"
              onClick={() => window.open('https://app.lemcal.com/@nancyakpo', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              📅 Réserver un appel découverte avec Nancy
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass hover-glow border-border/30 text-foreground hover:text-primary"
            >
              <Play className="w-5 h-5 mr-2" />
              🎥 Voir la démonstration
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="mt-16 animate-fade-in-up animate-delay-500">
            <p className="text-muted-foreground mb-4">Déjà adopté par :</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold">🏢 +50 entreprises</div>
              <div className="text-lg font-semibold">👥 +500 collaborateurs formés</div>
              <div className="text-lg font-semibold">⚡ 3h pour maîtriser l'IA</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;