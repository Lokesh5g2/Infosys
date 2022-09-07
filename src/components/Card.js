import { HeartOutlined, DeleteFilled, EditOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled } from '@ant-design/icons';
import { Card, Modal, Form, Input, Button } from 'antd';
import { List } from 'antd'
import "antd/dist/antd.css";
import { React, useState } from 'react';
const { Meta } = Card;

function App({ data, onDelete, handleOk }) {
    const [heartClick, setHeartClick] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (<Card
        style={{
            width: 350
        }
        }
        cover={
            < img
                alt="example"
                src={data.img} height={200}
            />
        }
        actions={
            [
                (heartClick ? <HeartFilled style={{ color: "red" }} onClick={() => setHeartClick(false)} /> : <HeartOutlined key="heart" style={{ color: "red" }} onClick={() => setHeartClick(true)} />)
                ,
                <EditOutlined key="edit" onClick={showModal} />,
                <DeleteFilled key="delete" onClick={() => onDelete(data.id)} />,
            ]}
    >
        <Meta
            title={data.name}
            description={<List>
                <li><MailOutlined /> <span>{data.email}</span></li>
                <li><PhoneOutlined /> <span>{data.phone}</span></li>
                <li><GlobalOutlined /> <span>{data.web}</span></li>
            </List>}
        />
        <Modal onOk={handleCancel} title="Basic Modal" footer={[<Button onClick={handleCancel}>Cancel</Button>, <Button type="primary" htmlType='submit' form='basic' onClick={handleCancel}>Submit</Button>]} visible={isModalVisible} onCancel={handleCancel}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={(e) => handleOk(e, data.id)}
                initialValues={{ name: data.name, email: data.email, phone: data.phone, web: data.web }}
                onFinishFailed={handleCancel}
                autoComplete="off"
            >
                <Form.Item
                    kay={data.name}
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    key={data.email}
                    label="email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    key={data.phone}
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your Phone!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    key={data.web}
                    label="Website"
                    name="web"
                    rules={[{ required: true, message: 'Please input your Website!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    </Card >)

};

export default App;