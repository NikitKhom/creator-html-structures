import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function HomeButton({ path }) {
    return (
        <Link to={path} className="home-btn" /> 
    )
} 

HomeButton.propTypes = {
    path: PropTypes.string.isRequired
};

export default HomeButton;