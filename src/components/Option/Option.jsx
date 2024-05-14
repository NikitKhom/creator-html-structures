import { PropTypes } from 'prop-types';

function Option({ optionsInfo, onChange }) {
    return (
        <div className="option"> 
            {
                optionsInfo.map(option => (
                    <>    
                        <input
                        key={option.name}
                        className="option__checkbox"
                        type="checkbox"
                        id={option.name}
                        name={option.name}
                        onChange={onChange}
                        defaultChecked={option.defaultChecked}
                        />
                        <label htmlFor={option.name} className="option__label">
                            {option.title}
                        </label>
                    </>
                ))
            }

        </div>   
        
    )
}

Option.propTypes = {
    onChange: PropTypes.func.isRequired,
    optionsInfo: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        defaultChecked: PropTypes.bool
    })).isRequired
}

export default Option;