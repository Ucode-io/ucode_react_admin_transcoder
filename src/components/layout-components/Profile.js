import {
  Row,
  Typography,
  Col,
  Select,
  Tooltip,
  Button,
  Card,
  Spin,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import request from "auth/FetchInterceptor";
// import { request } from "request/Axios";

const Profile = ({ projectdata, setProjectData }) => {
  const [value, setValue] = useState();
  const [loding, setLoading] = useState(false);
  console.log("projectdata", projectdata?.related_projects?.[0]?.label);

  const { Text } = Typography;

  const handleChange = (value) => {
    setValue(value);
  };
  const token = localStorage.getItem("auth_token");
  const project_id = localStorage.getItem("project_id");

  useEffect(() => {
    setLoading(true);
    request({
      url: "project/" + `${value ? value : project_id}`,
      method: "get",
    }).then((res) => {
        localStorage.setItem("project_id", res?.Body?.id);
        setProjectData(res?.Body);
        setLoading(false);
    }).catch(err => console.log(err))
  }, [value]);

  const label = projectdata?.related_projects?.[0]?.label;

  return (
    <>
      {!loding ? (
        <Card
          style={{
            width: `80%`,
            margin: `0 auto`,
          }}
        >
          <Select
            defaultValue={!!label && label}
            style={{
              width: 200,
            }}
            onChange={handleChange}
            options={projectdata?.related_projects}
          />
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
            <Col className="gutter-row" span={8}>
              <h3 className="mb-0 mr-3 font-weight-semibold"></h3>
              <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
                Project id
              </Text>
            </Col>
            <Col className="gutter-row" span={8}>
              <Text style={{ fontSize: "16px" }}>
                {projectdata?.project_id}
              </Text>
            </Col>

            <Col className="gutter-row" span={8}>
              <div className="text-right d-flex justify-content-end">
                <Tooltip title="Edit">
                  <Button
                    type="primary"
                    className="mr-2"
                    size="small"
                    icon={<EditOutlined />}
                  />
                </Tooltip>
              </div>
            </Col>
          </Row>
          <Row
            gutter={27}
            style={{
              padding: "10px 0",
              width: "100%",
              borderBottom: "1px solid #e6ebf1",
              marginTop: "10px",
            }}
            // justify="space-between"
            // align="center"
          >
            <Col className="gutter-row" span={8}>
              <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
                Project name
              </Text>
            </Col>
            <Col className="gutter-row" span={8}>
              <Text style={{ fontSize: "16px" }}>{projectdata?.title}</Text>
            </Col>

            <Col className="gutter-row" span={8}>
              <div className="text-right d-flex justify-content-end">
                <Tooltip title="Edit">
                  <Button
                    type="primary"
                    className="mr-2"
                    size="small"
                    icon={<EditOutlined />}
                  />
                </Tooltip>
              </div>
            </Col>
          </Row>
          <Row
            gutter={27}
            style={{
              padding: "10px 0",
              width: "100%",
              borderBottom: "1px solid #e6ebf1",
              marginTop: "10px",
            }}
            // justify="space-between"
            // align="center"
          >
            <Col className="gutter-row" span={8}>
              <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
                Access Key
              </Text>
            </Col>
            <Col className="gutter-row" span={8}>
              <Text style={{ fontSize: "16px" }}>
                {projectdata?.access_key}
              </Text>
            </Col>

            <Col className="gutter-row" span={8}>
              <div className="text-right d-flex justify-content-end">
                <Tooltip title="Edit">
                  <Button
                    type="primary"
                    className="mr-2"
                    size="small"
                    icon={<EditOutlined />}
                  />
                </Tooltip>
              </div>
            </Col>
          </Row>
          <Row
            gutter={27}
            style={{
              padding: "10px 0",
              width: "100%",
              borderBottom: "1px solid #e6ebf1",
              marginTop: "10px",
            }}
            // justify="space-between"
            // align="center"
          >
            <Col className="gutter-row" span={8}>
              <Text strong style={{ fontSize: "17px", color: "#1a3353" }}>
                Secret key
              </Text>
            </Col>
            <Col className="gutter-row" span={8}>
              <Text style={{ fontSize: "16px" }}>
                {projectdata?.secret_key}
              </Text>
            </Col>

            <Col className="gutter-row" span={8}>
              <div className="text-right d-flex justify-content-end">
                <Tooltip title="Edit">
                  <Button
                    type="primary"
                    className="mr-2"
                    size="small"
                    icon={<EditOutlined />}
                  />
                </Tooltip>
              </div>
            </Col>
          </Row>
        </Card>
      ) : (
        <>
          <Card
          
            style={{
              width: `80%`,
              minHeight:"300px",
              margin: `0 auto`,
              display:"flex",
              alignItems:'center',
              justifyContent:"center"
            }}
          >
            <Spin />
          </Card>
        </>
      )}
    </>
  );
};

export default Profile;
