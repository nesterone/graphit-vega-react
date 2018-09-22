import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {VegaLiteSpecContext} from "./VegaLite";
import SpecUpdater from "./spec/SpecUpdater";

class Data extends Component {
    get data () {
        return {data: {values: this.props.values}};
    }

    render() {
        return <VegaLiteSpecContext.Consumer>
            { ({updateSpec}) => (
                <SpecUpdater
                    chunk={this.data}
                    updateSpec={updateSpec}
                />)
            }
        </VegaLiteSpecContext.Consumer>;
    }
}

Data.propTypes = {
    values: PropTypes.array
};

export default Data;
