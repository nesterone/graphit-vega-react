import React, {Component} from 'react';
import {VegaLiteSpecContext} from "./VegaLite";
import SpecMerge from "./spec/SpecMerge";

class BaseVegaSpecChunkProvider extends Component {
    render() {
        return <VegaLiteSpecContext.Consumer>
            {({merge}) => (
                <SpecMerge
                    chunk={this.getChunk()}
                    merge={merge}
                />)
            }
        </VegaLiteSpecContext.Consumer>;
    }
}
export default BaseVegaSpecChunkProvider;
