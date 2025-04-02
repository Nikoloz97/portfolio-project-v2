import React, { useState, useEffect, useRef } from "react";
import { useUserContext } from "../UserContext";
import backgroundImage from "../Images/Blog/Bricks.jpg";
import "./Blog.css";
import { progressiveBackgroundImageLoader } from "../Utils/ProgressiveLoaders";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { isDesktop } = useUserContext();

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const cards = [
    {
      category: "Travel",
      subCategories: ["Europe", "Hostel", "Vacation"],
      postedDate: "July 31st, 2024",
      title: "Trip To Barcelona",
      description:
        "My trip to Barcelona in early 2023. Here, I describe and show the breathtaking views of the city. In addition, it was my first time staying at a Hostel, which truly made it an unforgettable experience.",
      imageUrl:
        "https://nikoloz-blog.azurewebsites.net/media/assets/images/tibidabo_n6fC3Et.jpg",
      blogUrl: "https://nikoloz-blog.azurewebsites.net/post/1/",
    },
    {
      category: "Coding",
      subCategories: ["Learning", "Network", "Career"],
      postedDate: "July 31st, 2024",
      title: "My Bootcamp Experience",
      description:
        "A retrospective of a 3-month bootcamp experience in 2022. As corny as it sounds, it was more than just a curriculum, it was an experience. I never thought learning something could be enjoyable (at most times). Here, I describe how I ended up in the program, what the curriculum was like, and all the fun in the process.",
      imageUrl:
        "https://nikoloz-blog.azurewebsites.net/media/assets/images/Sam-Kev-Tori.jpg",
      blogUrl: "https://nikoloz-blog.azurewebsites.net/post/2/",
    },
    {
      category: "Health",
      subCategories: ["Exercise", "Diet", "Health"],
      postedDate: "July 31st, 2024",
      title: "My Fitness Journey",
      description:
        "Beginning summer of 2021, I began working on my health. Here, I will describe how I shifted my diet and how I made resistance exercise a daily routine.",
      imageUrl:
        "https://nikoloz-blog.azurewebsites.net/media/assets/images/before-after-2.jpg",
      blogUrl: "https://nikoloz-blog.azurewebsites.net/post/3/",
    },
  ];

  useEffect(() => {
    // Delay header fade-in
    setTimeout(() => {
      setIsHeaderVisible(true);
    }, 200);
  }, []);

  const blogPageRef = useRef(null);

  useEffect(() => {
    return progressiveBackgroundImageLoader(
      blogPageRef.current,
      backgroundImage
    );
  }, []);

  return (
    <div
      className={`Blog-Page ${isDesktop ? "Desktop" : "Phone"}`}
      ref={blogPageRef}
    >
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

      <div
        className={
          isDesktop ? "Blog-Container-Desktop" : "Blog-Container-Phone"
        }
      >
        {cards.map((card, index) => (
          <BlogCard key={index} index={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
