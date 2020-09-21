import React, {useState} from 'react';
import remoteDate from "./bd/data.json";
// import Container from "./components/interface/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

function App() {


    console.log(remoteDate);

    return (
        <>
            <div className="row m-5">
                <Button >{"Show in Line"}</Button>
            </div>
            <div className="row m-1">
                {
                    "render component"
                }
            </div>
        </>
    );
}

export default App;
