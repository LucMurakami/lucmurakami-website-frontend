import React from "react";
import MyProjectsScreen from "./MyProjectsScreen";

const MyProjects = () => {
  const data = [
    {
      title: "React Frontend Website Project",
      date: "June 2020",
      imagePath: require("../../Images/react.png"),
      cardTitle: "React Frontend Website Project",
      description: "A revamp of my old personal website with CI and material-ui.",
      projectGithubLink: "https://github.com/LucMurakami/lucmurakami-website-frontend",
      techDescription: "React, Travis-ci, AWS: S3, CloudFront"
    },
    {
      title: "NodeJS Backend Website Project",
      date: "June 2020",
      imagePath: require("../../Images/nodejs.png"),
      cardTitle: "NodeJS Backend Website Project",
      description: "A repo to split backend off from frontend for my personal website.",
      projectGithubLink: "https://github.com/LucMurakami/lucmurakami-website-backend",
      techDescription: "Node, Express, Travis-ci, Docker, AWS: ECR, ECS"
    },
    {
      title: "React Native Medical Mobile App",
      date: "April 2020 - May 2020",
      imagePath: require("../../Images/reactnative.png"),
      cardTitle: "React Native Medical Mobile App",
      description: "A mobile app for an industry client in the healthcare space.",
      projectGithubLink: null,
      techDescription: "React Native, Firebase Firestore, Jest, Expo, Bing Maps API, Gitlab, Gitflow"
    },
    {
      title: "NodeJS Social Media App",
      date: "March 2020",
      imagePath: require("../../Images/nodejs.png"),
      cardTitle: "NodeJS Social Media App",
      description: "A NodeJS based social media website developed as a team for a project.",
      projectGithubLink: null,
      techDescription: "NodeJS, Express, Heroku, RemoteMySQL"
    },
    {
      title: "Docker Jenkins CI/CD Pipeline",
      date: "March 2020",
      imagePath: require("../../Images/dockerjenkins.png"),
      cardTitle: "Docker Jenkins AWS CI/CD Pipeline",
      description: "A GitHub Jenkins AWS ECS Dockerized CI/CD pipeline project.",
      projectGithubLink: null,
      techDescription: "Jenkins, Docker, AWS: CodeDeploy, ECS, ECR"
    },
    {
      title: "AWS ES Bike Crime App",
      date: "February 2020",
      imagePath: require("../../Images/aws.png"),
      cardTitle: "AWS ElasticSearch Service Bike Crime App",
      description: "AWS ElasticSearch managed service that imported and parsed bike crime data.",
      projectGithubLink: "https://github.com/LucMurakami/lucmurakami-website-frontend",
      techDescription: "AWS: ElasticSearch Service, S3, Lambda, DynamoDB"
    },
    {
      title: "NodeJS News App",
      date: "September 2020 - December 2020",
      imagePath: require("../../Images/nodejs.png"),
      cardTitle: "NodeJS Social Media App",
      description: "A NodeJS based news website for an industry client.",
      projectGithubLink: null,
      techDescription: "NodeJS, Express, cPanel, mongoDB, phpMyAdmin"
    },
  ];
  return <MyProjectsScreen data={data} />;
};

export default MyProjects;
