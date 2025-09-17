import { Button } from "@/components/ui/button";
import { Check, Users, Clock, Target } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Formation Générale",
      price: "150 000 FCFA",
      duration: "2h30",
      maxParticipants: "25",
      description: "Idéale pour une première approche de l'IA",
      features: [
        "Bases de l'IA et de l'automatisation",
        "Présentation d'outils pratiques",
        "Sensibilisation sécurité & bonnes pratiques",
        "Session interactive avec démonstrations",
        "Support post-formation inclus",
        "Certificat de participation"
      ],
      popular: false,
      color: "accent"
    },
    {
      name: "Formation Spécialisée",
      price: "200 000 FCFA",
      duration: "3h30",
      maxParticipants: "15",
      description: "Formation complète avec cas métiers spécifiques",
      features: [
        "Tout ce qui est inclus dans la formation générale",
        "Cas concrets adaptés à vos métiers (RH, Compta, etc.)",
        "Exercices pratiques supervisés",
        "Création d'automatisations personnalisées",
        "Suivi individuel pendant la session",
        "Guide de mise en application",
        "Session de questions-réponses dédiée"
      ],
      popular: true,
      color: "primary"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Appel découverte",
      description: "20 min pour comprendre vos besoins et vous expliquer en détail"
    },
    {
      step: "2", 
      title: "Planning",
      description: "Nous fixons ensemble une date entre le 1er et le 31 octobre 2025"
    },
    {
      step: "3",
      title: "Préparation",
      description: "Guide d'onboarding avec les outils à installer à l'avance"
    },
    {
      step: "4",
      title: "Contrat",
      description: "Signature d'un contrat de consultante pour cadrer la mission"
    },
    {
      step: "5",
      title: "Formation",
      description: "Session de 2h30 ou 3h30 selon votre choix"
    },
    {
      step: "6",
      title: "Paiement",
      description: "Règlement à la fin de la formation (confiance et transparence)"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl float" />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl float animate-delay-300" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Nos Formules</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Choisissez la formation{" "}
            <span className="gradient-text">adaptée à vos besoins</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deux formules conçues pour répondre à différents niveaux d'engagement et d'expertise
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-card rounded-3xl p-8 hover-glow animate-fade-in-up animate-delay-${(index + 1) * 200} ${
                plan.popular ? 'ring-2 ring-primary glow-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary rounded-full px-6 py-2 text-primary-foreground font-semibold">
                    ⭐ Plus Populaire
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground">/ session</span>
                </div>
                
                <div className="flex justify-center gap-8 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-accent" />
                    <span>Jusqu'à {plan.maxParticipants} participants</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full ${plan.popular ? 'cta-primary' : 'bg-accent hover:bg-accent/90'} hover-glow`}
                size="lg"
                onClick={() => window.open('https://app.lemcal.com/@nancyakpo', '_blank')}
              >
                📅 Réserver un appel pour cette formule
              </Button>
            </div>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="mb-16 animate-fade-in-up animate-delay-400">
          <h3 className="text-3xl font-bold text-center mb-12">
            🎯 Un processus simple et rassurant
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div 
                key={index}
                className={`bg-gradient-card rounded-2xl p-6 hover-glow animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="font-bold">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center animate-fade-in-up animate-delay-600">
          <Button 
            className="cta-primary hover-glow text-lg px-12 py-6"
            onClick={() => window.open('https://app.lemcal.com/@nancyakpo', '_blank')}
          >
            📅 Planifier mon appel découverte maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;