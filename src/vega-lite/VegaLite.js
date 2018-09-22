import React from 'react';

export const VegaLiteSpecContext = React.createContext({
    spec: { description: 'aaaa'},
    updateSpec: (chunk) =>  {}
});


export default class VegaLite extends React.Component {


    constructor(props) {
        super(props);

        this.spec = { description: 'aaaa'};

        this.updateSpec = (chunk) => {
            this.spec = {
                ...this.spec,
                ...chunk
            };

            console.log('change spec', this.spec);
        };

        this.vegaContext = {
            spec: this.spec,
            updateSpec: this.updateSpec
        };

        console.log('prep context', this.vegaContext);
    }


    componentDidMount () {
        // taddaa spec is ready here
        console.log('init vega lite', this.spec);
    }

    render() {
        console.log('before render ', this.vegaContext);
        console.log('before render ', this.spec);
        return (
            <VegaLiteSpecContext.Provider value={this.vegaContext}>
                {this.props.children}
            </VegaLiteSpecContext.Provider>
        );
    }
}
