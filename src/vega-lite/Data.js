import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {VegaLiteSpecContext} from "./VegaLite";
import SpecMerge from "./spec/SpecMerge";

class Data extends Component {
    get data () {
        return {data: {values: this.props.values}};
    }

    render() {
        return <VegaLiteSpecContext.Consumer>
            { ({merge}) => (
                <SpecMerge
                    chunk={this.data}
                    merge={merge}
                />)
            }
        </VegaLiteSpecContext.Consumer>;
    }
}

Data.propTypes = {
    values: PropTypes.array
};

export default Data;
