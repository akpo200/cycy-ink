import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, GraduationCap, Users } from "lucide-react";
import nancyPortrait from "@/assets/nancy-portrait.jpg";

const AboutNancySection = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      title: "Master en IA",
      description: "Formation approfondie à Dakar"
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "+500 formés",
      description: "Collaborateurs accompagnés"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-accent" />,
      title: "3 ans d'expertise",
      description: "Automatisation et IA"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Cycy Ink",
      description: "Fondatrice et CEO"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-secondary opacity-20 blur-3xl float" />
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-gradient-primary opacity-20 blur-3xl float animate-delay-300" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Qui suis-je ?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Moi c'est{" "}
            <span className="gradient-text">Nancy</span>, votre experte IA
          </h2>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Photo and Achievements */}
          <div className="animate-fade-in-up">
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden bg-gradient-card p-2">
                <img 
                  src={nancyPortrait} 
                  alt="Nancy - Fondatrice Cycy Ink" 
                  className="w-full h-full object-cover rounded-2xl hover-glow"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-primary rounded-2xl px-6 py-3 pulse-glow">
                <div className="text-primary-foreground font-bold">Experte IA</div>
                <div className="text-primary-foreground/80 text-sm">& Automatisation</div>
              </div>
            </div>
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-card rounded-xl p-4 hover-glow animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {achievement.icon}
                    <div className="font-bold text-sm">{achievement.title}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Story */}
          <div className="animate-slide-in-right animate-delay-200">
            <div className="bg-gradient-card rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Mon parcours</h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  🚀 <strong className="text-foreground">Il y a 3 ans</strong>, je me suis lancée en freelance et j'ai découvert 
                  la puissance de l'IA pour automatiser mes process. Rapidement, j'ai compris que ces 
                  outils pouvaient révolutionner la façon de travailler.
                </p>
                
                <p>
                  🎓 <strong className="text-foreground">En 2024</strong>, j'ai quitté le Togo pour Dakar afin de suivre un 
                  Master en IA, tout en continuant à développer mon entreprise Cycy Ink.
                </p>
                
                <p>
                  💡 <strong className="text-foreground">Aujourd'hui</strong>, je transmets cette expertise aux entreprises 
                  pour les aider à former leurs équipes à utiliser l'IA de manière pratique, 
                  sécurisée et adaptée à leur métier.
                </p>
              </div>
            </div>
            
            {/* Mission Statement */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold text-primary-foreground mb-3">
                Ma mission
              </h4>
              <p className="text-primary-foreground/90">
                Démocratiser l'IA en entreprise avec des formations concrètes, 
                sécurisées et immédiatement applicables.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center animate-fade-in-up animate-delay-500">
          <Button 
            className="cta-primary hover-glow text-lg px-12 py-6"
            onClick={() => window.open('https://app.lemcal.com/@nancyakpo', '_blank')}
          >
            📅 Discutons de vos besoins – Réserver un appel avec Nancy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutNancySection;