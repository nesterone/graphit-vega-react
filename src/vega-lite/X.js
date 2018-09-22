import React from 'react';
import PropTypes from "prop-types";
import BaseVegaSpecChunkProvider from "./BaseVegaSpecChunkProvider";

class X extends BaseVegaSpecChunkProvider {
    getChunk() {
        return {
            encoding: {
                x: {
                    type: this.props.type,
                    field: this.props.field
                }
            }
        };
    }
}

X.propTypes = {
    field: PropTypes.string.isRequired,
    type: PropTypes.string
};


export default X;
