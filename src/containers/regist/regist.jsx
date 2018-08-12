import React, {Component} from "react"
import {NavBar,List,WingBlank,WhiteSpace,Button,InputItem,Radio} from "antd-mobile"
import Logo from "../../components/Logo/logo"
//注册路由组件
class Regist extends Component{
    //定义初始状态（数据）
    state = {
        username: "",
        password: "",
        password2: "",
        type:"dashen"
    };
    toLogin = () =>{
    //    编程式路由导航
        this.props.history.replace("/login")
    };
    //请求注册
    regist = () =>{
        console.log(this.state)
    };
    handleChange = (name, val) =>{
        this.setState({
            [name]:val
        })
    };
    render(){
        const {type} = this.state;
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
                        <InputItem type="text" placeholder="请输入确认密码" onChange={val=>this.handleChange("password2",val)}>确认密码： </InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span>用户类型：</span>&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==="laoban"} onClick={()=>{this.handleChange("type","laoban")}}>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==="dashen"} onClick={()=>{this.handleChange("type","dashen")}}>大神</Radio>
                        </List.Item>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.regist}>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>

            </div>
        )
    }
}
export default Regist