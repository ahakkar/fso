import PropTypes from 'prop-types';
import { Part } from './Part';

export const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(
                (part, index) => (<Part key={index} part={part} />)
            )}
        </div>
    )
}

Content.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            exercises: PropTypes.number.isRequired,
        })
    ).isRequired,
}