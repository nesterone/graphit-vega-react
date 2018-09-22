import React, {Component} from 'react';
import PropTypes from "prop-types";
import SpecMerge from "./spec/SpecMerge";
import {VegaLiteSpecContext} from "./VegaLite";

class Mark extends Component {
    get mark () {
        return {mark: this.props.type};
    }

    render() {
        return <VegaLiteSpecContext.Consumer>
            { ({merge}) => (
                <SpecMerge
                    chunk={this.mark}
                    merge={merge}
                />)
            }
        </VegaLiteSpecContext.Consumer>;
    }
}

Mark.propTypes = {
    type: PropTypes.string
};

export default Mark;
