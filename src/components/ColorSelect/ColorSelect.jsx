import { PropTypes } from 'prop-types';
import Tooltip from '../Tooltip/Tooltip';

function ColorSelect({ colorsInfo, onChange }) {
    return (
        
        <div className="color-select">
            {
                colorsInfo.map(element => {
                    if (element.isVisible) 
                    return (
                    <div
                    className='color-select__wrapper'
                    key={element.name}
                    >    
                        <Tooltip
                        text={element.title}
                        >
                            <input
                            className="color-select__input"
                            type="color"
                            name={element.name}
                            onChange={onChange}
                            value={element.value}
                            />
                        </Tooltip>
                    </div>
                    )
                })
            }
            
            
            

        </div>   
        
    )
}

ColorSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    colorsInfo: PropTypes.array.isRequired,
}

export default ColorSelect;