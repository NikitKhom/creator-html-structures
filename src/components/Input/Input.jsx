import { PropTypes } from 'prop-types';

function Input({
    name,
    placeholder,
    onChange,
    defaultValue,
    range = {
        max: 30,
        min: 1
    }
}) {
    return (
        <input
        className="input"
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        maxLength={range.max}
        minLength={range.min}
        />
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired,
    range: PropTypes.object
}

export default Input;