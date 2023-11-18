import PropTypes from 'prop-types';

export const Footer = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}

Footer.propTypes = {
    exercises1: PropTypes.number.isRequired,
    exercises2: PropTypes.number.isRequired,
    exercises3: PropTypes.number.isRequired,
}