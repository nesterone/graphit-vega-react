import React, {Component} from 'react';

class SpecMerge extends Component {
    componentDidMount() {
        this.props.merge(this.props.chunk);
    }

    render() {
        return null
    }
}

export default SpecMerge;
