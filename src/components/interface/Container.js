import React from "react";
import View from "./View";

const Container = (props) => {

    const max= props.values.reduce((m,x)=> m.value>x.value ? m:x);
    const min= props.values.reduce((m,x)=> m.value<x.value ? m:x);

    const values = props.values.map(v=> v.value);
    const avg = values.reduce((a, b) => (a + b)) / values.length;

    return (
        <View
            name={props.interfaceId}
            min={min}
            max={max}
            avg={avg}
        />
    );
}

export default Container;