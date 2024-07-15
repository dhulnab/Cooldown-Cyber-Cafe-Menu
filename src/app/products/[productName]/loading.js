import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import {  Spin } from "antd";
const App = () => (
  <div className="loading">
    <Spin indicator={<LoadingOutlined spin />} size="large" />
  </div>
);
export default App;
