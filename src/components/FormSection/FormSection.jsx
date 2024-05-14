import { PropTypes } from 'prop-types';

function FormSection({ title, children, rowsCount = 2, isVisible}) {
    return (
        <>
            {title && <h2 className="form-section__title">{title}</h2>}
            <section
            className={`form-section__section ${isVisible ? "form-section__section_hidden": ""}`}
            style={{gridTemplateRows: `repeat(${rowsCount}, 1fr)`}}>
                {children}
            </section>
        </>

    )
}

FormSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    rowsCount: PropTypes.number,
    isVisible: PropTypes.bool
}

export default FormSection;