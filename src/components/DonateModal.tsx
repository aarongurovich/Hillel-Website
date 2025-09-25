import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface DonateModalProps {
  show: boolean;
  onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ show, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-900">Donate to Texas Tech Hillel</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-6">
            Your support helps us provide meaningful Jewish experiences for students at Texas Tech University. 
            We accept donations through Zelle, which is a fast, safe, and easy way to send money.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">How to Donate via Zelle</h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Open your banking app that offers Zelle</li>
              <li>Select "Send Money with Zelle"</li>
              <li>Add a recipient with the phone number: <span className="font-semibold">925-434-1236</span></li>
              <li>Enter the amount you wish to donate</li>
              <li>In the memo field, please specify "Donation" and your name</li>
              <li>Review the information and send your donation</li>
            </ol>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Donation Benefits</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Support Jewish life on campus</li>
              <li>Help provide Shabbat dinners and holiday celebrations</li>
              <li>Fund educational and cultural programs</li>
              <li>Create opportunities for students to connect with their heritage</li>
              <li>Enable community service and social action initiatives</li>
            </ul>
          </div>
          
          <p className="text-gray-700 mb-6">
            Texas Tech Hillel is a 501(c)(3) organization, and your donation may be tax-deductible. 
            A receipt will be sent to the email associated with your Zelle account.
          </p>
          
          <p className="text-gray-700 mb-8">
            If you have any questions about donating, please contact us at <a href="mailto:aargurov@ttu.edu" className="text-red-700 hover:underline">aargurov@ttu.edu</a>.
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};