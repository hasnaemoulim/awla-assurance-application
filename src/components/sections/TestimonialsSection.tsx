"use client";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Sarah L.",
      role: "Particulier",
      content: "Après 3 mois de blocage avec mon assureur, Awla Assurances a réussi à débloquer ma situation et j'ai récupéré 2 500€ en seulement 15 jours !",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Mohammed K.",
      role: "Chef d'entreprise", 
      content: "Le processus était simple et transparent. J'ai pu comprendre et suivre chaque étape de ma réclamation grâce à leur plateforme intuitive.",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "Julie M.",
      role: "Retraitée",
      content: "Grâce à l'expertise d'Awla Assurances, j'ai obtenu une indemnisation que je n'aurais jamais réussi à négocier seule. Service professionnel et efficace.",
      rating: 5,
      image: "👵"
    }
  ]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5,
    image: "🙂"
  });

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTestimonials([
      ...testimonials,
      {
        name: form.name || "Anonyme",
        role: form.role || "Client",
        content: form.content,
        rating: form.rating,
        image: form.image || "🙂"
      }
    ]);
    setShowForm(false);
    setForm({ name: "", role: "", content: "", rating: 5, image: "🙂" });
    setCurrentTestimonial(testimonials.length); // afficher l'avis ajouté
  };

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Avis de nos clients
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto leading-relaxed">
            Découvrez comment notre expertise a permis à nos clients de défendre efficacement leurs droits.
          </p>
        </div>

        {/* Bouton pour afficher le formulaire */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowForm((v) => !v)}
            className="px-6 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {showForm ? "Annuler" : "Ajouter un avis"}
          </button>
        </div>

        {/* Formulaire d'ajout d'avis */}
        {showForm && (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-xl p-8 mb-12 shadow-lg border border-awlaGreen/20 space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-dark font-semibold mb-1">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="w-full border border-awlaGreen/20 rounded-md px-4 py-2 focus:border-awlaGreen outline-none"
                  placeholder="Votre nom"
                />
              </div>
              <div className="flex-1">
                <label className="block text-dark font-semibold mb-1">Statut</label>
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onChange={handleInputChange}
                  className="w-full border border-awlaGreen/20 rounded-md px-4 py-2 focus:border-awlaGreen outline-none"
                  placeholder="Ex: Particulier, Entreprise..."
                />
              </div>
            </div>
            <div>
              <label className="block text-dark font-semibold mb-1">Votre avis</label>
              <textarea
                name="content"
                value={form.content}
                onChange={handleInputChange}
                className="w-full border border-awlaGreen/20 rounded-md px-4 py-2 focus:border-awlaGreen outline-none"
                placeholder="Votre expérience avec Awla Assurances"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-dark font-semibold mb-1">Note</label>
              <div className="flex gap-2">
                {[1,2,3,4,5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => handleRatingChange(star)}
                    className={star <= form.rating ? "text-gold text-2xl" : "text-neutral text-2xl"}
                    aria-label={`Évaluer ${star} étoile${star > 1 ? "s" : ""}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-dark font-semibold mb-1">Icône (optionnelle)</label>
              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleInputChange}
                className="w-16 border border-awlaGreen/20 rounded-md px-4 py-2 focus:border-awlaGreen outline-none text-center"
                placeholder="🙂"
                maxLength={2}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Envoyer l'avis
              </button>
            </div>
          </form>
        )}

        {/* Témoignages */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="flex justify-center md:justify-end mb-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-neutral hover:text-awlaGreen border border-awlaGreen/30 transition-all"
              aria-label="Témoignage précédent"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-neutral hover:text-awlaGreen border border-awlaGreen/30 transition-all"
              aria-label="Témoignage suivant"
            >
              →
            </button>
          </div>

          {/* Carte de témoignage */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-awlaGreen/10 relative overflow-hidden">
            {/* Citation en arrière-plan */}
            <div className="absolute top-4 left-4 text-6xl text-light font-serif select-none pointer-events-none">“</div>
            <div className="relative z-10">
              {/* Étoiles */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-gold text-2xl">★</span>
                ))}
              </div>
              {/* Contenu du témoignage */}
              <blockquote className="text-lg md:text-xl text-dark leading-relaxed text-center mb-8 italic">
                {testimonials[currentTestimonial].content}
              </blockquote>
              {/* Informations de l'auteur */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-awlaGreen/10 rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-dark text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-neutral">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-awlaGreen' : 'bg-light border border-awlaGreen/30'
                }`}
                aria-label={`Afficher le témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistiques sous les témoignages */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-awlaGreen mb-2">4.8/5</div>
            <div className="text-neutral">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
            <div className="text-neutral">Avis clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">98%</div>
            <div className="text-neutral">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </section>
  );
}
