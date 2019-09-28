import React from 'react';
import Item from './Item'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(){
    super();
    this.input = React.createRef();                 //Declare html code;

  }


  render() {

    return (
        <div>
        <ol>
        {this.props.data.map (v => <Item name = {v.name} />)}
        </ol>
        <input type="text" ref={this.input} />
        <button onClick={ () => {
          this.props.add(this.input.current.value);
          this.input.current.value = "";
          this.input.current.focus();
        }}>Add</button>
        </div>
    )
  }
}

const ReduxApp = connect(state => {
  return {
    data : state
  }
},dispatch => {
  return {
    add : (name) => {
      dispatch({ type: 'ADD', name})
    }
  }
})(App);


//<App data ={state} add={add} />

export default ReduxApp;


// {data.map (function (v){
  //  return <Item name = {v.name} />
  //})}
