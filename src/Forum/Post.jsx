import { React, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import Comment from "./Comment";
import "./ForumPage.css";

const Post = (props) => {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [areCommentsShown, setAreCommentsShown] = useState(false);

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleCommentDisplay = () => {
    setAreCommentsShown(!areCommentsShown);
  };

  return (
    <div>
      <div className="Post-Title-Text-Image-Container">
        <div style={{ fontWeight: "bold" }}>{props.post.title}</div>
        <div>{props.post.text}</div>
        <div>
          {props.post.photoURL && (
            <img className="Post-Image" src={props.post.photoURL} alt="post" />
          )}
        </div>
      </div>

      {areCommentsShown ? (
        <>
          {props.post.comments.map((eachComment) => (
            <Comment comment={eachComment} key={eachComment.commentId} />
          ))}
          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </>
      ) : null}
    </div>
  );
};

export default Post;
