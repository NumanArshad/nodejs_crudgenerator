import {login_Actions} from '../constants/Login'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';

export const loginServer = {
handleSignIn: handleSignIn,
handleupload:handleupload
}

export function handleSignIn(username,password)
{
  alert(username)
  var user ={'username':username,'password':password}

  const postRequest =  fetch(ROOT_URL+'/api/Accounts/SignIn', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    
    console.log('********'+response.status);
    response.json().then(data=>{
          //alert(data.userId);
      console.log("data:......" + data.signInStatus )
    if(data.signInStatus=='failure'){
      store.dispatch({type:login_Actions.login_SignIn.FAILURE,payload:data});
      return ;
      }
    else if(data.signInStatus=='authorized') {

      store.dispatch({type:login_Actions.login_SignIn.AUTHORIZED,payload:data});
      return ;
    }
    else if(data.signInStatus == 'not_authorized'){
      store.dispatch({type:login_Actions.login_SignIn.NOT_AUTHORIZED,payload:data});
      return ;
    }

     });
   })


return {type:login_Actions.login_SignIn.NEW,payload:'none'};

};



export function handleupload(file)
{
 //var user ={'username':file}
alert(file)
  const postRequest =  fetch(ROOT_URL+'/uploadFile', {
        method: 'POST',
        headers: {'Content-Type':'multiprt/form-data'},
         mode: 'cors',
      body: file
   }).then((response)=>{
    
    console.log('********'+response.status);
    response.json().then(data=>{
          //alert(data.userId);
      console.log("data:......" + data.status )
    if(data.success=='uploaded'){
      alert('uploaded file success')
     // store.dispatch({type:login_Actions.login_SignIn.FAILURE,payload:data});
      return ;
      }
    else if(data.signInStatus=='authorized') {

      store.dispatch({type:login_Actions.login_SignIn.AUTHORIZED,payload:data});
      return ;
    }
    else if(data.signInStatus == 'not_authorized'){
      store.dispatch({type:login_Actions.login_SignIn.NOT_AUTHORIZED,payload:data});
      return ;
    }

     });
   })


return {type:login_Actions.login_SignIn.NEW,payload:'none'};

};

