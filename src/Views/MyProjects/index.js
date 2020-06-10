import React from "react";
import MyProjectsScreen from "./MyProjectsScreen";

const MyProjects = () => {
  const data = [
    {
      title: "This is test",
      imagePath: "/",
    },
  ];
  return <MyProjectsScreen data={data} />;
};

export default MyProjects;
