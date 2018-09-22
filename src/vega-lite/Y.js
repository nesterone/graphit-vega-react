import React from 'react';
import PropTypes from "prop-types";
import BaseVegaSpecChunkProvider from "./BaseVegaSpecChunkProvider";

class Y extends BaseVegaSpecChunkProvider {
    getChunk() {
        return {
            encoding: {
                y: {
                    type: this.props.type,
                    field: this.props.field
                }
            }
        };
    }
}

Y.propTypes = {
    field: PropTypes.string,
    type: PropTypes.string
};


export default Y;
