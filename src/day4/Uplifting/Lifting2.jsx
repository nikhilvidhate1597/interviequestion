import React,{ Component } from 'react';
class Lifting2 extends Component {
  
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
      
    handleTextChange(e){
        this.props.handleTextChange(e.target.value);
    }
      
    render() {
        return (
            <input value={this.props.text} 
                   onChange={this.handleTextChange} />
        );
    }
    }
          
    export default Lifting2;