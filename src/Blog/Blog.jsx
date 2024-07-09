import React, { useState, useEffect } from "react";
import { Card, Image, Icon, Button, Dimmer } from "semantic-ui-react";
import { useUserContext } from "../UserContext";
import "./Blog.css";

const Blog = () => {
  const { isDesktop } = useUserContext();

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isSubheaderVisible, setIsSubheaderVisible] = useState(false);

  const [isCardVisible, setIsCardVisible] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [isHovered, setIsHovered] = useState([false, false, false, false]);

  const cards = [
    {
      category: "Travel",
      postedDate: "10/26/2023",
      title: "Trip To Barcelona",
      description: "This is a description of the card's content",
      imageUrl:
        "https://www.travelandleisure.com/thmb/CpgY6sTcuTzvn3AdMX8QnyaGhJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-sagrada-familia-TODOBARCELONA0723-327cd11c9bea4f89bc800d648c39a9b3.jpg",
    },
    {
      category: "Health",
      postedDate: "10/26/2023",
      title: "Protein Bar Review",
      description: "This is a description of the card's content",
      imageUrl:
        "https://i0.wp.com/sporked.com/wp-content/uploads/2023/07/RANKING-UPDATE_PROTEIN-BAR_HEADER.jpg?resize=966%2C544&ssl=1",
    },
    {
      category: "Coding",
      postedDate: "10/26/2023",
      title: "My Journey in Coding",
      description: "This is a description of the card's content",
      imageUrl:
        "https://www.zdnet.com/a/img/resize/a0dcec40a8cd8d2e1b3a9e12a05c2819622d20be/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=1200&width=1200",
    },
    {
      category: "Dance",
      postedDate: "10/26/2023",
      title: "Basics of Georgian Dancing",
      description: "This is a description of the card's content",
      imageUrl:
        "https://storage.georgia.travel/images/georgian-folklore-dance.webp",
    },
  ];

  useEffect(() => {
    // Delay header fade-in
    setTimeout(() => {
      setIsHeaderVisible(true);
      setIsSubheaderVisible(true);
    }, 200);

    // Delay card fade-ins
    setTimeout(() => {
      setIsCardVisible(() => [true, false, false, false]);
    }, 1000);

    setTimeout(() => {
      setIsCardVisible(() => [true, true, false, false]);
    }, 1200);

    setTimeout(() => {
      setIsCardVisible(() => [true, true, true, false]);
    }, 1400);

    setTimeout(() => {
      setIsCardVisible(() => [true, true, true, true]);
    }, 1600);
  }, []);

  useEffect(() => {
    getBlogPosts();
  }, []);

  const getBlogPosts = () => {
    // TODO: create blog post fetch
    // axios
    //   .get(apiForumRoot)
    //   .then((response) => {
    //     console.log(response.data);
    //     setForumProfileData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  };

  const handleMouseLeave = (index) => {
    const newHoverState = [...isHovered];
    newHoverState[index] = false;
    setIsHovered(newHoverState);
  };

  const handleMouseEnter = (index) => {
    const newHoverState = [...isHovered];
    newHoverState[index] = true;
    setIsHovered(newHoverState);
  };

  return (
    <div className="Blog-Page">
      {/* Header/Subheader */}
      <div
        className={`Blog-Header-Subheader-Container ${
          isDesktop ? "Desktop" : "Phone"
        }`}
      >
        <div
          className={`Default-Header Fade-In-Header ${
            isHeaderVisible ? "Fade-In" : ""
          }`}
        >
          Nick's Blog
        </div>
        <div
          className={`Blog-Subheader Fade-In-Subheader ${
            isSubheaderVisible ? "Fade-In" : ""
          }`}
        >
          {isDesktop ? "Hover " : "Tap "}
          over each image for a short article summary
        </div>
      </div>

      {/* Cards */}

      <div
        className={
          isDesktop ? "Blog-Container-Desktop" : "Blog-Container-Phone"
        }
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`Blog-Card ${isCardVisible[index] ? "Pop-in" : ""}`}
          >
            <Dimmer.Dimmable as={Image} dimmed={isHovered[index]}>
              <Dimmer
                active={isHovered[index]}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Card.Content>
                  <Card.Header style={{ color: "white" }}>
                    {card.description}
                  </Card.Header>
                  <Card.Meta style={{ color: "white" }}>
                    {card.postedDate}
                  </Card.Meta>
                </Card.Content>
              </Dimmer>
              <Image
                src={card.imageUrl}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            </Dimmer.Dimmable>
            <Card.Content>
              <Card.Description style={{ color: "white" }}>
                {card.title}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button>
                <Icon name="arrow right" style={{ marginRight: "10px" }} />
                Go to article
              </Button>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
