import { Tabs } from "antd";

import Profile from "components/layout-components/Profile";
import Storage from "components/layout-components/Storage";
import Webhooks from "components/layout-components/Webhooks";
import { useEffect, useState } from "react";
import { request } from "request/Axios";

const Setting = () => {

  const[projectdata,setProjectData]  = useState({})


  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Profile",
      children: <Profile setProjectData={setProjectData} projectdata={projectdata} />,
    },
    {
      key: "2",
      label: "Storage",
      children: <Storage projectdata={projectdata?.storage} />,
    },
    {
      key: "3",
      label: "Webhooks",
      children: <Webhooks projectdata={projectdata?.webhook} />,
    },
  ];
  return (
    <Tabs size="large" defaultActiveKey="1" items={items} onChange={onChange} />
  );
};

export default Setting;
