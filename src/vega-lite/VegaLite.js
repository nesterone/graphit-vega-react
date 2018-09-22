import React, {Fragment} from 'react';
import merge from 'lodash.merge'
import Vega from 'react-vega';
import { compile } from 'vega-lite';

export const VegaLiteSpecContext = React.createContext();

export default class VegaLite extends React.Component {
    constructor(props) {
        super(props);

        this.spec = {
            $schema: "https://vega.github.io/schema/vega-lite/v2.json"
        };

        this.merge = (chunk) => {
            merge(this.spec, chunk);
            console.log('change spec', this.spec);
        };

        this.vegaContext = {
            spec: this.spec,
            merge: this.merge
        };

        this.state = {
            spec: null
        };

        console.log('prep context', this.vegaContext);
    }

    componentDidMount () {
        console.log('vega-lite spec', this.spec);
        let compiledSpec = compile(this.spec).spec;
        console.log('compiled spec', JSON.stringify(compiledSpec));
        this.setState(()=> ({
            spec: compiledSpec
        }))
    }

    render() {
        console.log('before render ', this.vegaContext);
        console.log('before render ', this.spec);
        const specToRender = this.state.spec;
        return (
            <Fragment>
                <VegaLiteSpecContext.Provider value={this.vegaContext}>
                    {this.props.children}
                </VegaLiteSpecContext.Provider>
                {specToRender && <Vega spec={specToRender}/> }
            </Fragment>
        );
    }
}
