import { Card, Col, Row, Tag, Typography } from 'antd'
import React from 'react'
import {
    EditOutlined,
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    CheckCircleTwoTone,
    CloseCircleTwoTone,
    ClockCircleTwoTone,
  } from "@ant-design/icons";

const Status = ({pipelineData}) => {
  const { Text } = Typography;
  return (
     <Card style={{
      width:`80%`,
      margin:`30px auto`
    }}>
        <Row
          gutter={27}
         
          style={{
            padding: "10px 0",
            width: "100%",
            borderBottom: "1px solid #e6ebf1",
            marginTop: "20px",
            borderTop: "1px solid #e6ebf1",
            display:"flex",
            alignItems:"center"
          
          }}
        >
          <Col className="gutter-row" span={6}>
            <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
              Status
            </Text>
          </Col>
          <Col className="gutter-row" span={6}>
          {pipelineData?.stage_status === `fail` ? (
            <Tag
              style={{
                fontSize: `17px`,
                padding: `4px 8px`,
                textAlign: `center`,
                minWidth: `130px`,
              }}
              icon={<CloseCircleOutlined />}
              color="error"
            >
              error
            </Tag>
          ) : pipelineData?.stage !== `upload` && pipelineData?.stage_status !== 'succes' ? (
            <Tag
              style={{
                fontSize: `17px`,
                padding: `4px 8px`,
                textAlign: `center`,
                minWidth: `130px`,
              }}
              icon={<SyncOutlined spin />}
              color="processing"
            >
              processing
            </Tag>
          ) : (
            <Tag
              style={{
                fontSize: `17px`,
                padding: `4px 8px`,
                textAlign: `center`,
                minWidth: `130px`,
              }}
              icon={<CheckCircleOutlined />}
              color="success"
            >
              success
            </Tag>
          )}
          </Col>
          <Col className="gutter-row" span={6}>
            <Text  style={{ fontSize: "17px", color: "#ff6b72" }}>
             {pipelineData?.fail_description}
            </Text>
          </Col>
        </Row>
        <Row
          gutter={27}
          style={{
            padding: "10px 0",
            width: "100%",
            borderBottom: "1px solid #e6ebf1",
          
           
          
          }}
        >
          <Col className="gutter-row" span={6}>
            <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
           
            Input URL
            </Text>
          </Col>
          <Col className="gutter-row" span={6}>
            <Text  style={{ fontSize: "17px", color: "#1a3353" }}>
              {pipelineData?.input_url}
            </Text>
          </Col>
        </Row>
        <Row
          gutter={27}
          style={{
            padding: "10px 0",
            width: "100%",
            borderBottom: "1px solid #e6ebf1",
          }}
        >
          <Col className="gutter-row" span={6}>
            <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
          
            Output Key
            </Text>
          </Col>
          <Col className="gutter-row" span={6}>
            <Text  style={{ fontSize: "17px", color: "#1a3353" }}>
             {pipelineData?.output_key}
            </Text>
          </Col>
        </Row>
        <Row
          gutter={27}
          style={{
            padding: "10px 0",
            width: "100%",
            borderBottom: "1px solid #e6ebf1",
           
           
          
          }}
        >
          <Col className="gutter-row" span={6}>
            <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
            Size     
            </Text>
          </Col>
          <Col className="gutter-row" span={6}>
            <Text  style={{ fontSize: "17px", color: "#1a3353" }}>
              {pipelineData?.size_kb}
            </Text>
          </Col>
        </Row>
    </Card>
  )
}

export default Status