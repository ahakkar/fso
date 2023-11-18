import PropTypes from 'prop-types';

export const Footer = (props) => {
    return (
        <div>
            <p>Number of exercises {
                props.part1.exercises + 
                props.part2.exercises +
                props.part1.exercises}
            </p>
        </div>
    )
}

Footer.propTypes = {
    part1: PropTypes.object.isRequired,
    part2: PropTypes.object.isRequired,
    part3: PropTypes.object.isRequired,
}
