"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClaimForm from '@/components/forms/ClaimForm';
import ClaimIntro from '@/components/sections/ClaimIntro';

export default function ReclamationPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-awlaGreen/5">
      <AnimatePresence mode="wait">
        {!showForm ? (
          <ClaimIntro onStartClaim={() => setShowForm(true)} />
        ) : (
          <ClaimForm onBack={() => setShowForm(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
