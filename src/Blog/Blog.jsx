import React, { useState, useEffect } from "react";
import { Card, Image, Icon, Button, Dimmer } from "semantic-ui-react";
import { useUserContext } from "../UserContext";
import "./Blog.css";

const Blog = () => {
  const { isDesktop } = useUserContext();

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

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
      subCategories: ["Europe", "Hostel", "Vacation"],
      postedDate: "July 31st, 2024",
      title: "Trip To Barcelona",
      description:
        "My trip to Barcelona in early 2023. Here, I describe and show the breathtaking views of the city. In addition, it was my first time staying at a Hostel, which truly made it an unforgettable experience.",
      imageUrl:
        "https://nikoloz-blog.azurewebsites.net/media/assets/images/Tibidabo3.jpg",
      blogUrl: "https://nikolozblog.azurewebsites.net/post/1/",
    },
    {
      category: "Coding",
      subCategories: ["Learning", "Network", "Career"],
      postedDate: "July 31st, 2024",
      title: "My Bootcamp Experience",
      description:
        "A retrospective of a 3-month bootcamp experience in 2022. As corny as it sounds, it was more than just a curriculum, it was an experience. I never thought learning something could be enjoyable (at most times). Here, I describe how I ended up in the program, what the curriculum was like, and all the fun in the process.",
      imageUrl:
        "https://nikolozblog.azurewebsites.net/media/assets/images/Sam-Kev-Tori.jpg",
      blogUrl: "https://nikolozblog.azurewebsites.net/post/2/",
    },
    {
      category: "Health",
      subCategories: ["Exercise", "Diet", "Health"],
      postedDate: "July 31st, 2024",
      title: "My Fitness Journey",
      description:
        "Beginning summer of 2021, I began working on my health. Here, I will describe how I shifted my diet and how I made resistance exercise a daily routine.",
      imageUrl:
        "https://nikolozblog.azurewebsites.net/media/assets/images/before-after-v2.jpg",
      blogUrl: "https://nikolozblog.azurewebsites.net/post/3/",
    },
  ];

  useEffect(() => {
    // Delay header fade-in
    setTimeout(() => {
      setIsHeaderVisible(true);
    }, 200);

    // Delay card fade-ins
    setTimeout(() => {
      setIsCardVisible(() => [true, false, false, false]);
    }, 1500);

    setTimeout(() => {
      setIsCardVisible(() => [true, true, false, false]);
    }, 1700);

    setTimeout(() => {
      setIsCardVisible(() => [true, true, true, false]);
    }, 1900);

    setTimeout(() => {
      setIsCardVisible(() => [true, true, true, true]);
    }, 2100);
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
    <div className={`Blog-Page ${isDesktop ? "Desktop" : "Phone"}`}>
      {/* Header/Subheader */}
      <div
        className={`Blog-Header-Subheader-Container ${
          isDesktop ? "Desktop" : "Phone"
        } ${isHeaderVisible ? "Fade-In" : ""}`}
      >
        <div className="Default-Header">Nick's Blog</div>
        <div className="Blog-Subheader">
          {isDesktop ? "Hover over " : "Tap on "}
          each image for a short article summary
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
            className={`Blog-Card ${isDesktop ? "Desktop" : "Phone"}  ${
              isCardVisible[index] ? "Pop-in" : ""
            }`}
          >
            <Dimmer.Dimmable as={Image} dimmed={isHovered[index]}>
              <Dimmer
                active={isHovered[index]}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Card.Content style={{ color: "white", fontSize: "0.6em" }}>
                  {card.description}
                </Card.Content>
              </Dimmer>
              <Image
                src={card.imageUrl}
                className="Blog-Card-Image"
                onMouseEnter={() => handleMouseEnter(index)}
              />
            </Dimmer.Dimmable>
            <Card.Content className="Blog-Title-Date-Pills-Container">
              <Card.Description
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "0.7em",
                }}
              >
                {card.title}
              </Card.Description>
              <Card.Description>
                <div className="Blog-Posted-Date-Container">
                  {card.postedDate}
                </div>
                <div className="Blog-Subcategories-Container">
                  {card.subCategories.map((subCat, index) => (
                    <div key={index} className="Blog-Subcategory-Pill">
                      {subCat}
                    </div>
                  ))}
                </div>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button
                onClick={() => window.open(card.blogUrl, "_blank")}
                className={`Blog-RF-Button ${isDesktop ? "" : "Phone"}`}
              >
                <Icon name="arrow right" style={{ marginRight: "10px" }} />
                Read Full Blog
              </Button>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
