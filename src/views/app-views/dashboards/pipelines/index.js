import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Modal,
  Pagination,
  Row,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import {
  EditOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  ClockCircleTwoTone,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
// import { request } from "request/Axios";
import PipleneItem from "components/layout-components/PipleneItem";
import request from "auth/FetchInterceptor";


const Pipelines = () => {
  const { Text } = Typography;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pipelineData, setpipleneData] = useState();
  const [count,setCount]  = useState()
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(1);


  const token = localStorage.getItem("auth_token");
  const project_id = localStorage.getItem("project_id");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    request({
      url: "/pipeline",
      method: "POST",
      data: {
        ...values,
        max_resolution: "1080p",
        project_id: project_id,
      },

    }).then((res) => {
      
        setIsModalOpen(false);
        window.location.reload()
   
    }).catch(err => console.log(err))
  };

  useEffect(() => {
    setLoading(true);
    request({
      url:
        `/pipeline/list?` +
        new URLSearchParams({
          limit: 10,
          order_by_created_at: 1,
          page: current,
          project_id: project_id,
          search: ``,
        }),
      method: `get`,
     
    }).then((res) => {  
        setpipleneData(res?.Body?.pipelines);
        setCount(res?.Body?.count)
        setLoading(false);
    }).catch(err => console.log(err))
  }, [current])

  

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  // setInterval(() => {
  //   request({
  //     url:
  //       `/pipeline/list?` +
  //       new URLSearchParams({
  //         limit: 1000,
  //         order_by_created_at: ``,
  //         page: 1,
  //         project_id: project_id,
  //         search: ``,
  //       }),
  //     method: `get`,
  //     headers: {
  //       Authorization: `${token}`,
  //     },
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       setpipleneData(res?.data?.Body?.pipelines);
  //       setLoading(false);
  //     }
  //   });
  // }, 30000);

  return (
    <>
      <Flex style={{ width: `80%`, margin: `10px auto` }} justify="flex-end">
        <Button type="primary" onClick={showModal}>
          Create pipelines
        </Button>
      </Flex>
      <Card style={{ width: `80%`, margin: `0 auto` }}>
        <Row
          gutter={27}
          style={{
            padding: "10px 0",
            width: "100%",
            borderBottom: "1px solid #e6ebf1",
            marginTop: "20px",
            borderTop: "1px solid #e6ebf1",
            textAlign: `center`,
          }}
        >
          <Col className="gutter-row" span={6}>
            <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
              Status
            </Text>
          </Col>
          <Col className="gutter-row" span={6}>
            <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
              Video key
            </Text>
          </Col>
          <Col className="gutter-row" span={6}>
            <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
              Stages
            </Text>
          </Col>
          <Col className="gutter-row" span={6}>
            <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
              Size
            </Text>
          </Col>
        </Row>
        {pipelineData?.map((item, index) => (
          <PipleneItem key={index} pipelineData={item} />
        ))}

    <Pagination
    style={{  marginTop: `10px ` }}
      showSizeChanger
      // onShowSizeChange={onShowSizeChange}
      onChange={onChange}
      current={current}
      defaultCurrent={1}
      total={count && count}
    />
      </Card>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={form.submit}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Input url"
            name="input_url"
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
            label="Output key"
            name="output_key"
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
            label="Output_path"
            name="output_path"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Pipelines;
