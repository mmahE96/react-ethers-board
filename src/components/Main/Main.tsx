import React from "react";
import Connections from "./Connections";
import QueryBlock from "./QueryBlock";
import WriteBlock from "./WriteBlock";

export default function Main() {
  return (
    <div className="flex flex-col gap-y-24">
      <Connections />
      <QueryBlock />
      <WriteBlock />
    </div>
  );
}
