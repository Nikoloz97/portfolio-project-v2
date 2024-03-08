import { React } from "react";
import ProfileCard from "./ProfileCard";
import "./ForumPage.css";

function Forum(props) {
  return (
    <div className="Forum-Container">
      {props.forumProfileData.map((forumProfile) => (
        <ProfileCard
          forumProfile={forumProfile}
          key={forumProfile.forumProfileId}
        />
      ))}
    </div>
  );
}

export default Forum;
