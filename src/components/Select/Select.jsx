import { PropTypes } from 'prop-types';

function Select({name, onChange, defaultValue, options}) {
    return (
        <select
        className="select"
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        >
            {
                options.forEach(option => {
                    <option value={option}>{option}</option>
                })
            }
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="TimesNewRoman">TimesNewRoman</option>
            <option value="Impact">Impact</option>
        </select>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default Select;