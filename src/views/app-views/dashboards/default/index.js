import { useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
import { Line } from "react-chartjs-2";
import GoalWidget from "components/shared-components/GoalWidget";
import request from "auth/FetchInterceptor";
import {FilterDetails} from "./DefaultDashboardData"


const PipelinesByCount = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>No data available for the chart.</div>;
  }

  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Pipelines count",
        data: data.map((item) => item.count),
        borderColor: "#FFC107",
        fill: false,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    height: 400,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{`Last ${FilterDetails[0].value} days pipelines count statistis for each day`}</h2>
      <div style={{ height: chartOptions.height - 120 + "px" }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

const PipelinesBySize = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>No data available for the chart.</div>;
  }
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Size MB",
        data: data.map((item) => item.size.toFixed(2)),
        borderColor: "#4CAF50",
        fill: false,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    height: 400,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{`Last ${FilterDetails[0].value} days pipelines count statistis for each day`}</h2>
      <div style={{ height: chartOptions.height - 120 + "px" }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

const TotalSize = ({data}) => {
  const size = data.total_size < 1024 ? data.total_size : data.total_size / 1024  
  const measurement = data.total_size < 1024 ? "MB":"GB"
  return (
    <Typography.Text strong="true" style={{ fontSize: '24px' }}>
      {`Total ${size.toFixed(2)} ${measurement}`}
    </Typography.Text>
  )
};

export const DefaultDashboard = () => {
  const [dashboardData, setdashboardData] = useState();
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("auth_token");
  const project_id = localStorage.getItem("project_id");

  useEffect(() => {
    if (token && !project_id) {
      request({
        url: "project/" + "%20",
        method: "get",
        // headers: {
        //   Authorization: `${token}`,
        // },
      }).then((res) => {
        
          localStorage.setItem("project_id", res?.Body.id)     
      
      }).catch(err => {
        console.log(err)
      })
    }
  }, []);


  useEffect(() => {
    setLoading(true);
    request({
      url:
        `/dashboard/statistics?` +
        new URLSearchParams({
          project_id: project_id,
        }),
      method: `get`,
     
    }).then((res) => {  
        setdashboardData(res?.Body);
        setLoading(false);
    }).catch(err => console.log(err))
  }, [])


  if (!dashboardData) {
    return <div>Ooops something went wrong!!!</div>;
  }
  const data = dashboardData

  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={18}>
          <PipelinesByCount data={data.pipelines_by_day} />
        </Col>
        <Col xs={29} sm={24} md={24} lg={6} style={{marginTop: '21px'}}>
          <GoalWidget
            title="Successfull pipelines"
            value={
              data.success_percent
            }
            subtitle={`Total pipelines count ${data.total_count}`}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={18}>
          <PipelinesBySize data={data.pipelines_by_day} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}  style={{ textAlign: 'center', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TotalSize data = {data}/>
        </Col>
      </Row>
    </>
  );
};

export default DefaultDashboard;
