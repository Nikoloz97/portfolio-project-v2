import { React, useState } from "react";
import "./Forum.css";

const Post = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="Post-Title-Text-Image-Container">
      <div className="Post-Title-Text-Container">
        <div className="Post-Description-Container">{props.post.text}</div>
      </div>
      <div className="Post-Image-Container">
        {props.post.photoURL && (
          <>
            {!imageLoaded && <div className="Post-Image-Skeleton"></div>}
            <img
              className={`Post-Image ${imageLoaded ? "loaded" : "loading"}`}
              src={props.post.photoURL}
              alt={props.post.title}
              style={{ opacity: imageLoaded ? 1 : 0 }}
              onLoad={() => setImageLoaded(true)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
