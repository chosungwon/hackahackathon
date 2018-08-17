import React, {Component, Fragment} from 'react';
import axios from 'axios';


class Register extends Component {
  state={
    username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: ''
  };
  handleChange = (e) =>{
      this.setState({
          [e.target.name]: e.target.value
      })
  };
  handleSubmit = (e) =>{
      e.preventDefault();
      let info = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          first_name: this.state.first_name,
          last_name: this.state.last_name
      };
      axios.post(`http://192.168.30.5:8000/signup/`,info)
          .then(res=>{
              this.setState({
                  username: res.data.username,
                  password: res.data.password,
                  email: res.data.email,
                  first_name: res.data.first_name,
                  last_name: res.data.last_name
              })
              console.log(res.data)
          })
  };
  render() {
    return (
        <Fragment>
          <form onSubmit={this.handleSubmit}>
            <input type={'text'} placeholder={'ID'} name={'username'} onChange={this.handleChange}/>
              <input type={'password'} placeholder={'PASSWORD'} name={'password'} onChange={this.handleChange}/>
              <input type={'text'} placeholder={'EMAIL'} name={'email'} onChange={this.handleChange}/>
              <input type={'text'} placeholder={'성'} name={'first_name'} onChange={this.handleChange}/>
              <input type={'text'} placeholder={'이름'} name={'last_name'} onChange={this.handleChange}/>
              <input type={'submit'} value={'회원가입'}/>
          </form>
        </Fragment>
    );
  }
}

export default Register;