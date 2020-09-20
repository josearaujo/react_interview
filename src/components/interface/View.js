import React from "react";
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';

const View = ({min, max, avg, name}) => {

    return (
        <Card>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>Min</Card.Title>
                <Card.Text><b>Value:</b>{min.value}<b> Date:</b>{min.date}</Card.Text>
                <Card.Title>Max</Card.Title>
                <Card.Text><b>Value:</b>{max.value}<b> Date:</b>{max.date}</Card.Text>
                <Card.Title>AVG</Card.Title>
                <Card.Text><b>Value:</b>{avg.toFixed(2)}</Card.Text>
            </Card.Body>
        </Card>
    );
}

View.propTypes = {
    min: PropTypes.shape({
        value: PropTypes.number,
        date: PropTypes.string
    }),
    max: PropTypes.shape({
        value: PropTypes.number,
        date: PropTypes.string
    }),
    avg: PropTypes.number,
    name: PropTypes.string
};

View.defaultProps = {
    name: "",
    min: {},
    max: {},
    avg: 0
};

export default View;

