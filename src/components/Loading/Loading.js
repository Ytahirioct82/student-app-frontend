import { React } from "react";
import { BoxLoading } from "react-loadingg";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="Loading">
      <BoxLoading className="Loading" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
