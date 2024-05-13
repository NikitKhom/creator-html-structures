import { PropTypes } from 'prop-types';

function Controller({ title, name, onChange, range, value }) {

    return (
        <>
            <label className="controller__label" htmlFor={name} >
                {`${title}:`} <span className="controller__value" >{value}px</span>
            </label>
            <input
            className="controller__range"
            id={name}
            type="range"
            name={name}
            onChange={onChange}
            defaultValue={value}
            max={range.max}
            min={range.min}
            />
        </>
    )
}

Controller.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    range: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    
}

export default Controller;