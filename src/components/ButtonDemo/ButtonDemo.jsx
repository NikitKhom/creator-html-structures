import { PropTypes } from 'prop-types';

function ButtonDemo({ title, className, style }) {

    return (
        <input
        type="button"
        className={className}
        style={{
            fontSize: `${style.fontSize}px`,
            fontFamily: style.fontFamily,
            fontWeight: `${style.isBold ? "900": "400"}`,
            fontStyle: `${style.isItalic ? "italic": "normal"}`
        }}
        value={title}
        />

    )
}

ButtonDemo.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
}

export default ButtonDemo;