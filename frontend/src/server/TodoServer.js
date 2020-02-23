import {item_Actions} from '../constants/Item'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';
export const TodoServer = {
addItem: addItem
}
export function addItem(userId,value)
{
   var user ={'userId':userId,'todolist':value}
alert("server " + userId + value);
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/postAll', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
        
      console.log("data:......" + data.item_status)
   //return {type:item_Actions.item_Create.NEW,payload:data};
    });
  });
return {type:item_Actions.item_Create.NEW,payload:'none'};

  };
           
      
                         
                     /*     const postRequest =  fetch(ROOT_URL+'/api/Accounts/Register', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.registerStatus )
    if(data.registerStatus=='failure'){
      store.dispatch({type:register_Actions.register_Create.FAILURE,payload:data});
      return ;
      }
    else if(data.registerStatus=='created') {
      store.dispatch({type:register_Actions.register_Create.CREATED,payload:data});
      return ;
    }
    else if(data.registerStatus=='existing') {

      store.dispatch({type:register_Actions.register_Create.EXISTING,payload:data});
      return ;
    }


     });
   })


return {type:register_Actions.register_Create.NEW,payload:'none'};

};
*/
                        