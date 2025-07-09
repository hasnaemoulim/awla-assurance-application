import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  services: [
    { name: 'Soumettre une réclamation', href: '/reclamation' },
    { name: 'Suivre ma réclamation', href: '/suivi' },
    { name: 'Nos partenaires', href: '/partenaires' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Aide', href: '/aide' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'CGU', href: '/cgu' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* Logo image */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-2 border-awlaGreen">
                <Image
                  src="/images/awla.png" // Place your logo here (ex: public/images/logo.png)
                  alt="Awla Assurances Logo"
                  width={40}
                  height={40}
                  className="object-contain w-10 h-10"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-awlaGreen">Awla Assurances</div>
                <div className="text-sm text-gold">Votre partenaire de confiance</div>
              </div>
            </div>
            <p className="text-neutral leading-relaxed">
              Votre partenaire de confiance pour faire valoir vos droits et récupérer ce qui vous est dû.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-neutral rounded-full flex items-center justify-center hover:bg-awlaGreen hover:text-dark transition-colors cursor-pointer">
                <span className="text-lg">📞</span>
              </div>
              <div className="w-10 h-10 bg-neutral rounded-full flex items-center justify-center hover:bg-awlaGreen hover:text-dark transition-colors cursor-pointer">
                <span className="text-lg">📧</span>
              </div>
              <div className="w-10 h-10 bg-neutral rounded-full flex items-center justify-center hover:bg-awlaGreen hover:text-dark transition-colors cursor-pointer">
                <span className="text-lg">📍</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-awlaGreen">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral hover:text-awlaGreen transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-awlaGreen">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral hover:text-awlaGreen transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-awlaGreen">Contact</h4>
            <div className="space-y-4 text-neutral">
              <div>
                <div className="font-medium text-white">Téléphone</div>
                <div>+212 5XX XX XX XX</div>
              </div>
              <div>
                <div className="font-medium text-white">Email</div>
                <div>contact@awla-assurances.ma</div>
              </div>
              <div>
                <div className="font-medium text-white">Adresse</div>
                <div>Marrakech, Maroc</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-neutral mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral text-center md:text-left">
              &copy; 2024 Awla Assurances. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral hover:text-gold transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
