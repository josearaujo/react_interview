import React, {useState} from 'react';
import remoteDate from "./bd/data.json";
import Container from "./components/interface/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

function App() {

    const [line, setLine] = useState(false);

    const classNameDiv = line ? "col-sm-12 mb-1" : "col-sm-6 mb-1";

    return (
        <>
            <div className="row m-5">
                <Button onClick={() => setLine(!line)}>{!line ? "Show in Line" : "Show in Column"}</Button>
            </div>
            <div className="row m-1">
                {
                    remoteDate.map(interfaceObject => {
                        return <div key={interfaceObject.interfaceId} className={classNameDiv}>
                            <Container {...interfaceObject}/>
                        </div>
                    })
                }
            </div>
        </>
    );
}

export default App;
