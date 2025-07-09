"use client";
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface ClaimIntroProps {
  onStartClaim: () => void;
}

export default function ClaimIntro({ onStartClaim }: ClaimIntroProps) {
  const benefits = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Protection garantie",
      description: "Défense de vos droits par nos experts"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Processus rapide",
      description: "Réponse sous 48h maximum"
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: "Sans engagement",
      description: "Aucun frais si pas de résultat"
    }
  ];

  const stats = [
    { number: "85%", label: "Taux de succès" },
    { number: "2-4", label: "Semaines moyennes" },
    { number: "10K+", label: "Clients satisfaits" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Fond décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-awlaGreen/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-awlaGreen/10 border border-awlaGreen rounded-full">
              <span className="text-awlaGreen text-sm font-semibold">🚀 Réclamation simplifiée</span>
            </div>

            {/* Titre principal */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight">
                Récupérez ce qui vous{' '}
                <span className="bg-gradient-to-r from-awlaGreen to-primary bg-clip-text text-transparent">
                  appartient
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral leading-relaxed">
                Soumettez votre réclamation en quelques minutes. 
                Nos experts s'occupent du reste pour maximiser vos chances de succès.
              </p>
            </div>

            {/* Avantages */}
            <div className="grid md:grid-cols-3 gap-6 py-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-16 h-16 bg-awlaGreen/10 rounded-full flex items-center justify-center mx-auto text-awlaGreen">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark">{benefit.title}</h3>
                  <p className="text-neutral text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Bouton principal */}
            <div className="pt-4">
              <button
                onClick={onStartClaim}
                className="group relative overflow-hidden px-12 py-6 bg-awlaGreen text-dark font-bold text-lg rounded-2xl hover:bg-dark hover:text-white transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  Commencer ma réclamation
                  <ArrowRightIcon className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Statistiques et témoignage */}
          <div className="space-y-8">
            {/* Statistiques */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-awlaGreen/20 shadow-xl">
              <h3 className="text-2xl font-bold text-dark mb-6 text-center">Nos résultats</h3>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-awlaGreen mb-2">{stat.number}</div>
                    <div className="text-sm text-neutral">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-awlaGreen/20 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-awlaGreen/10 rounded-full flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg text-dark italic mb-4">
                    "Grâce à Awla Assurances, j'ai récupéré 3 200€ en seulement 3 semaines. Le processus était simple et transparent."
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-neutral">- Mohammed K., Chef d'entreprise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
