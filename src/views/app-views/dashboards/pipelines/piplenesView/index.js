import { Button, Card, Spin } from "antd";
import React from "react";
import { Tabs } from "antd";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Status from "components/layout-components/Status";
import Stages from "components/layout-components/Stages";
import { VerticalRightOutlined } from '@ant-design/icons';
import request from "auth/FetchInterceptor";
const token = localStorage.getItem("auth_token");

const PiplenesView = () => {
  const [pipelineData, setPipelineData] = useState({});
  const [loading, setLoading] = useState(false);

  let { id } = useParams();
   const navigate = useNavigate()
  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    setLoading(true);
    request({
      url: `/pipeline/${id}`,
      method: "get",
    })
      .then((res) => {
          setPipelineData(res?.Body);
          setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const items = [
    {
      key: "1",
      label: "Status",
      children: <Status pipelineData={pipelineData} />,
    },
    {
      key: "2",
      label: "Stages",
      children: <Stages pipelineData={pipelineData} />,
    },
  ];
  return (
    <>
    <Button  onClick={() => navigate(`/app/dashboard/pipelines`)} icon={<VerticalRightOutlined />} size={20} />
      {!loading ? (
        <Tabs
          size="large"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      ) : (
        <>
          <Card
            style={{
              width: `80%`,
              minHeight: "300px",
              margin: `0 auto`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin />
          </Card>
        </>
      )}
    </>
  );
};

export default PiplenesView;
