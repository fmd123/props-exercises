//codepen: https://codepen.io/fmd123/pen/vdGaxP

var listArr = ["Georgiana", "Jen", "Jessie", "Carla", "Charis", "Zenia"]

class TryIt extends React.Component{
  render(){
    return (
      <ul>{this.props.list.filter(
          (name)=>{return name[0]!=="J"}).map(
            (name)=>{
            return(<li> Hello {name}</li>)
        })}
      </ul>
    )

  }
}

ReactDOM.render(<TryIt list = {listArr} />, document.getElementById('app'))
