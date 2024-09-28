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
      description:
        "My trip to Barcelona in early 2023. Here, I describe and show the breathtaking views of the city. In addition, it was my first time staying at a Hostel, which truly made it an unforgettable experience.",
      imageUrl:
        "https://nikolozblog.azurewebsites.net/media/assets/images/Tibidabo3.jpg",
      blogUrl: "https://nikolozblog.azurewebsites.net/post/1/",
    },
    {
      category: "Coding",
      postedDate: "10/26/2023",
      title: "My Bootcamp Experience (Tech Elevator)",
      description: "This is feature bootcamp experience.",
      imageUrl: "",
      blogUrl: "https://nikolozblog.azurewebsites.net/post/3/",
    },
    {
      category: "Health",
      postedDate: "10/26/2023",
      title: "My Resistance Fitness Journey",
      description: "This is feature content.",
      imageUrl: "",
      blogUrl: "https://nikolozblog.azurewebsites.net/post/2/",
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
              <Button onClick={() => window.open(card.blogUrl, "_blank")}>
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
