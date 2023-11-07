import React from "react";
import { Message, Icon } from "semantic-ui-react";

export const LoadingMessage = () => (
  <Message icon>
    <Icon name="circle notched" loading color="grey" />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      We are fetching that content for you.
    </Message.Content>
  </Message>
);
