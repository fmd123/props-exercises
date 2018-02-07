//see: https://codepen.io/fmd123/pen/yvJRry?editors=0010

//need match for regex and includes for string 
class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter((person)=>{
            return person.friend === true;}).map((person)=>{return <li>{person.name}</li>})
          }
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter((person)=>{
            return person.friend === false;
          }).map((person)=>{
            return <li>{person.name}</li>
          })}
        </ul>
        <h1>More Stuff</h1>
        <ul>
          {this.props.list.filter((person)=>{
           return (person.faveColor.match(/g/i))
          }).map((person)=>{
            return<li>{person.name}'s favorite color: {person.faveColor}</li>})}
        </ul>
      </div>

      /*{ <ul>
                {this.props.list.filter((person)=>{
                 return (person.faveColor.includes("g")||person.faveColor.includes("G"))
                }).map((person)=>{
                  return<li>{person.name}'s favorite color: {person.faveColor}</li>})}
              </ul> }*/

    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true, faveColor: 'Blue'},
    { name: 'Ryan', friend: true, faveColor: 'Mauve'},
    { name: 'Michael', friend: false, faveColor: 'Orange'},
    { name: 'Mikenzi', friend: false, faveColor: 'Green'},
    { name: 'Jessica', friend: true, faveColor: 'Red'},
    { name: 'Dan', friend: false, faveColor: 'Beige'} ]}
  />,
  document.getElementById('app')
);
