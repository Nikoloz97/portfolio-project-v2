import React, { useState } from "react";
import {
  Form,
  Button,
  Modal,
  List,
  Divider,
  Segment,
  Grid,
  Header,
} from "semantic-ui-react";

export default function ResultsModal(props) {
  const [open, setOpen] = useState(false);
  const [userCats, setUserCats] = useState([
    {
      category: "PTS",
      value: 16.5,
    },
    {
      category: "FG%",
      value: 48.5,
    },
    {
      category: "FT%",
      value: 78,
    },
    {
      category: "3PM",
      value: 2.5,
    },
    {
      category: "REB",
      value: 10,
    },
    {
      category: "AST",
      value: 6,
    },
    {
      category: "STL",
      value: 1.2,
    },
    {
      category: "BLK",
      value: 1.4,
    },
    {
      category: "TO",
      value: 2.2,
    },
  ]);

  const [topCats, setTopCats] = useState([
    {
      category: "PTS",
      value: 16.5,
    },
    {
      category: "FG%",
      value: 48.5,
    },
    {
      category: "FT%",
      value: 78,
    },
    {
      category: "3PM",
      value: 2.5,
    },
    {
      category: "REB",
      value: 10,
    },
    {
      category: "AST",
      value: 6,
    },
    {
      category: "STL",
      value: 1.2,
    },
    {
      category: "BLK",
      value: 1.4,
    },
    {
      category: "TO",
      value: 2.2,
    },
  ]);

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Form.Button>Show Results</Form.Button>}
      >
        <Modal.Header>Results</Modal.Header>

        <Modal.Content>
          <Segment>
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <Header>Your team</Header>

                <List selection verticalAlign="middle">
                  {userCats.map((x) => (
                    <List.Item key={x.category}>
                      <List.Content>
                        <List.Header>{x.category}</List.Header>
                        <List>{x.value}</List>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header>Top-150 Average</Header>
                <List selection verticalAlign="middle">
                  {topCats.map((x) => (
                    <List.Item key={x.category}>
                      <List.Content>
                        <List.Header>{x.category}</List.Header>
                        <List>{x.value}</List>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
            </Grid>

            <Divider vertical>VS</Divider>
          </Segment>
        </Modal.Content>

        <Modal.Actions>
          <Button
            content="Return"
            labelPosition="left"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}
