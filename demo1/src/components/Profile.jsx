import React, { Fragment } from "react";

// 비구조화 props 펼치기 props.name을 안 쓰려고~!
const Profile = ({ name }) => {
  return (
    <>
      <div>{name}</div>
    </>
  );
}

export default Profile;