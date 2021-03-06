import React,{Component} from 'react';
class SubmitForm extends Component {
  
  state = { term: '' };
  submitTask = (e) => {
    e.preventDefault();
    if(this.state.term === '') return;
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  }
  render() {
    return(
      <form onSubmit={this.submitTask}>
        <input 
          type='text'
          className='input'
          placeholder='Enter Item'
          value={this.state.term}
          onChange={(e) => this.setState({term: e.target.value})}
        />
        <button  className='button'>Submit</button>
      </form>
    );
  }
}
export default SubmitForm;