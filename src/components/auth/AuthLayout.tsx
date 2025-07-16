import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-awlaGreen/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo et branding */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-awlaGreen rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <h1 className="text-2xl font-bold text-dark mb-2">{title}</h1>
          <p className="text-neutral">{subtitle}</p>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-awlaGreen/10">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-neutral">
          <p>© 2024 Awla Assurances. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}

