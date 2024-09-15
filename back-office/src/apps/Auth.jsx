import React from "react";
import { Outlet } from "react-router-dom";
export default function Auth() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      
      <Outlet />
    </div>
  );
}
