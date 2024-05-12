"use client";

import React, { useContext } from "react";
import TopNavBar from "./TopNavBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Top navbar */}
      <TopNavBar />

      {/* Main content */}
      <main>{children}</main>

      {/* Footer (if needed) */}
      {/* <footer></footer> */}
    </div>
  );
};

export default AppLayout;
