import { React } from "react";
import "./Forum.css";

const Post = (props) => {
  return (
    <div className="Post-Title-Text-Image-Container">
      <div className="Post-Title-Text-Container">
        {/* <h1 style={{ textAlign: "center" }}>{props.post.title}</h1> */}
        <div className="Post-Description-Container">{props.post.text}</div>
      </div>
      <div className="Post-Image-Container">
        {props.post.photoURL && (
          <img className="Post-Image" src={props.post.photoURL} alt="post" />
        )}
      </div>
    </div>
  );
};

export default Post;
