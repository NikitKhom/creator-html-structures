import { PropTypes } from 'prop-types';

function ButtonDemo({ title, className, style, boxShadowStyle, colors }) {
    const {
        boxShadowY,
        boxShadowX,
        blurRadius,
        spreadRadius
    } = boxShadowStyle;
    const {
        textColor,
        buttonColor, 
        borderColor,
        shadowColor
    } = colors;
    return (
        <input
        type="button"
        className={className}
        style={{
            width: `fit-content`,
            height: `fit-content`,
            fontSize: `${style.fontSize}px`,
            fontFamily: style.fontFamily,
            color: textColor,
            backgroundColor: buttonColor,
            fontWeight: `${style.isBold ? "900": "400"}`,
            fontStyle: `${style.isItalic ? "italic": "normal"}`,
            padding: `${style.verticalPadding}px ${style.horizontalPadding}px`,
            border: `${style.borderSize}px solid ${borderColor}`,
            borderRadius: `${style.borderRadius}px`,
            boxShadow: `${boxShadowY}px ${boxShadowX}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`,
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
    colors: PropTypes.object,
}

export default ButtonDemo;