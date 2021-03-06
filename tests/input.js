// es2015
let b = 1;
let a = 1;

// es2016
let c = a ** b;

// spread & rest
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

// Spread properties
let n = { x, y, ...z };

// decorator function
function dec(id){
  return (target, property, descriptor) => console.log('executed', id);
}

// react preset
var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello {this.props.message}!</h1>;
  }
});
