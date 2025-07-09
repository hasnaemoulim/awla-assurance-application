import Image from 'next/image';
import Card from '../ui/Card';

const features = [
  {
    title: 'Protection des droits',
    description: 'Nous veillons à ce que vos droits soient respectés et que vous obteniez ce qui vous revient de droit.',
    icon: '/images/droit.png',
    color: 'bg-awlaGreen/20', // Vert clair en fond d’icône
    iconColor: 'text-awlaGreen'
  },
  {
    title: 'Processus simplifié',
    description: 'Une interface intuitive et un processus guidé étape par étape pour faciliter vos démarches.',
    icon: '/images/simplifie.png',
    color: 'bg-primary/10', // Bleu foncé très clair
    iconColor: 'text-primary'
  },
  {
    title: 'Suivi en temps réel',
    description: 'Suivez l\'avancement de votre réclamation à tout moment grâce à notre système de notifications.',
    icon: '/images/a-lheure.png',
    color: 'bg-gold/20', // Or très clair
    iconColor: 'text-gold'
  },
  {
    title: 'Sans inscription',
    description: 'Commencez votre réclamation immédiatement, sans avoir besoin de créer un compte au préalable.',
    icon: '/images/contrat.png',
    color: 'bg-dark/10', // Noir profond très clair
    iconColor: 'text-dark'
  }
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Nos engagements pour votre sérénité
          </h2>
          <p className="text-lg text-neutral max-w-3xl mx-auto">
            Awla Assurances s’appuie sur une expertise reconnue pour garantir la défense de vos intérêts à chaque étape de votre parcours.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center bg-white border border-awlaGreen/10 shadow-md hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className={feature.iconColor}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
