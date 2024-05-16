import { PropTypes } from 'prop-types';

function Radio({
    title,
    value,
    name,
    onChange,
    isChecked,
}) {
    return (
        <div>
            <input
            className="radio__input"
            type="radio"
            id={value}
            name={name}
            value={value}
            onChange={onChange}
            checked={isChecked == value}
            />
            <label
            className="radio__label"
            htmlFor={value}
            >
                {title}
            </label>
        </div>

    )
}

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isChecked: PropTypes.string.isRequired
}

export default Radio;