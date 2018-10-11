# Intro

> Be AWARE: It's just  a concept! Don use it ;-)

Idea is to adapt Vega syntax on more component like style, so instead
writing:

```json
 {
   "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
   "description": "A simple bar chart with embedded data.",
   "data": {
     "values": [
       {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
       {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
       {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
     ]
   },
   "mark": "bar",
   "encoding": {
     "x": {"field": "a", "type": "ordinal"},
     "y": {"field": "b", "type": "quantitative"}
   }
 }
```

We can write something like:

```js
const SimpleBarChart = (props) => (
    <VegaLite>
        <Data values={props.data}/>
        <Mark type='bar'/>
        <Encoding>
            <X field='a' type='ordinal'/>
            <Y field='b' type='quantitative'/>
        </Encoding>
    </VegaLite>
);

```

It gives us next benefits: 

1. Use ES6 'import/export' to reuse common parts of specs, for example data+transformation 
might be a separate module included in many visualizations on top of the same data
1. Natural React Environment for react devs
1. `ReactContext` could be used to control shared aspects for all visualization in a project 
