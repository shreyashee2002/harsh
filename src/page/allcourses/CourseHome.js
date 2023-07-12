import React from "react";
import { Link } from "react-router-dom";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard.js";
import OnlineCourses from "./OnlineCourses";

const CourseHome = () => {
  return (
    <>
      <Link to="/login">
        <Back title="Explore Courses" />
      </Link>
      <CoursesCard />
      <OnlineCourses />
    </>
  );
};

export default CourseHome;
