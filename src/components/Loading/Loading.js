import { React } from "react";
import { ImSpinner11 } from "react-icons/im";
import { BoxLoading } from "react-loadingg";

const Loading = () => {
  return (
    <div className="Loading">
      <h1>
        <BoxLoading />
      </h1>
    </div>
  );
};

export default Loading;
