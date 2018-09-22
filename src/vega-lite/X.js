import React, {Component} from 'react';
import PropTypes from "prop-types";
import {VegaLiteSpecContext} from "./VegaLite";
import SpecMerge from "./spec/SpecMerge";

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
            {({merge}) => (
                <SpecMerge
                    chunk={this.encoding}
                    merge={merge}
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
