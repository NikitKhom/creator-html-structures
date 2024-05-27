import { PropTypes } from 'prop-types';

function ButtonDemo({ values }) {
    const {
        boxShadowY,
        boxShadowX,
        blurRadius,
        spreadRadius,
        textColor,
        buttonColor, 
        borderColor,
        shadowColor,
        className,
        title,
        fontSize,
        fontFamily,
        verticalPadding,
        horizontalPadding,
        borderSize,
        borderRadius,
        isBold,
        isItalic
    } = values;

    return (
        <input
        type="button"
        className={className}
        style={{
            width: `fit-content`,
            height: `fit-content`,
            fontSize: `${fontSize}px`,
            fontFamily: fontFamily,
            color: textColor,
            backgroundColor: buttonColor,
            fontWeight: `${isBold ? "900": "400"}`,
            fontStyle: `${isItalic ? "italic": "normal"}`,
            padding: `${verticalPadding}px ${horizontalPadding}px`,
            border: `${borderSize}px solid ${borderColor}`,
            borderRadius: `${borderRadius}px`,
            boxShadow: `${boxShadowY}px ${boxShadowX}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`,
        }}
        value={title}
        />

    )
}

ButtonDemo.propTypes = {
    values: PropTypes.object.isRequired,
}

export default ButtonDemo;