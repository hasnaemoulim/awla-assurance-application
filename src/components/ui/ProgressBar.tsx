"use client";
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-neutral mb-2">
        <span>Progression</span>
        <span>{Math.round(progress)}%</span>
      </div>
      
      <div className="w-full bg-light rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-awlaGreen to-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* Indicateurs de milestone */}
      <div className="flex justify-between mt-2">
        {[25, 50, 75, 100].map((milestone) => (
          <div
            key={milestone}
            className={`w-2 h-2 rounded-full transition-colors ${
              progress >= milestone ? 'bg-awlaGreen' : 'bg-light'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
