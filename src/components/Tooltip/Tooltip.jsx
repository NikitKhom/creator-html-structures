import PropTypes from 'prop-types'
import { useState } from 'react';
import './Tooltip.css';

function Tooltip({ text, children }) {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="tooltip"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <div className="tooltip__text">{text}</div>}
        </div>
    );
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Tooltip;