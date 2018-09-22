import React, {Component} from 'react';
import PropTypes from "prop-types";
import {VegaLiteSpecContext} from "./VegaLite";
import SpecUpdater from "./spec/SpecUpdater";

class X extends Component {
    get encoding() {
        return {
            encoding: {
                x: {
                    type: this.props.type,
                    field: this.props.field
                }
            }
        };
    }

    render() {
        return <VegaLiteSpecContext.Consumer>
            {({updateSpec}) => (
                <SpecUpdater
                    chunk={this.encoding}
                    updateSpec={updateSpec}
                />)
            }
        </VegaLiteSpecContext.Consumer>;
    }
}

X.propTypes = {
    filed: PropTypes.string,
    type: PropTypes.string
};


export default X;
