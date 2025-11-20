import { Col, Row, Tag, Typography } from "antd";
import React from "react";
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
import { Link } from "react-router-dom";

const PipleneItem = ({ pipelineData }) => {
  const { Text } = Typography;

  return (
    <Link to={`/app/dashboard/pipelines/view/${pipelineData?.id}`}>
      <Row
        gutter={27}
        style={{
          padding: "10px 0",
          width: "100%",
          borderBottom: "1px solid #e6ebf1",
          textAlign: `center`,
        }}
      >
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
          ) : pipelineData?.stage !== `upload` ? (
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
          <Text style={{ fontSize: "17px", color: "#1a3353" }}>
            {pipelineData?.output_key}
          </Text>
        </Col>
        <Col className="gutter-row" span={6}>
          <Text style={{ fontSize: "22px", color: "#72849a" }}>
            {pipelineData?.stage === `initial` ? (
              pipelineData?.stage_status === `pending` ? (
                <>
                  <ClockCircleTwoTone />-
                </>
              ) : pipelineData?.stage_status === `succes` ? (
                <>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />-
                </>
              ) : (
                <>
                  <CloseCircleTwoTone twoToneColor="#ff4d4f" />-
                </>
              )
            ) : (
              <>
                <CheckCircleTwoTone twoToneColor="#52c41a" />-
              </>
            )}

            {pipelineData?.stage === `preparation` ? (
              pipelineData?.stage_status === `pending` ? (
                <>
                  <ClockCircleTwoTone />-
                </>
              ) : pipelineData?.stage_status === `succes` ? (
                <>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />-
                </>
              ) : (
                <>
                  <CloseCircleTwoTone twoToneColor="#ff4d4f" />-
                </>
              )
            ) : pipelineData?.stage === `initial` ? (
              <>
                <RightCircleOutlined />-
              </>
            ) : (
              <>
                <CheckCircleTwoTone twoToneColor="#52c41a" />-
              </>
            )}

            {pipelineData?.stage === `transcode` ? (
              pipelineData?.stage_status === `pending` ? (
                <>
                  <ClockCircleTwoTone />-
                </>
              ) : pipelineData?.stage_status === `succes` ? (
                <>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />-
                </>
              ) : (
                <>
                  <CloseCircleTwoTone twoToneColor="#ff4d4f" />-
                </>
              )
            ) : pipelineData?.stage === `initial` ||
              pipelineData?.stage === `preparation` ? (
              <>
                <RightCircleOutlined />-
              </>
            ) : (
              <>
                <CheckCircleTwoTone twoToneColor="#52c41a" />-
              </>
            )}

            {pipelineData?.stage === `upload` ? (
              pipelineData?.stage_status === `pending` ? (
                <>
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
          <Text style={{ fontSize: "17px", color: "#1a3353" }}>
            {" "}
            {(pipelineData?.size_kb / 1000).toFixed(2)} mb
          </Text>
        </Col>
      </Row>
    </Link>
  );
};

export default PipleneItem;
