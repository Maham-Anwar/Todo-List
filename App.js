import React,{Component} from 'react'; 
import './App.css';
import TodoList from './components/TodoList'
import SubmitForm from './components/SubmitForm'
class App extends Component{
  state = {
    tasks: [],
    bgColor:""
  }

  submitTask = task => {
    this.setState({tasks: [...this.state.tasks, task]});
}
  deleteTask = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
}
 completeTask = (index,todo) =>{
   console.log(`Task ${todo} on index ${index} has been completed`);
   

 }
  render(){
  return (
    <div className="container">
    <h1>TODO LIST</h1>
    <TodoList 
    tasks={this.state.tasks}
    onDelete={this.deleteTask}
    onComplete={this.completeTask}
 />
    <SubmitForm onFormSubmit={this.submitTask} />
    </div>
   
  );
}
}
export default App;
