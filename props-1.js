
//see: https://codepen.io/fmd123/pen/qxZqEq

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username} </h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge
    name='Francesca Davis'
    username='fmd123'
    img='https://avatars3.githubusercontent.com/u/14851334?s=460&v=4'/>,
  document.getElementById('app')
);
