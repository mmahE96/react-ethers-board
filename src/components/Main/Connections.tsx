import React from "react";

export default function Connections() {
  return (
    <div className="border">
      <h1>Connections to the block</h1>
      <div className="flex justify-around">
        <div className="box-border h-32 w-32 border"></div>
        <div className="box-border h-32 w-32 border">JSON RPC</div>
      </div>
    </div>
  );
}
