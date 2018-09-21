import React, {Component} from 'react';
import VegaLite from "./VegaLite";
import Data from "./Data";

const data = [
    {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
    {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
    {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
];

class App extends Component {
    render() {
        return (
            <VegaLite>
                <Data values={data}/>
            </VegaLite>
        );
    }
}

export default App;
