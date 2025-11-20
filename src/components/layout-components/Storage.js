import React, { useEffect } from "react";
import { Select, Button, Form, Card, Input } from "antd";

import { toast } from "react-toastify";
import request from "auth/FetchInterceptor";

const Storage = ({projectdata}) => {

  const [form] = Form.useForm();
  const token = localStorage.getItem("auth_token");


   form.setFieldsValue({
    domain_name: projectdata?.domain_name,
    type:projectdata?.type,
    access_key:projectdata?.access_key,
    secret_key:projectdata?.secret_key,
    region:projectdata?.region
   })


  const onChange = (key) => {
    console.log(key);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    request({
      url:"/storage",
      method:"PUT",
      data:{
        ...values,
        id:projectdata?.id
      },
    }).then(res =>{
        toast.success('Create storage')
          window.location.reload()
    }).catch(err =>{
      console.log(err)
    })
  };
  const handleChange = (value) => {
   console.log(value);
  };


  return (
    <Form form={form} onFinishFailed={onFinishFailed} onFinish={onFinish} layout="vertical">
      <Card
        style={{
          width: 500,
        }}
      >
        <Form.Item name="type" label="Type" rules={[{ required: true }]}>
        <Select
            // defaultValue={!!label && label}
 
            onChange={handleChange}
            options={[{value:'minio',label:'minio',},{value:'s3',label:'s3'},{value:'unknown',label:'unknown',}]}
          />
        </Form.Item>
        <Form.Item
          label="Domain"
          name="domain_name"
          rules={[
            {
              required: true,
              type: "regexp",
              pattern: new RegExp('/^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/'),
              message: "Please input your  Domain name!",
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Acces key"
          name="access_key"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Secret key"
          name="secret_key"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Region"
          name="region"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
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

export default Storage;
