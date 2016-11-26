import {h, render, Component} from 'preact';
class App extends  Component {
  render(){
    return (
      <h1>Hello</h1>
    )
  }
}
render(<App />, document.getElementById("root"));
