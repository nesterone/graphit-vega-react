import React, {Component} from 'react';
import PropTypes from "prop-types";
import SpecUpdater from "./spec/SpecUpdater";
import {VegaLiteSpecContext} from "./VegaLite";

class Mark extends Component {
    get mark () {
        return {mark: this.props.type};
    }

    render() {
        return <VegaLiteSpecContext.Consumer>
            { ({updateSpec}) => (
                <SpecUpdater
                    chunk={this.mark}
                    updateSpec={updateSpec}
                />)
            }
        </VegaLiteSpecContext.Consumer>;
    }
}

Mark.propTypes = {
    type: PropTypes.string
};

export default Mark;
