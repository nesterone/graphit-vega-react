import React, {Component} from 'react';
import VegaLite from "./vega-lite/VegaLite";
import Data from "./vega-lite/Data";
import Mark from "./vega-lite/Mark";
import Encoding from "./vega-lite/Encoding";
import X from "./vega-lite/X";
import Y from "./vega-lite/Y";

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
                <Mark type='bar'/>
                <Encoding>
                    <X field='a' type='ordinal'/>
                    <Y field='b' type='quantitative'/>
                </Encoding>
            </VegaLite>
        );
    }
}

export default App;
