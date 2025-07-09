import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  textColor?: string;
}

export default function Logo({ size = 'md', textColor = 'text-primary-500' }: LogoProps) {
  const sizes = {
    sm: { img: 'h-6 w-6', text: 'text-lg' },
    md: { img: 'h-8 w-8', text: 'text-2xl' },
    lg: { img: 'h-12 w-12', text: 'text-3xl' }
  };
  
  return (
    <Link href="/" className={`flex items-center gap-3 ${textColor} font-bold ${sizes[size].text} hover:opacity-80 transition-opacity`}>
      <Image 
        src="/images/logo.png" 
        alt="Awla Assurances Logo" 
        width={32} 
        height={32}
        className={sizes[size].img}
      />
      <span>Awla Assurances</span>
    </Link>
  );
}
