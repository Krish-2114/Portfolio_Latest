import { motion } from 'framer-motion';
import { FiCheckCircle, FiX, FiXCircle } from 'react-icons/fi';
import type { ToastProps } from '../types';

export function Toast({ message, type, onClose }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, x: 100 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed top-20 right-4 z-50 glass rounded-lg p-4 shadow-xl max-w-sm"
      role="alert"
    >
      <div className="flex items-center gap-3">
        {type === 'success' && (
          <FiCheckCircle className="text-2xl text-green-400 shrink-0" aria-hidden />
        )}
        {type === 'error' && (
          <FiXCircle className="text-2xl text-red-400 shrink-0" aria-hidden />
        )}
        {type === 'info' && (
          <FiCheckCircle className="text-2xl text-blue-400 shrink-0" aria-hidden />
        )}
        <p className="flex-1 text-white text-sm">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="text-white hover:text-accent transition-colors p-1"
          aria-label="Dismiss notification"
        >
          <FiX className="text-xl" />
        </button>
      </div>
    </motion.div>
  );
}
