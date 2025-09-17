import { AlertTriangle, Clock, Shield, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-destructive" />,
      title: "Temps perdu sur des tâches répétitives",
      description: "Emails, reporting, saisie... Vos collaborateurs perdent des heures précieuses."
    },
    {
      icon: <Shield className="w-8 h-8 text-destructive" />,
      title: "Utilisation d'IA sans cadre sécurisé",
      description: "Risques de confidentialité et mauvaises pratiques faute de formation."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-destructive" />,
      title: "Retard concurrentiel croissant",
      description: "Pendant que vous hésitez, vos concurrents gagnent déjà en efficacité."
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-destructive/10 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-destructive/5 blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-destructive/10 rounded-full px-6 py-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-destructive font-semibold">Alerte Productivité</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center max-w-4xl mx-auto">
            ⚠️ Vos équipes perdent du temps, vos{" "}
            <span className="text-destructive">concurrents prennent de l'avance</span>
          </h2>
        </div>
        
        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className={`bg-gradient-card rounded-2xl p-8 hover-glow animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="mb-6">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        {/* Impact Statement */}
        <div className="bg-gradient-card rounded-3xl p-12 text-center mb-12 animate-fade-in-up animate-delay-400">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Le coût de l'inaction est plus élevé que celui de la formation
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Chaque jour sans formation IA, c'est des heures perdues, des opportunités manquées, 
              et un écart qui se creuse avec vos concurrents les plus innovants.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-destructive/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-destructive mb-2">-30%</div>
                <div className="text-sm text-muted-foreground">Productivité perdue sur tâches répétitives</div>
              </div>
              <div className="bg-destructive/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-destructive mb-2">2h/jour</div>
                <div className="text-sm text-muted-foreground">Temps gaspillé par collaborateur</div>
              </div>
              <div className="bg-destructive/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-destructive mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Des entreprises adoptent déjà l'IA</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center animate-fade-in-up animate-delay-500">
          <Button 
            className="cta-primary hover-glow text-lg px-12 py-6"
            onClick={() => window.open('https://app.lemcal.com/@nancyakpo', '_blank')}
          >
            👉 Réservez un appel pour rattraper le retard de vos équipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;