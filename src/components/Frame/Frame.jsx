import PropTypes from 'prop-types';

function Frame({
    width = 300,
    height=200, 
    option=false,
    children}) {

    const frameSize = {
        minWidth: `${width}px`,
        minHeight: `${height}px`,
        justifyContent: `${option ? "space-between": "center"}`
    };

    return (
        <div 
        className="frame"   
        style={frameSize}
        >
            {children}
        </div>
    )
}

Frame.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    option: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default Frame;