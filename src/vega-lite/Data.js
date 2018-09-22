import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {VegaLiteSpecContext} from "./VegaLite";
import VegaLiteContextUpdated from "./VegaLiteContextUpdated";

class Data extends Component {

    get chunk () {
        return {data: {values: this.props.values}};
    }

    componentDidMount() {
        console.log('got data part', this.chunk);
    }

    render() {
        return <VegaLiteSpecContext.Consumer>
            { ({updateSpec}) => (<VegaLiteContextUpdated chunk={this.chunk} updateSpec={updateSpec} />)}
        </VegaLiteSpecContext.Consumer>;
    }
}

Data.propTypes = {
    values: PropTypes.array
};

export default Data;
