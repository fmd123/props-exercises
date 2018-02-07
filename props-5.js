 version:https://codepen.io/fmd123/pen/xYVJqj?editors=1010



class Users extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.list}</h1>

        <ul>
          {this.props.list.filter((friend)=>{
              return friend[0] === "M";
            }).map((friend)=>{
              return <li>{friend}</li>;
            })}
        </ul>

        <p>With flex</p>
        <ul className = 'flex'>
          {this.props.list.filter((friend)=>{
              return friend[0] === "M";
            }).map((friend)=>{
              return <li>{friend}</li>;
            })}
        </ul>

        <div>
          <p>returning paragraph elements</p>
          {this.props.list.filter((friend)=>{
              return friend.length < 7;
            }).map((friend)=>{
              return <p>{friend}</p>;
            })}
        </div>
        <ul>
          {this.props.list.map((friend)=>{
            return <li>{friend}</li>
          })}
        </ul>
        <p>With flex</p>
        <ul className = 'flex'>
          {this.props.list.map((friend)=>{
            return <li>{friend}</li>
          })}
        </ul>
       </div>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);
