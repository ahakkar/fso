import PropTypes from 'prop-types';

export const Footer = ({ parts }) => {
    // Sums the exercises of all parts
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <div>
            <p>Number of exercises {totalExercises}</p>
        </div>
    );
}

Footer.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.shape({
            exercises: PropTypes.number.isRequired,
        })
    ).isRequired,
}
