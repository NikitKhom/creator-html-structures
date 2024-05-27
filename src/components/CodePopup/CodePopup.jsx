import Popup from '../Popup/Popup';
import CodeBlock from '../CodeBlock/CodeBlock';
import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';

function CodePopup({ isOpen, onClose, html, css }) {

    const [ isCopiedHTML, setIsCopiedHTML ] = useState(false);
    const [ isCopiedCSS, setIsCopiedCSS ] = useState(false);

    useEffect(() => {
        setIsCopiedHTML(false);
        setIsCopiedCSS(false);
    }, [isOpen, onClose]);

    function handleCopyHTML() {
        setIsCopiedHTML(true);
        setIsCopiedCSS(false);
    }

    function handleCopyCSS() {
        setIsCopiedHTML(false);
        setIsCopiedCSS(true);
    }
    
    return (
        <Popup
        isOpen={isOpen}
        onClose={onClose}
        >
            <h2 className='codepopup__title'>Just Copy ;]</h2>
            <CodeBlock
            isCopied={isCopiedHTML}
            onCopy={handleCopyHTML}
            width={400}
            title='HTML'
            code={html}
            language='html'
            />
            <CodeBlock
            isCopied={isCopiedCSS}
            onCopy={handleCopyCSS}
            width={400}
            title='CSS'
            code={css}
            language='css'
            />
        </Popup>
    )
}

CodePopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    html: PropTypes.string.isRequired,
    css: PropTypes.string.isRequired,
};

export default CodePopup;