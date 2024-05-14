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
                options.map(option => (
                    <option value={option} key={option}>{option}</option>    
                ))
            }
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