import PropTypes from 'prop-types'

export const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}

Part.propTypes = {
    part: PropTypes.object.isRequired,
}