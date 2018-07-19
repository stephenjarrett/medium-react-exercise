import React from 'react';

// Rule #1: extend React.Component
class Counter extends React.Component {
    // Rule #4: Accept props in the
    // constructor method
    constructor(props) {
        super(props);
        
        // State is *my* stuff
        // It is always an object
        this.state = {
            currentValue: props.initialValue
        };
        
        let theInterval = setInterval(this._increaseValue, 1000);
    }

    // Always write helper fns as arrow 
    // fns
    // Keeps bugs away.. start custom fns
    // with _ first
    _increaseValue = () => {
        // Calculate the new current value
        let newCurrentValue = this.state.currentValue + 1;
        // Then set the new currentValue in state
        // but I must call this.setState
        //  I cannot alter this.state directly
        if (this.state.currentValue !== this.props.finalValue) {
            this.setState({
                currentValue: newCurrentValue
            });
        }
    }

    // This helper function isn't used since we used an anonymous fn with onClick below
    // _reportMyId = (event) => {
    //     this.props.doClick(this.props.id);
    // }
    
    // Rule #2: must have render method
    render() {
        //  Rule #3: must return some JSX
        //  or a call to React.createElement
        return (
            <div className='counter'
            onClick={() => { this.props.doClick(this.props.id)
            clearInterval(this.props.theInterval)}}
            >
                {this.state.currentValue} / {this.props.finalValue}
            </div>
        );
    }
}

export default Counter;
