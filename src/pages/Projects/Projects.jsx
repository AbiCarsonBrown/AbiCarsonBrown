import "./Projects.scss";
import Project from "../../components/Project/Project";
import { useState } from "react";
import shopDeskCB from "../../assets/coffeebeen/coffeeshop-desktop.png";
import shopMobCB from "../../assets/coffeebeen/coffeeshop-mobile.png";
import homeDeskCB from "../../assets/coffeebeen/home-desktop.png";
import homeMobCB from "../../assets/coffeebeen/home-mobile-list.png";
import loginMobCB from "../../assets/coffeebeen/login-mobile.png";
import profileTabCB from "../../assets/coffeebeen/profile-tablet.png";
import GalleryButtons from "../../components/GalleryButtons/GalleryButtons";
import homePP from "../../assets/planpal/homepage.png";
import formPP from "../../assets/planpal/form-complete.png";
import loadingPP from "../../assets/planpal/loading.png";
import resultPP from "../../assets/planpal/result.png";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = [
    {
      name: "CoffeeBeen",
      url: "https://coffeebeen.abicarsonbrown.com",
      github_client: "https://github.com/AbiCarsonBrown/CoffeeBeen",
      github_server: "https://github.com/AbiCarsonBrown/CoffeeBeen-server",
      description:
        "Bringing together front-end and back-end development skills to create a web application to find and review coffee shops around London, illustrated using the GoogleMaps API.",
      images: [
        shopDeskCB,
        shopMobCB,
        homeDeskCB,
        homeMobCB,
        loginMobCB,
        profileTabCB,
      ],
    },
    {
      name: "PlanPal",
      url: "",
      github_client: "https://github.com/AbiCarsonBrown/PlanPal",
      github_server: "",
      description: "Hackathon",
      images: [homePP, formPP, loadingPP, resultPP],
    },
    {
      name: "whY",
      url: "",
      github_client: "https://github.com/AbiCarsonBrown/whY-client",
      github_server: "",
      description: "Hackathon",
      images: [],
    },
  ];

  return (
    <main className="projects">
      <Project project={projects[activeProjectIndex]} />
      <GalleryButtons
        className="projects__buttons"
        galleryArray={projects}
        activeIndex={activeProjectIndex}
        setActiveIndex={setActiveProjectIndex}
      />
    </main>
  );
}
