import React from 'react';
import PropTypes from 'prop-types'
import BaseVegaSpecChunkProvider from "./BaseVegaSpecChunkProvider";

class Data extends BaseVegaSpecChunkProvider {
    getChunk() {
        return {
            data: {
                values: this.props.values
            }
        };
    }
}

Data.propTypes = {
    values: PropTypes.array
};

export default Data;
