// src/components/sections/ProcessSection.tsx
export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Soumettre la réclamation",
      description: "Complétez le formulaire sécurisé avec les détails de votre dossier en quelques minutes.",
      icon: "📝",
      color: "bg-awlaGreen/20 text-awlaGreen border-awlaGreen"
    },
    {
      number: "2", 
      title: "Analyse experte",
      description: "Nos spécialistes évaluent gratuitement la recevabilité et les chances de succès de votre dossier.",
      icon: "🔍",
      color: "bg-primary/10 text-primary border-primary"
    },
    {
      number: "3",
      title: "Médiation professionnelle",
      description: "Nous engageons une négociation structurée avec votre compagnie d'assurance pour défendre vos droits.",
      icon: "🤝",
      color: "bg-gold/20 text-gold border-gold"
    },
    {
      number: "4",
      title: "Résolution & indemnisation",
      description: "Recevez une décision définitive et obtenez votre indemnisation dans les meilleurs délais.",
      icon: "✅",
      color: "bg-dark/10 text-dark border-dark"
    }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Notre méthodologie en 4 étapes
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto leading-relaxed">
            Un parcours transparent et sécurisé pour défendre efficacement vos intérêts d'assuré.
          </p>
        </div>

        {/* Étapes du processus - MODIFIÉ pour hauteurs uniformes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group h-full">
              {/* Connecteur entre les étapes */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-awlaGreen/20 transform translate-x-4 z-0">
                  <div className="h-full bg-awlaGreen w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              )}

              {/* Carte d'étape - MODIFIÉE avec flexbox pour hauteur uniforme */}
              <div className={`relative z-10 bg-white border-2 ${step.color} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col`}>
                {/* Numéro d'étape */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg border-2 flex-shrink-0`}>
                  <span>{step.number}</span>
                </div>
                
                {/* Icône */}
                <div className="text-4xl mb-4 flex-shrink-0">{step.icon}</div>
                
                {/* Contenu - utilise flex-1 pour occuper l'espace restant */}
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-awlaGreen text-dark font-semibold rounded-xl hover:bg-dark hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Commencer ma réclamation
          </button>
        </div>
      </div>
    </section>
  );
}
