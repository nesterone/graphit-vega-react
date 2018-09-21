import React, {Component} from 'react';
import PropTypes from "prop-types";

class Encode extends Component {

    componentDidMount() {
        console.log('got encoding', { encoding: {}});
        let filedObject = {a: 'a', b: 'b'};
        console.log('data inline no need request filelds known', filedObject); // but what if it's unknown yet
        this.props.render(filedObject);
    }

    render() {
        return null;
    }
}

Encode.propTypes = {
    render: PropTypes.func
};


export default Encode;
