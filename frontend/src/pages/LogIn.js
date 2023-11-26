import React, {useState} from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import '../App.css'
const { Title } = Typography;
function LogIn(props) {
    let [userId, setUserId] = useState([])
    let [password, setPassword] = useState([])

    const onFinish = e => {
        e.preventDefault()
        // TODO: Login Auth API
    }

    return (
        <div className="app">
            <Form
                name="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className="login-form"
            >
                <div className="login-form-header">
                    <Title level={3}>Log In</Title>
                </div>
                <div className="login-form-subheader">
                    <h3>Log in to your account</h3>
                </div>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="/">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="/">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LogIn;