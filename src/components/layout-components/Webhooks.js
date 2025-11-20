import React from "react";
import { Select, Button, Form, Input, Card, Switch } from "antd";

import { toast } from "react-toastify";
import request from "auth/FetchInterceptor";


const Webhooks = ({projectdata}) => {
  console.log(`webhookprojectdata`,projectdata)
  const token = localStorage.getItem("auth_token");
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();

  const onFinish = (values) => {
    request({
      url:"/webhook",
      method:"PUT",
      data:{
        ...values,
        id:projectdata?.id
      },
    }).then(res =>{
        toast.success('Create Webhooks')
          window.location.reload()
    }).catch(err =>{
      console.log(err)
    })
  };
  
  form.setFieldsValue({
    title: projectdata?.title,
    webhook_type:projectdata?.webhook_type,
    url:projectdata?.url,
    active:projectdata?.active

   })


  return (
    <Form  form={form} onFinishFailed={onFinishFailed} onFinish={onFinish} layout="vertical">
      <Card
        style={{
          width: 500,
        }}
      >
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Url"
          name="url"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input type="url" />
        </Form.Item>
        <Form.Item
          label="Webhook type"
          name="webhook_type"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Active" name="active" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Card>
    </Form>
  );
};

export default Webhooks;
