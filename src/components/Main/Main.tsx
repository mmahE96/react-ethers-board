import React from "react";
import Connections from "./Connections";
import QueryBlock from "./QueryBlock";
import WriteBlock from "./WriteBlock";

const Main:React.FC = () => {
  return (
    <div className="flex flex-col gap-y-24">
      <Connections />
      <QueryBlock />
      <WriteBlock />
    </div>
  );
}

export default Main;
