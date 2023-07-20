import React from "react";
import { Comment as SemanticComment } from "semantic-ui-react";
import { postDateFormatter } from "../Helpers";

const Comment = (props) => {
  return (
    <div>
      <SemanticComment.Group>
        <SemanticComment>
          <SemanticComment.Avatar src={props.comment.profileUrl} />
          <SemanticComment.Content>
            <SemanticComment.Author as="a">
              {props.comment.displayName}
            </SemanticComment.Author>
            <SemanticComment.Metadata>
              {postDateFormatter(props.comment.commentDate).toLocaleString()}
            </SemanticComment.Metadata>
            <SemanticComment.Text>{props.comment.text}</SemanticComment.Text>
            <SemanticComment.Actions>
              <SemanticComment.Action>Reply</SemanticComment.Action>
            </SemanticComment.Actions>
          </SemanticComment.Content>
        </SemanticComment>
      </SemanticComment.Group>
    </div>
  );
};

export default Comment;
