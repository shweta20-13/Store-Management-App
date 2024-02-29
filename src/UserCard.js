import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card" style={{ width: "400px", margin: "auto" }}>
      <div className="card-body">
        <h2 className="text-secondary text-center">User Detail </h2>
        <h3 className="card-text mb-3">ID: <span style={{marginLeft:"10px"}}>{user.id}</span></h3>
        <h4 className="card-title mb-3">Name: {user.name}</h4>
        <h5 className="card-subtitle mb-3 text-muted">Email: {user.email}</h5>
        <h6 className="card-text">Password: {user.password}</h6>
      </div>
    </div>
  );
};

export default UserCard;
