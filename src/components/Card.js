import { HeartOutlined, DeleteFilled, EditOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled } from '@ant-design/icons';
import { Card, Modal, Form, Input } from 'antd';
import { List } from 'antd'
import "antd/dist/antd.css";
import { React, useState } from 'react';
const { Meta } = Card;

function App({ data, onDelete }) {
    const [heartClick, setHeartClick] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
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
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinishFailed={handleCancel}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input
                        value='hello' />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input
                        value='hello' />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="Phone"
                    rules={[{ required: true, message: 'Please input your Phone!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Website"
                    name="Website"
                    rules={[{ required: true, message: 'Please input your Website!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    </Card >)

};

export default App;