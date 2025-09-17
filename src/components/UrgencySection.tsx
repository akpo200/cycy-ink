import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Zap } from "lucide-react";

const UrgencySection = () => {
  const urgencyPoints = [
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "L'IA avance vite",
      description: "Vos concurrents n'attendront pas"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Productivité immédiate", 
      description: "Former aujourd'hui = gagner dès demain"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "3h suffisent",
      description: "Pour amorcer un changement durable"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/5 to-secondary/10" />
      <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-bounce" />
      <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-bounce animate-delay-200" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-6 pulse-glow">
            <Clock className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Pourquoi Agir Maintenant</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            ⚡ Le moment{" "}
            <span className="gradient-text">d'agir c'est maintenant</span>
          </h2>
        </div>
        
        {/* Urgency Points */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {urgencyPoints.map((point, index) => (
            <div 
              key={index}
              className={`bg-gradient-card rounded-2xl p-8 hover-glow animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="mb-6">{point.icon}</div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
        
        {/* Main Message */}
        <div className="bg-gradient-primary rounded-3xl p-12 mb-12 animate-fade-in-up animate-delay-400">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            🚀 "Vos collaborateurs sont vos meilleurs atouts"
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Donnez-leur les outils pour rester performants dans le monde d'aujourd'hui.
          </p>
          
          {/* Stats Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-primary-foreground/10 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">85%</div>
              <div className="text-sm text-primary-foreground/80">des entreprises adoptent l'IA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">40%</div>
              <div className="text-sm text-primary-foreground/80">de gain de productivité possible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">3h</div>
              <div className="text-sm text-primary-foreground/80">pour transformer votre équipe</div>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="animate-fade-in-up animate-delay-500">
          <Button 
            size="lg" 
            className="cta-primary hover-glow text-xl px-16 py-8 shadow-2xl"
            onClick={() => window.open('https://app.lemcal.com/@nancyakpo', '_blank')}
          >
            📅 Réservez votre appel découverte avec Nancy dès aujourd'hui
          </Button>
          
          <p className="text-muted-foreground mt-6">
            ⏰ Places limitées - Octobre 2025 se remplit rapidement
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;