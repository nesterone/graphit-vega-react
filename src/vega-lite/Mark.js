import React from 'react';
import PropTypes from "prop-types";
import BaseVegaSpecChunkProvider from "./BaseVegaSpecChunkProvider";

class Mark extends BaseVegaSpecChunkProvider {
    getChunk () {
        return {mark: this.props.type};
    }
}

Mark.propTypes = {
    type: PropTypes.string
};

export default Mark;
