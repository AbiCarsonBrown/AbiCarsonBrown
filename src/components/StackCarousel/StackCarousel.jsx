import { useEffect, useState } from "react";
import "./StackCarousel.scss";
import CSSIcon from "../../assets/icons/CSS3.svg";
import Express from "../../assets/icons/Express.svg";
import Git from "../../assets/icons/Git.svg";
import GitHub from "../../assets/icons/GitHub.svg";
import Heroku from "../../assets/icons/Heroku.svg";
import HTMLIcon from "../../assets/icons/HTML5.svg";
import JSIcon from "../../assets/icons/JavaScript.svg";
import Jest from "../../assets/icons/Jest.svg";
import Jira from "../../assets/icons/Jira.svg";
import Knex from "../../assets/icons/Knex.svg";
import MySQL from "../../assets/icons/MySQL.svg";
import Node from "../../assets/icons/Node.svg";
import ReactIcon from "../../assets/icons/React.svg";
import Sass from "../../assets/icons/Sass.svg";
import TypeScript from "../../assets/icons/TypeScript.svg";
import Vercel from "../../assets/icons/Vercel.svg";
import Vite from "../../assets/icons/Vite.svg";

export default function StackCarousel() {
  const stack = [
    { name: "HTML5", icon: HTMLIcon },
    { name: "CSS3", icon: CSSIcon },
    { name: "JavaScript", icon: JSIcon },
    { name: "Sass", icon: Sass },
    { name: "React.js", icon: ReactIcon },
    { name: "TypeScript", icon: TypeScript },
    { name: "Git", icon: Git },
    { name: "GitHub", icon: GitHub },
    { name: "Node.js", icon: Node },
    { name: "Express", icon: Express },
    { name: "MySQL", icon: MySQL },
    { name: "Knex.js", icon: Knex },
    { name: "Jira", icon: Jira },
    { name: "Vite.js", icon: Vite },
    { name: "Heroku", icon: Heroku },
    { name: "Vercel", icon: Vercel },
    { name: "Jest", icon: Jest },
  ];

  return (
    <div className="carousel">
      {stack.map((item, index) => (
        <div key={index} className="carousel__item">
          <img src={item.icon} alt={item.name} />
        </div>
      ))}
    </div>
  );
}
