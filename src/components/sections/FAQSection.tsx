"use client";
import { useState } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function FAQSection() {
  const faqs = [
    {
      question: "Dois-je créer un compte pour soumettre une réclamation ?",
      answer: "Non, vous pouvez commencer votre réclamation sans créer de compte. Cependant, créer un compte vous permettra de suivre l'évolution de votre dossier plus facilement et d'accéder à votre historique."
    },
    {
      question: "Combien coûte votre service ?",
      answer: "Notre service de base est gratuit. Nous ne prenons une commission que si nous réussissons à vous faire obtenir une indemnisation. Aucun frais n'est demandé en cas d'échec."
    },
    {
      question: "Combien de temps faut-il pour traiter une réclamation ?",
      answer: "Le délai moyen est de 2 à 4 semaines selon la complexité du dossier. Les cas simples peuvent être résolus en quelques jours, tandis que les dossiers complexes peuvent prendre jusqu'à 2 mois."
    },
    {
      question: "Quels types d'assurances sont couverts par votre service ?",
      answer: "Nous traitons tous types d'assurances : auto, habitation, santé, vie, professionnelle, etc. Notre équipe d'experts s'adapte à chaque type de contrat et de litige."
    },
    {
      question: "Que se passe-t-il si ma réclamation est refusée ?",
      answer: "Si votre réclamation initiale est refusée, nous analysons les possibilités de recours (médiation, justice, etc.) et vous accompagnons dans ces démarches si elles ont des chances de succès."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Formulaire soumis:", contactForm);
    alert("Votre message a été envoyé avec succès ! Notre équipe vous répondra dans les plus brefs délais.");
    setContactForm({ name: "", email: "", subject: "", message: "" });
    setShowContactForm(false);
  };

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-awlaGreen/10 border border-awlaGreen rounded-full mb-6">
            <span className="text-awlaGreen text-sm font-semibold">❓ Informations pratiques</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Questions fréquemment posées
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto leading-relaxed">
            Retrouvez ici les réponses aux questions les plus courantes sur nos services et notre accompagnement.
          </p>
        </div>

        {/* Liste des FAQ */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-awlaGreen/20 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-awlaGreen/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-dark pr-4">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-6 h-6 text-awlaGreen flex-shrink-0 transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-neutral leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-neutral mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button 
            onClick={() => setShowContactForm(true)}
            className="px-8 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Nous contacter
          </button>
        </div>

        {/* Formulaire de contact en overlay */}
        {showContactForm && (
          <div className="fixed inset-0 bg-dark/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              {/* En-tête du formulaire */}
              <div className="flex items-center justify-between p-6 border-b border-light">
                <div>
                  <h3 className="text-2xl font-bold text-dark">Contactez notre équipe</h3>
                  <p className="text-neutral mt-1">Nous vous répondrons dans les plus brefs délais</p>
                </div>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="p-2 hover:bg-light rounded-lg transition-colors"
                  aria-label="Fermer"
                >
                  <XMarkIcon className="w-6 h-6 text-neutral" />
                </button>
              </div>

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-dark font-semibold mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="w-full border border-awlaGreen/20 rounded-lg px-4 py-3 focus:border-awlaGreen focus:ring-2 focus:ring-awlaGreen/20 outline-none transition-all"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-dark font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="w-full border border-awlaGreen/20 rounded-lg px-4 py-3 focus:border-awlaGreen focus:ring-2 focus:ring-awlaGreen/20 outline-none transition-all"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    className="w-full border border-awlaGreen/20 rounded-lg px-4 py-3 focus:border-awlaGreen focus:ring-2 focus:ring-awlaGreen/20 outline-none transition-all"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="question-generale">Question générale</option>
                    <option value="nouvelle-reclamation">Nouvelle réclamation</option>
                    <option value="suivi-dossier">Suivi de dossier</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="support-technique">Support technique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border border-awlaGreen/20 rounded-lg px-4 py-3 focus:border-awlaGreen focus:ring-2 focus:ring-awlaGreen/20 outline-none transition-all resize-none"
                    placeholder="Décrivez votre question ou votre demande..."
                    required
                  />
                </div>

                {/* Informations de contact */}
                <div className="bg-light/50 rounded-lg p-4">
                  <h4 className="text-dark font-semibold mb-3">Autres moyens de nous contacter</h4>
                  <div className="space-y-2 text-sm text-neutral">
                    <div className="flex items-center gap-2">
                      <span>📞</span>
                      <span>+212 5XX XX XX XX</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📧</span>
                      <span>contact@awla-assurances.ma</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>⏰</span>
                      <span>Lun-Ven : 9h-18h | Sam : 9h-12h</span>
                    </div>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-6 py-3 border-2 border-neutral/20 text-neutral font-semibold rounded-lg hover:bg-light transition-all duration-300"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
