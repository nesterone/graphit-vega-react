import React, {Component} from 'react';
import PropTypes from "prop-types";
import {VegaLiteSpecContext} from "./VegaLite";
import SpecMerge from "./spec/SpecMerge";

class Y extends Component {
    get encoding() {
        return {
            encoding: {
                y: {
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

Y.propTypes = {
    field: PropTypes.string,
    type: PropTypes.string
};


export default Y;
