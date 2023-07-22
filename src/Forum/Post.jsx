import { React, useState } from "react";
import { Icon, Card, Image, Grid, Form, Button } from "semantic-ui-react";
import { postDateFormatter } from "../Helpers";
import Comment from "./Comment";

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
      <Card>
        <Card.Header textAlign="right" style={{ paddingRight: "1rem" }}>
          {postDateFormatter(props.post.postedDate.toLocaleString())}
        </Card.Header>
        <Card.Content>
          <Grid>
            <Grid.Row centered style={{ fontWeight: "bold" }}>
              {props.post.title}
            </Grid.Row>
            <Grid.Row>{props.post.text}</Grid.Row>
            <Grid.Row centered>
              <Image
                style={{ display: "block" }}
                size="small"
                src={props.post.photoURL}
              />
            </Grid.Row>
          </Grid>
        </Card.Content>
        <Card.Content style={{}}>
          <Grid columns={2}>
            <Grid.Column>
              <Icon
                name={isPostLiked ? "heart" : "heart outline"}
                color={isPostLiked ? "red" : "black"}
                onClick={handlePostLike}
              />
              {props.post.likes} Likes
            </Grid.Column>
            <Grid.Column>
              <Button onClick={handleCommentDisplay}>
                {props.post.commentCount} Comments
              </Button>
            </Grid.Column>
          </Grid>
        </Card.Content>

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
      </Card>
    </div>
  );
};

export default Post;
