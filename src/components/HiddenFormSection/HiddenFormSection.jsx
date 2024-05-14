import FormSection from '../FormSection/FormSection';
import { PropTypes } from 'prop-types';

function HiddenFormSection({ title, children, onClick, isVisible, rowsCount = 2 }) {
    return (
        <>
            <button
            className={`hidden-from-section__btn ${!isVisible ? "hidden-from-section__btn_active": ""}`}
            onClick={onClick}
            type="button"
            >
                {title}
            </button>
            {
            <FormSection
            rowsCount={rowsCount}
            isVisible={isVisible}
            >
                {children}
            </FormSection>
            }
            
        </>
    )
}

HiddenFormSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    rowsCount: PropTypes.number
}

export default HiddenFormSection;