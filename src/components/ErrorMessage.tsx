import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 animate-slide-up">
      <div className="flex items-center gap-3">
        <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
        <div>
          <h3 className="text-red-800 dark:text-red-200 font-semibold">Error</h3>
          <p className="text-red-700 dark:text-red-300">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;