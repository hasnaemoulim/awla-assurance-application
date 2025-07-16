"use client";
import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-awlaGreen/5 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <RegisterForm />
      </div>
    </div>
  );
}
