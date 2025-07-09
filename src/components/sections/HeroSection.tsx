import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-light pt-20">
      {/* Motif de fond décoratif */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-awlaGreen rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-dark rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Contenu textuel */}
          <div className="space-y-8 animate-fade-in">
            {/* Titre principal */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark leading-tight">
                Défendez vos <span className="bg-gradient-to-r from-awlaGreen to-dark bg-clip-text text-transparent">droits</span> en toute confiance
              </h1>
              <p className="text-xl md:text-2xl text-neutral leading-relaxed max-w-2xl">
                Notre plateforme vous accompagne à chaque étape de vos réclamations d'assurance, 
                avec un <strong className="text-awlaGreen">taux de succès de 85%</strong> et sans frais initiaux.
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/reclamation">
                <button className="group w-full sm:w-auto px-8 py-4 bg-awlaGreen text-dark font-semibold rounded-xl hover:bg-dark hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <span>Démarrer gratuitement</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              <Link href="/suivi">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-awlaGreen font-semibold border-2 border-awlaGreen rounded-xl hover:bg-awlaGreen hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Suivre ma réclamation
                </button>
              </Link>
            </div>

            {/* Statistiques */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-awlaGreen/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-awlaGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-dark">85%</div>
                  <div className="text-sm text-neutral">Taux de succès</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-dark">10K+</div>
                  <div className="text-sm text-neutral">Clients satisfaits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image principale - MODIFIÉE */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Option 1: Image avec cadre blanc */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-awlaGreen/20">
                <Image
                  src="/images/hero1.png" // Remplacez par le chemin vers votre image
                  alt="Équipe Awla Assurances - Protection et confiance"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>
              
              {/* Badge flottant */}
              <div className="absolute top-4 right-4 bg-awlaGreen text-dark px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                Expert certifié
              </div>
            </div>
            
            {/* Éléments flottants décoratifs */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-awlaGreen opacity-20 rounded-2xl rotate-12 animate-bounce"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold opacity-20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
