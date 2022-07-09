import React,{ Component }  from 'react';
import B from './Lifting2';
import C from './Lifting3';
   
class Lifting1 extends Component {
  
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {text: 'Hello'};
  }
  
  handleTextChange(newText) {
    this.setState({text: newText});
  }
   
  render() {
    return (
        <React.Fragment>
            <h1>Input Output</h1>
          <B text={this.state.text} 
             handleTextChange={this.handleTextChange}/>
          <C text={this.state.text} />
        </React.Fragment>
    );
  }
}
  
export default Lifting1;