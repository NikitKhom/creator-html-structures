import CodePopup from '../CodePopup/CodePopup';
import { PropTypes } from 'prop-types';

function ButtonCodePopup({  isOpen, onClose, values }) {
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
        isItalic,
        type
    } = values;

    let html = '';
    if (type === 'link') {
        html = `<a class="${className}" href="#">${title}</a>`;
    } else {
        html = `<button class="${className}" type="${type}">${title}</button>`;
    }

    let css = 
    `.${className} {
        font-size: ${fontSize}px;
        font-family: ${fontFamily};
        ${textColor !== '#000000'? `color: ${textColor};`: ''}
        background-color: ${buttonColor};
        ${borderSize !== '0' ? `border: ${borderSize}px solid ${borderColor};`: ''}
        ${verticalPadding !== '0' || horizontalPadding !== '0'?`padding: ${verticalPadding}px ${horizontalPadding}px;`: ''}
        border-radius: ${borderRadius}px;
        ${boxShadowX !== 0 || boxShadowY !== 0 || blurRadius !== 0 || spreadRadius !== 0?`box-shadow: ${boxShadowX}px ${boxShadowY}px ${blurRadius}px ${spreadRadius}px ${shadowColor};`: ''}
        ${isBold? `font-weight: 900;`: ''}
        ${isItalic? `font-style: italic`: ''}
    }`;

    css = css.split('\n').filter(line => line.trim() !== '').join('\n');

    return (
        <CodePopup
        isOpen={isOpen}
        onClose={onClose}
        html={html}
        css={css}
        />
    )
}

ButtonCodePopup.propTypes = {
    values: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default ButtonCodePopup;