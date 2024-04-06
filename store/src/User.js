// import { Header } from "./Header";
// import { useParams } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import UserCard from "./UserCard";
// import data1 from '../src/data.json';

// const User = () => {
//   const [user, setUser] = useState({});
//   const params = useParams();
//   const prince = (message) => {
//     console.log(message);
//   };

//   useEffect(() => {
//     const { id } = params;
//     fetchUser(id);
//   }, [params]);

//   const fetchUser = async (id) => {
//     try {
//       // const userdata = await fetch(`http://localhost:3030/user/${id}`, {
//       //   method: "GET",
//       // });
//       // const result = await userdata.json();
//       const result=data1;
//       setUser(result);
//     } catch (error) {
//       prince(error);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <Header />
//       <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
//         <UserCard user={user} />
//       </div>
//     </div>
//   );
// };

// export default User;


import { Header } from "./Header";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import data1 from '../src/data.json';

const User = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  const prince = (message) => {
    console.log(message);
  };

  useEffect(() => {
    const { id } = params;
    fetchUser(id);
  }, [params]);

  const fetchUser = async (id) => {
    try {
      const result = data1.find(user => {
        if(user.id === id){
          return user;
        }
      });
      console.log(result)
      setUser(result);
    } catch (error) {
      prince(error);
    }
  };

  return (
    <div className="container-fluid">
      <Header />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        {/* Check if user object has data before rendering UserCard */}
        {user && Object.keys(user).length > 0 && <UserCard user={user} />}
      </div>
    </div>
  );
};

export default User;
