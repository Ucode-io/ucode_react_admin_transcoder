import React from 'react'
import {
    Button,
    Card,
    Col,
    Flex,
    Form,
    Input,
    Modal,
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
    RightCircleOutlined,
  } from "@ant-design/icons";

  import convertSeconds from 'convert-seconds';

const Stages = ({pipelineData}) => {
  const { Text } = Typography;

  // const prepi

  let preparation = Object.values(convertSeconds(pipelineData?.preparation_duration_seconds)) 
  let transcode = Object.values(convertSeconds(pipelineData?.transcode_duration_secs)) 
  let uplod = Object.values(convertSeconds(pipelineData?.upload_duration_secs)) 
  



  return (
    <Card style={{ width: `80%`, margin: `0 auto` }}>
    <Row
      gutter={27}
      style={{
        padding: "10px 0",
        width: "100%",
        borderBottom: "1px solid #e6ebf1",
        marginTop: "20px",
        borderTop: "1px solid #e6ebf1",
    
      }}
    >
      <Col className="gutter-row" span={6}>
        <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
         Name
        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
        Status
        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
        Duration
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
        Initial
        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text strong style={{ fontSize: "21px", color: "#1a3353" }}>
        {pipelineData?.stage === `initial` ? (
            pipelineData?.stage_status === `pending` ? (
              <>
                <ClockCircleTwoTone />
              </>
            ) : pipelineData?.stage_status === `succes` ? (
              <>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              </>
            ) : (
              <>
                <CloseCircleTwoTone twoToneColor="#ff4d4f" />
              </>
            )
          ) : (
            <>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </>
          )}
        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text  style={{ fontSize: "17px", color: "#1a3353" }}>
         0 ms
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
        preparation
        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text strong style={{ fontSize: "21px", color: "#1a3353" }}>
        {pipelineData?.stage === `preparation` ? (
            pipelineData?.stage_status === `pending` ? (
              <>
                <ClockCircleTwoTone />
              </>
            ) : pipelineData?.stage_status === `succes` ? (
              <>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              </>
            ) : (
              <>
                <CloseCircleTwoTone twoToneColor="#ff4d4f" />
              </>
            )
          ) : pipelineData?.stage === `initial` ? (
            <>
              <RightCircleOutlined />
            </>
          ) : (
            <>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </>
          )}
        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text  style={{ fontSize: "17px", color: "#1a3353" }}>
          {preparation[0] ? `${preparation[0]} h ` : ``}
          {preparation[1] ? `${preparation[1]} m ` : ``}
          {preparation[2] ? `${preparation[2]} s ` : `${pipelineData?.preparation_duration_seconds * 1000} ms`}
        {/* {pipelineData?.preparation_duration_seconds} */}
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
        Transcode

        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text strong style={{ fontSize: "21px", color: "#1a3353" }}>
        {pipelineData?.stage === `transcode` ? (
            pipelineData?.stage_status === `pending` ? (
              <>
                <ClockCircleTwoTone />
              </>
            ) : pipelineData?.stage_status === `succes` ? (
              <>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              </>
            ) : (
              <>
                <CloseCircleTwoTone twoToneColor="#ff4d4f" />
              </>
            )
          ) : pipelineData?.stage === `initial` ||
            pipelineData?.stage === `preparation` ? (
            <>
              <RightCircleOutlined />
            </>
          ) : (
            <>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </>
          )}
        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text  style={{ fontSize: "17px", color: "#1a3353" }}>
        {transcode[0] ? `${transcode[0]} h ` : ``}
          {transcode[1] ? `${transcode[1]} m ` : ``}
          {transcode[2] ? `${transcode[2]} s ` : `${pipelineData?.transcode_duration_secs * 1000} ms`}
          {/* {pipelineData?.transcode_duration_secs} */}
      
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
        Upload
        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text strong style={{ fontSize: "21px", color: "#1a3353" }}>
        {pipelineData?.stage === `upload` ? (
            pipelineData?.stage_status === `pending` ? (
              <>
                {" "}
                <ClockCircleTwoTone />
              </>
            ) : pipelineData?.stage_status === `success` ? (
              <>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              </>
            ) : (
              <>
                <CloseCircleTwoTone twoToneColor="#ff4d4f" />
              </>
            )
          ) : pipelineData?.stage === `initial` ||
            pipelineData?.stage === `transcode` ||
            pipelineData?.stage === `preparation` ? (
            <>
              <RightCircleOutlined />
            </>
          ) : (
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          )}
        </Text>
      </Col>
      <Col className="gutter-row" span={6}>
        <Text  style={{ fontSize: "17px", color: "#1a3353" }}>
        {uplod[0] ? `${uplod[0]} h ` : ``}
          {uplod[1] ? `${uplod[1]} m ` : ``}
          {uplod[2] ? `${uplod[2]} s ` : `${pipelineData?.upload_duration_secs * 1000} ms`}
        {/* {pipelineData?.upload_duration_secs} */}
        </Text>
      </Col>

    </Row>
  </Card>
  )
}

export default Stages