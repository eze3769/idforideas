import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Posts />
      </div>
    </>
  );
};

export default Profile;
