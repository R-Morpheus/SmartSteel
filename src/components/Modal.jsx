import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    // Закрытие модалки при клике вне её области
    const handleClickOutside = (event) => {
        if (event.target.id === 'modal-background') {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div id="modal-background" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white p-8 rounded-md shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                <button onClick={onClose} className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl font-bold">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
