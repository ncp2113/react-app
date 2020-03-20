import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Square(props) {
//     return (
//       <button className="square" 
//       onClick={props.onClick}>
//         {props.value}
//       </button>
//     )
// }

// class Board extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       squares:Array(9).fill(null),
//       xIsNext: true
//     }
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       squares:squares,
//       xIsNext: !this.state.xIsNext
//     });  
//   }

//   renderSquare(i) {
//     return <Square value={this.state.squares[i]} 
//     onClick={() => this.handleClick(i)}
//     />;
//   }

//   render() {
//     const winner = calculateWinner(this.state.squares);
//     let status;
//     if (winner) {
//       status = "Winner is: " + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O' );      
//     }
//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div></div>
//           <ol></ol>
//         </div>
//       </div>
//     );
//   }
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a,b,c] = lines[i];
//     if (squares[a]===squares[b] && squares[b]===squares[c]) {
//       return squares[c];
//     }      
//   }
//   return null;
// }

// class Clock extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       date: new Date()
//     }
//   }

//   tick(){
//       this.setState({date:new Date()});
//     }

//   componentDidMount() {
//     this.timerId = setInterval(()=>this.tick(),1000);
//   }

//   componentWillMount() {
//     clearInterval(this.timerId);
//   }

//   render() {
//     return (
//       <div>
//       <h1>it is {this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }

// }

// ReactDOM.render(
//   <Clock/>,
//   document.getElementById('root')
// );  

// //function ActionLink() {
//   function handleClick(e){
//     e.preventDefault();
//     console.log('prevented default');
//   }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToggle: true
//     };
//     //this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(state => 
//     ({isToggle:!state.isToggle})
//     );
//   }
//   render(){
//     return (
//     <button onClick={() => this.handleClick()}>{(this.state.isToggle?'ON':'OFF')}</button>
//       )
//   }
// }

// class LoginControl extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       isLogged : false
//     }
//   }

//   login = () => {
//     this.setState({isLogged : false});
//   }
//   logout = () => {
//     this.setState({isLogged : true});
//   }

//   render() {
//     let button;
//     if (this.state.isLogged) {
//       button = <button onClick={this.login}>Login</button>
//     }
//     else{
//       button = <button onClick={this.logout}>Logout</button>
//     }
//     return (
//       <div>{button}</div>
//     )
//   }
// }
const numbers = [1,2,3];
const listItem = numbers.map(num => <li key={num}>{num*2}</li>);
ReactDOM.render(
  <ul>{listItem}</ul>,
  document.getElementById('root')
  ); 
//}


