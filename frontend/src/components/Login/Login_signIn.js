import React from 'react';
import axios from 'axios'
import { ROOT_URL } from '../../constants/config'

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', file: '', columns: [], alldata: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSignIn(this.state.username, this.state.password)

  }

  Change = (e) => {
    let file = e.target.files;
    let reader = new FileReader()
    reader.readAsDataURL(file[0])
    reader.onload = (e) => {
      console.log(e.target.result)
    }
  }

  upload = () => {
    this.setState({username:'set'})
    const formData = new FormData();
    alert(this.state.file)
    formData.append('file', this.state.file)
    alert(formData.values)
    // this.props.handleupload(formData)

    axios.post('http://localhost:3301/upload', formData,
      {
        onUploadProgress: progressEvent => {

          //   if(!isNaN(progressEvent.loaded/progressEvent.total*100)){
          console.log("Upload progress :" + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%');
          //this.setState({completed:Math.round(progressEvent.loaded/progressEvent.total*100)})
          //}

        }
      }).then
      (res => {
        console.log(res.data)
        this.setState({ columns: Object.keys(res.data.Alldata[0]), alldata: res.data.Alldata })
      })

  }

  render() {
    var errorMessage = (this.props.status != undefined && this.props.status == "LOGIN_ACCOUNT_NOT_AUTHORIZED") ? "Username or password is incorrect" : ""



    return (
      <div>
        <div style={{ padding: '6%', width: '40%' }} >
          <h1>Login Here</h1>
          <p style={{ color: 'red' }}>{errorMessage}</p>
          <input id="username" label="Username" type="text" onChange={this.handleChange} value={this.state.username} />
          <br /><br />
          <input id="password" label="Password" type="password" onChange={this.handleChange} value={this.state.password} />
          <br /><br />
          <button onClick={this.handleSubmit} type="submit">Login</button>
        </div>

{this.state.alldata.length<=0 && this.state.username!==''?<div>...loading</div>:
<center>
        <table style={{width:'100%',border:'1px solid #dddddd',alignItems:'center',
      alignContent:'center',textAlign:'center',}}>
         
            <tr>
              {this.state.columns.map((item) =>
                <th>{item!=='_id'?item:null}</th>)}
            </tr>
            
          

              {this.state.alldata.map((data) => 
                 <tr>
                {this.state.columns.map((item)=>
             <td> { item!=='_id'?data[item]:null}</td>
                
                
                )}</tr>
                
              
              )}

 </table>
        </center>}

        <input type="file" onChange={(event) => { console.log(event.target.files[0]); this.setState({ file: event.target.files[0] }) }} />
        <button type="submit" value="click" onClick={this.upload} />




      </div>
    );
  }
}

export default LoginForm
