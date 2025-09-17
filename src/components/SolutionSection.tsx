import { CheckCircle, Target, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-success" />,
      title: "Formation courte et interactive",
      description: "Adaptée à vos besoins spécifiques, sans théorie inutile"
    },
    {
      icon: <Zap className="w-8 h-8 text-success" />,
      title: "Test direct des outils",
      description: "Vos collaborateurs manipulent les outils en temps réel"
    },
    {
      icon: <Users className="w-8 h-8 text-success" />,
      title: "Cas concrets métier",
      description: "Exercices pratiques liés à leurs missions quotidiennes"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-success" />,
      title: "Résultats immédiats",
      description: "Repartent avec des automatisations applicables dès le lendemain"
    }
  ];

  const tools = [
    { name: "ChatGPT & Gemini", use: "Écrire, résumer, analyser" },
    { name: "NotebookLM", use: "Recherche documentaire intelligente" },
    { name: "Turboscribe", use: "Transcription audio/vidéo" },
    { name: "Gamma", use: "Présentations automatiques" },
    { name: "N8N", use: "Automatisation de workflows" },
    { name: "Ollama", use: "IA locale sécurisée" }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-success/5 via-transparent to-success/10" />
      <div className="absolute top-32 right-16 w-32 h-32 rounded-full bg-success/20 blur-3xl float" />
      <div className="absolute bottom-32 left-16 w-48 h-48 rounded-full bg-success/10 blur-3xl float animate-delay-300" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-success font-semibold">La Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center max-w-4xl mx-auto">
            Une formation{" "}
            <span className="gradient-text">pratique et efficace</span>{" "}
            adaptée à vos besoins
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pas de théorie inutile : vos collaborateurs testent directement les outils 
            avec des cas concrets liés à leur métier.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-gradient-card rounded-2xl p-8 hover-glow animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-lg font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Tools Showcase */}
        <div className="bg-gradient-card rounded-3xl p-12 mb-16 animate-fade-in-up animate-delay-400">
          <h3 className="text-3xl font-bold text-center mb-8">
            🛠️ Outils que vos équipes maîtriseront
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-card/50 rounded-xl p-6 border border-success/20 hover-glow"
              >
                <div className="font-bold text-success mb-2">{tool.name}</div>
                <div className="text-sm text-muted-foreground">{tool.use}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Key Method */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-center mb-12 animate-fade-in-up animate-delay-500">
          <h3 className="text-3xl font-bold mb-6 text-primary-foreground">
            ⚡ Méthode CIFR : Prompting Efficace
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 rounded-xl p-6">
              <div className="text-2xl font-bold text-primary-foreground mb-2">C</div>
              <div className="text-sm text-primary-foreground/80">Contexte</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6">
              <div className="text-2xl font-bold text-primary-foreground mb-2">I</div>
              <div className="text-sm text-primary-foreground/80">Intention</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6">
              <div className="text-2xl font-bold text-primary-foreground mb-2">F</div>
              <div className="text-sm text-primary-foreground/80">Format</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6">
              <div className="text-2xl font-bold text-primary-foreground mb-2">R</div>
              <div className="text-sm text-primary-foreground/80">Règles</div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center animate-fade-in-up animate-delay-600">
          <Button 
            className="cta-primary hover-glow text-lg px-12 py-6"
            onClick={() => window.open('https://app.lemcal.com/@nancyakpo', '_blank')}
          >
            📅 Découvrir la formation en 20 min – Réserver un appel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;