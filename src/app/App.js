import React, {Component} from 'react';
import SimpleBarChart from "./SimpleBarChart";

const data = [
    {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
    {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
    {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
];

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <SimpleBarChart data={data}/>
                </div>
            </div>
        );
    }
}

export default App;
