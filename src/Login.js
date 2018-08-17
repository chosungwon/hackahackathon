import React, {Component, Fragment} from 'react';
import axios from 'axios';

class Login extends Component{
    state={
        username: '',
        password: ''
    };
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = (e) =>{
        e.preventDefault();
        let login = {
            username: this.state.username,
            password: this.state.password,
        };
        axios.post(`http://192.168.30.5:8000/api/login/`,login,{
            headers:{
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res)
        })
    };
    render(){
        return(
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type={'text'} placeholder={'ID'} name={'username'} onChange={this.handleChange}/>
                    <input type={'password'} placeholder={'PASSWORD'} name={'password'} onChange={this.handleChange}/>
                    <input type={'submit'} value={'로그인'}/>
                </form>
            </Fragment>
        )
    }
}

export default Login;