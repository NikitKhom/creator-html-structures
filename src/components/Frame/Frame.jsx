import PropTypes from 'prop-types';

function Frame({ width = 300, height=200, children}) {

    const frameSize = {
        width: `${width}px`,
        height: `${height}px`,
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
    children: PropTypes.node.isRequired,
}

export default Frame;