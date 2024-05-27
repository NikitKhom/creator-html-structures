import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

function Popup({ isOpen, onClose, children }) {

    useEffect(() => {
        if (!isOpen) return;
        const handleEscapeClose = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscapeClose);
        return () => {
            document.removeEventListener('keydown', handleEscapeClose);
        };
    }, [isOpen, onClose]);

    const handleOverlayClose = (e) => {
        if (e.target === e.currentTarget && isOpen) {
            onClose();
        }
    };

    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onMouseDown={handleOverlayClose}>
            <div className='popup__content'>
                {children}
                <button className='popup__close-button' type='button' onClick={onClose}/> 
            </div>
        </div>
    )
}

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Popup;