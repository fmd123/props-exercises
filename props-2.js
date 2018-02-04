// this isn't functional
//see:https://codepen.io/fmd123/pen/rYyKdg

var USER_DATA = {
  name: 'Francesca Davis',
  img: 'https://avatars3.githubusercontent.com/u/14851334?s=460&v=4',
  username: 'fmd123'
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.img} />
        <h1>Name: {this.props.user.name} </h1>
        <h3>username: {this.props.user.username} </h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={USER_DATA}/>,
  document.getElementById('app')
);
