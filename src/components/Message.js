import React, { Component } from "react";

class Message extends Component {
    constructor(props) {
        super(props)        

        this.state = {
            message: 'Welcome ' + this.props.name + ' a.k.a ' + this.props.heroName
            // message : "Hello"
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you ' + this.props.heroName
        })
    }
    
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}> Button </button>
            </div>
        )
    }
}
export default Message