import React,{ useState } from 'react';
import "./header.css"
import logo1 from "../Assets/logo1.jpg"
import {Modal,Form, Input, Button} from "antd";
import { useNavigate } from 'react-router-dom';

const Header =()=>{
    const [visible, setVisible]= useState(false)
    const onFinish =(values)=>{
        console.log(values)
    }
    const navigate = useNavigate();


    
    return(
        
        <>
        <Modal 
        visible={visible}
         width="40%"
         onOk={()=>setVisible(false)}
        onCancel={()=>setVisible(false)}>
            <h1>Signin Form</h1>
            <Form onFinish={onFinish}>
                <Form.Item label="email" name="email" rules={[{required:true}]}>
                <Input type="email"/>
                </Form.Item>
                <Form.Item label="passward" name="passward" rules={[{required:false}]}>
                    <Input type="email"/>
                    </Form.Item>
                    <Button
      htmllType="submit" onClick={()=>{
          localStorage.setItem("userLogedIn",true);
          navigate("/"); 
      }}>{""}Login {""}
      </Button>
     
    

            </Form>

        </Modal>
       <div className="container">
           <div className="logo">
              <img src={logo1}/>
           </div>
           <div className="navbar">
               <a href="/home">Home</a>
               <a href="# " onClick={()=>setVisible(true)}>SignIn</a>
               
               <a href="/aboutus">About us</a>
               <a href="/contact">Contact</a>
               <a href="/tour">Tour</a>
               
           </div>

       </div>
       </>
    )
}
export default Header;