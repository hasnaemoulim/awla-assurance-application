// src/components/sections/StatsSection.tsx
const stats = [
  { value: '85%', label: 'Taux de succès', description: 'Réclamations résolues avec succès', color: 'text-awlaGreen' },
  { value: '10K+', label: 'Réclamations traitées', description: 'Dossiers traités depuis notre création', color: 'text-primary' },
  { value: '15+', label: 'Compagnies partenaires', description: 'Assureurs avec qui nous collaborons', color: 'text-gold' },
  { value: '3.5M MAD', label: 'Indemnisations obtenues', description: 'Montant total récupéré pour nos clients', color: 'text-dark' }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-awlaGreen via-primary to-dark relative overflow-hidden">
      {/* Décor de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="space-y-2 bg-white/90 rounded-xl shadow-lg p-8 border-2 border-awlaGreen/10 hover:border-awlaGreen transition-all duration-300"
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-dark">
                {stat.label}
              </div>
              <div className="text-sm text-neutral opacity-80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
