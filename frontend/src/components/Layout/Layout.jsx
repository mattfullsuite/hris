import React from "react";
import ClientSideBar from "../client/ClientSideBar";

export default function Layout({ children }) {
    return (
    <div>
      {/* Attaching all file components */}
      <ClientSideBar>
      {children}
      </ClientSideBar>
    </div>
    );
  }