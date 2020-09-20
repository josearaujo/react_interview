import React from "react";
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';

const View = ({min, max, avg, name}) => {

    return (
        <Card>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>Min</Card.Title>
                <Card.Text><b>Value:</b>value<b> Date:</b>date</Card.Text>
            </Card.Body>
        </Card>
    );
}

View.propTypes = {

};

View.defaultProps = {
    name: "Name",
    min: {},
    max: {},
    avg: 0
};

export default View;

