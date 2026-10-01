import React from "react";
import '../css/contact.css'
import { Form, Input, Button } from 'antd'
import TextArea from "antd/es/input/TextArea";

type formBody = {
    name: string,
    email: string,
    subject: string,
    body: string
}

const Contact = () => {
    const handleSubmit = (values: formBody) => {
        console.log(values)
    }
    return <>
        <h1>Contact Us</h1>
       <div className="row">
            <img src="/party.png" alt="party.png" className="col-6"/>
            <div className="col-6 contact">
                <Form onFinish={handleSubmit}>
                    <div className="row">
                        <div className="col-6 name-email">
                            <Form.Item name={['name']} rules={[{ required: true }]}>
                                <Input placeholder="Name"/>
                            </Form.Item>
                        </div>
                        <div className="col-6 name-email">
                            <Form.Item name={['email']} rules={[{ required: true }]}>
                                <Input placeholder="Email"/>
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item name={['subject']} rules={[{ required: true }]}>
                        <Input placeholder="Subject"/>
                    </Form.Item>
                    <Form.Item name={["body"]} rules={[{required: true}]}>
                        <TextArea rows={4} placeholder="Type your message here..."/>
                    </Form.Item>
                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </>;
};

export default Contact;
