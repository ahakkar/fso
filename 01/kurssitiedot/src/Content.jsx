import PropTypes from 'prop-types';
import { Part } from './Part';

export const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} />
            <Part part={props.part2} />
            <Part part={props.part3} />
        </div>
    )
}

Content.propTypes = {
    part1: PropTypes.object.isRequired,
    part2: PropTypes.object.isRequired,
    part3: PropTypes.object.isRequired,
}