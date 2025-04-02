import React, { useState } from "react";
import { Button, Card, Dimmer, Icon, Image } from "semantic-ui-react";
import { useUserContext } from "../UserContext";
import "./Blog.css";

const BlogCard = (props) => {
  const { isDesktop } = useUserContext();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const fadeInDelayTime = [1500, 1700, 1900, 2100];

  setTimeout(() => {
    setIsCardVisible(true);
  }, fadeInDelayTime[props.index]);

  return (
    <Card
      className={`Blog-Card ${isDesktop ? "Desktop" : "Phone"}  ${
        isCardVisible ? "Pop-in" : ""
      }`}
    >
      <Dimmer.Dimmable as={Image} dimmed={isHovered}>
        <Dimmer active={isHovered} onMouseLeave={() => setIsHovered(false)}>
          <Card.Content style={{ color: "white", fontSize: "0.6em" }}>
            {props.card.description}
          </Card.Content>
        </Dimmer>

        {!imageLoaded && <div className="Blog-Card-Image-Skeleton"></div>}

        <img
          src={props.card.imageUrl}
          alt={props.card.title}
          className={`Blog-Card-Image ${imageLoaded ? "loaded" : "loading"}`}
          style={{ opacity: imageLoaded ? 1 : 0 }}
          onLoad={() => setImageLoaded(true)}
          onMouseEnter={() => setIsHovered(true)}
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
          {props.card.title}
        </Card.Description>
        <Card.Description>
          <div className="Blog-Posted-Date-Container">
            {props.card.postedDate}
          </div>
          <div className="Blog-Subcategories-Container">
            {props.card.subCategories.map((subCat, index) => (
              <div key={index} className="Blog-Subcategory-Pill">
                {subCat}
              </div>
            ))}
          </div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          onClick={() => window.open(props.card.blogUrl, "_blank")}
          className={`Blog-RF-Button ${isDesktop ? "" : "Phone"}`}
        >
          <Icon name="arrow right" style={{ marginRight: "10px" }} />
          Read Full Blog
        </Button>
      </Card.Content>
    </Card>
  );
};

export default BlogCard;
