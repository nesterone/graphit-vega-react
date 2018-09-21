import React from 'react';

export const VegaLiteSpecContext = React.createContext({
    spec: { description: 'aaaa'},
    updateSpec: (chunk) =>  {}
});


export default class VegaLite extends React.Component {

    constructor(props) {
        super(props);

        this.updateSpec = (chunk) => {
            this.setState(state => ({
                ...state,
                ...chunk
            }));
        };

        this.state = {
            spec: { description: 'aaaa'},
            updateSpec: this.updateSpec,
        };
    }

    componentDidMount () {
        console.log('init vega lite', this.state);
    }

    render() {
        return (
            <VegaLiteSpecContext.Provider value={this.state}>
                {this.props.children}
            </VegaLiteSpecContext.Provider>
        );
    }
}
