import React from "react";

const listTitleStyle = {
  fontWeight: 900,
  color: "#9B1FE8",
  marginBottom: "4px",
};
const FrontendSkills = (
  <ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li> ReactJS Redux & Router - Html - Css - TalwindCss</li>
  </ul>
);
const messagingSkills = (
  <ul>
    <li style={listTitleStyle}>MESSAGING</li>
    <li> ActiveMQ - RabbitMQ - Redis - WebSockets</li>
  </ul>
);
const OtherSkills = (
  <ul>
    <li style={listTitleStyle}>OTHER</li>
    <li> NodeJS - ExpressJS - MongoDB - Mongoose - Sequelize</li>
    <li>
      {" "}
      Git - Bitbucket - GitLab - Stackoverflow - SuperUser - Docker - Linux -
      Bash - Logo Desing{" "}
    </li>
  </ul>
);

const totalSkills = [FrontendSkills, messagingSkills, OtherSkills];
const Skills = () => {
  return (
    <div className="text-white" id="Skills">
      <p>
        I'm a life long learner and enjoy learning new stuff! below are some
        programing languages toolkits, frameworks and libraries that I worked
        with and like. some of them I control better than the other.
      </p>
      <div className="text-white">{totalSkills}</div>
    </div>
  );
};

export default Skills;
