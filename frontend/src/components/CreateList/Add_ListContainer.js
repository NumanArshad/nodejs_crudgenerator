/*import React, { Component } from 'react';
import AddWord from './Add_Success';
import List from './Add_List.js';
class ListContainer extends Component {
constructor(props) {
super(props);
this.state = {list: []};
this.submitList = this.submitList.bind(this);  }
submitList(value){
        var newArray = this.state.list;    
    newArray.push(value);
    console.log(value,newArray);    this.setState({list:newArray});

}
render() {

return (
<div ><AddWord submitList={this.submitList}/>
<List listItem={this.state.list}/>
</div>);}}
export default ListContainer;

*/
