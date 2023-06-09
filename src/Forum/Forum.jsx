import { React } from "react";
import Display from "./Display";
import ProfileCards from "./ProfileCards";

function Forum() {
  return (
    <div
      className="Forum-Page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flexStart",
        gap: "10px",
      }}
    >
      <div className="Container">
        <div
          style={{
            color: "white",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <Display />
        </div>
        <div style={{ height: "50%" }}>
          <ProfileCards />
        </div>
      </div>
    </div>
  );
}

export default Forum;
