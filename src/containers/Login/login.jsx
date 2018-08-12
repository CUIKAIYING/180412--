import React, {Component} from "react";
import {NavBar,List,WingBlank,WhiteSpace,Button,InputItem} from "antd-mobile"
import Logo from "../../components/Logo/logo"

class Login extends Component{
    //定义初始状态（数据）
    state = {
        username: "",
        password: "",
        password2: "",
        type:"dashen"
    };
    toRegist = () =>{
        //    编程式路由导航
        this.props.history.replace("/regist")
    };
    //请求注册
    login = () =>{
        console.log(this.state)
    };
    handleChange = (name, val) =>{
        this.setState({
            [name]:val
        })
    };
    render(){
        return(
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem type="text" placeholder="请输入用户名" onChange={val=>this.handleChange("username",val)}>用户名： </InputItem>
                        <WhiteSpace/>
                        <InputItem type="text" placeholder="请输入密码" onChange={val=>this.handleChange("password",val)}>密码： </InputItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.login}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegist}>没有账户</Button>
                    </List>
                </WingBlank>

            </div>
        )
    }
}

export default Login;