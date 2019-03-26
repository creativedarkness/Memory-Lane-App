import React, { Component } from 'react';
import "./CounterApp.css"

class CounterApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            counters: [ ],
        }
    }
    
    addCounter = () => {
        this.setState({counters: [...this.state.counters, {count: 0}]})
    }
    incrementCounter = (idx) => {
        this.state.counters[idx].count++
        this.setState({counters: this.state.counters})
    }
    decrementCounter = (idx) => {
        this.state.counters[idx].count--
        this.setState({counters: this.state.counters})
    }

    render() {
        const counters = this.state.counters.map( (counter, idx) => {
            return (
                <div className="counters" key={idx}>
                    <h1>{counter.count}</h1>
                    <button onClick={ ()=> {this.incrementCounter(idx)}}>Increment</button>
                    <button onClick={ ()=> {this.decrementCounter(idx)}}>Decrement</button>
                </div>
            );
        });
        return (
            <div className="addCounter">
                <button onClick={this.addCounter}>Add Counter</button>
                <br />
                {counters}
                </div>
        )
    }           
}

export default CounterApp