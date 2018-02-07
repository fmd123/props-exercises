//go to: https://codepen.io/fmd123/pen/vdGajq?editors=1010
var firstArr = ["Georgiana", "Jen", "Jessie", "Carla", "Charis", "Zenia"]
var lastArr = ["Brown", "LeFranc", "Bonitatibus", "Marino", "Moschino", "Guttierez"]



var result = firstArr.map(function(elem,i){
    return {first:elem, last:lastArr[i]};
});

document.write(JSON.stringify(result));

//CAPITALIZE THE CLASS NAME or it won't work !!!


class MakeIt extends React.Component{
  render(){
    return (
      <ul>
        {this.props.full.map(
            (obj)=>{

              return (<li> Ciao {obj.first} {obj.last}</li>)
        })}
      </ul>
    )//end of return
  }//end of render
}


ReactDOM.render(<MakeIt full = {result} />, document.getElementById('app'))
