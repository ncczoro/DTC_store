
import React from 'react';
import logo from './logo.svg';
import './App.css';


let b;

let a = <h1>this is h1 {4 + 2 - 2}</h1>;

const variJSX = React.createElement(
  'p', { color: 'red', onFocus: myfosuc() }, 'I do not use JSX')

function myfosuc() {

}

const _input = <input type='number' value="b"></input>

function App() {

  return (
    <div className="App">
      <table>
        <tr>
          <td>{variJSX}</td>
          <td>{a}</td>
          <td>{_input}</td>

        </tr>
        <tr>
          <td>
            <Plan height="22" src="https://placekitten.com/g/64/64" ></Plan>
          </td>
          <td><Car height="10" > </Car></td>
          <td><Plan height="11" counter="xx" color="darkkk"></Plan></td>
        </tr>
      </table>
    </div>
  );

}

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      time: new Date()
    };
  }


  chageColor = () => {
    this.setState({ color: "value", time: new Date() });
    this.setState((state, props) => ({ counter: state.counter + props.increment }))
  }

  render() {
    return <div>
      <h1> xx color {this.state.color} and height{this.props.height} xx</h1>
      <p>{this.state.time.toLocaleString()}</p>
      <button onClick={this.chageColor}>change color</button>
    </div>
  }
}
class Plan extends React.Component {
  constructor() {
    super();
    this.state = { color: 'yellow' };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps calls befores render elements in the DOM, if the component get updated, It is called!");
  }

  componentDidMount() {
    console.log("compoentDIdMuount like after viewInit!");
    setTimeout(() => {
      this.setState({ color: "green after 2s" })
    }, 2000);

  }
  shouldComponentUpdate() {
    console.log("stop the component from rendering at any update")
    return true // false: componentDidMount not rendering
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapShotBeforeUpdate: find the state, props before the update ", prevProps, prevState)

  }
  componentDidUpdate() {
    console.log("componentDidUpdate: called after the update has been rendered in the DOM")
  }

  Unmounting() {
    console.log("Unmounting is called when the component is about to be remove from the DOM ")
  }

  render() {
    return <div>
      <h1 color={this.state.color}>
        == plan date {new Date().toLocaleTimeString()} color {this.state.color} and height {this.props.height} ==
      </h1>
      <h4>
        <Car></Car>
      </h4>
      <img src={this.props.src}></img>
      <input value={JSON.stringify(this.props)}></input>
    </div>
    // setInterval(e, 1000);
  }



}

export default App;
