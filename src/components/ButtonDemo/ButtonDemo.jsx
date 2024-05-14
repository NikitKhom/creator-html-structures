import { PropTypes } from 'prop-types';

function ButtonDemo({ title, className, style, boxShadowStyle }) {
    const {
        boxShadowY,
        boxShadowX,
        blurRadius,
        spreadRadius
    } = boxShadowStyle;
    return (
        <input
        type="button"
        className={className}
        style={{
            fontSize: `${style.fontSize}px`,
            fontFamily: style.fontFamily,
            fontWeight: `${style.isBold ? "900": "400"}`,
            fontStyle: `${style.isItalic ? "italic": "normal"}`,
            padding: `${style.verticalPadding}px ${style.horizontalPadding}px`,
            border: `${style.borderSize}px solid black`,
            borderRadius: `${style.borderRadius}px`,
            boxShadow: `${boxShadowY}px ${boxShadowX}px ${blurRadius}px ${spreadRadius}px black`,
        }}
        value={title}
        />

    )
}

ButtonDemo.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    boxShadowStyle: PropTypes.object,
}

export default ButtonDemo;