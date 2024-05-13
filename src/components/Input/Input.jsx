import { PropTypes } from 'prop-types';

function Input({
    name,
    placeholder,
    onChange,
    defaultValue
}) {
    return (
        <input
        className="input"
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        />
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired
}

export default Input;