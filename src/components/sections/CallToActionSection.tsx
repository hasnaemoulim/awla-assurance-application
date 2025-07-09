import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-awlaGreen via-primary to-dark relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          {/* Badge */}
          

          {/* Titre principal */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Optimisez vos indemnisations d'assurance
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Rejoignez les milliers de clients qui ont récupéré ce qui leur était dû grâce à notre plateforme.
            <strong className="text-gold"> Sans frais initiaux.</strong>
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/reclamation">
              <button className="group px-8 py-4 bg-white text-awlaGreen font-semibold rounded-xl hover:bg-awlaGreen hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                <span>Commencer maintenant</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-awlaGreen hover:text-white hover:border-awlaGreen transition-all duration-300 backdrop-blur-sm">
                Parler à un expert
              </button>
            </Link>
          </div>

          {/* Garanties/Promesses */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
          </div>
        </div>
      </div>
    </section>
  );
}
