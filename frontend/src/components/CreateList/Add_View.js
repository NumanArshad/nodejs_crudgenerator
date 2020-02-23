import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { TodoServer } from '../../server/TodoServer';
import {item_Actions} from '../../constants/Item';
import {item_Status} from '../../constants/Item';

//import ListContainer from './Add_ListContainer';
import AddWord from './Add_Success';
    const mapStateToProps=(state)=>{
        return{
       item_status:state.item_Reducer.item_status,
        }
    };
const mapDispatchToProps=(dispatch)=>{
    return {
       
addItem: (userId,value) => { dispatch(TodoServer.addItem(userId,value)) },
    handleBackClick : () =>{ dispatch({ type: item_Actions.item_Create.NEW })
    }
    }

}

class AddView extends React.Component{
 
    constructor(props){
        super(props);
        this.getValue=this.getValue.bind(this);
    }
    getValue(value){
      //  this.props.
        this.props.addItem(this.props.match.params.userId,value);
        alert(value+"id is " + this.props.match.params.userId);
    }
    
    
    render(){
      
        return (
       <AddWord  getValue={this.getValue} />
        );
    
} 
            }
export default connect(mapStateToProps, mapDispatchToProps)(AddView);