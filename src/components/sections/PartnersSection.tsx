import Image from 'next/image';

const partners = [
  {
    name: 'SAHAM',
    logo: '/images/saham.jpg',
    description: 'Assurance automobile et habitation'
  },
  {
    name: 'AXA',
    logo: '/images/axa1.png',
    description: 'Assurance vie et santé'
  },
  {
    name: 'Wafa Assurance',
    logo: '/images/wafa.png',
    description: 'Assurance santé et prévoyance'
  },
  {
    name: 'RMA',
    logo: '/images/RMA.png',
    description: 'Royale Marocaine d Assurance'
},
  {
    name: 'SANLAM',
    logo: '/images/sanlam.png',
    description: 'Assurance épargne retraite'
  },
  {
    name: 'ATLANTA',
    logo: '/images/ATLANTA.png',
    description: 'Assurance automobile'
  }
];

export default function PartnersSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Nos compagnies d'assurance partenaires
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto leading-relaxed">
            Nous collaborons avec les principaux acteurs du marché pour vous garantir les meilleures conditions et un accompagnement sur-mesure.
          </p>
        </div>

        {/* Grille des partenaires */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group bg-white rounded-xl p-6 border border-awlaGreen/10 shadow-md hover:shadow-xl hover:border-awlaGreen transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Logo container */}
                <div className="w-full h-16 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={120}
                    height={60}
                    className="max-w-full h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* Nom du partenaire */}
                <h3 className="font-semibold text-dark group-hover:text-awlaGreen transition-colors">
                  {partner.name}
                </h3>
                {/* Description (visible au hover) */}
                <p className="text-sm text-neutral opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistiques des partenariats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-awlaGreen/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-awlaGreen">15+</div>
              <div className="text-neutral">Compagnies partenaires</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-neutral">Taux de collaboration</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gold">24h</div>
              <div className="text-neutral">Délai moyen de réponse</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-neutral mb-6">
            Votre compagnie d'assurance ne figure pas dans la liste ?
          </p>
          <button className="px-8 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}
