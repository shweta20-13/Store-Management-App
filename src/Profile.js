// import { Header } from "./Header";
// import { useState, useEffect } from "react";
// import Footer from "./Footer";

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [id, setId] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [updatedUser, setUpdatedUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     const storedId = localStorage.getItem('user-id');
//     if (storedId) {
//       setId(storedId);
//     }
//     getdata();
//   }, []); 

//   useEffect(() => {
//     if (id) {
//       getdata();
//     }
//   }, [id,editMode]);

//   async function getdata() {
//     try {
//       const response = await fetch(`http://localhost:3030/user/${id}`, {
//         method: 'GET'
//       });
//       const data = await response.json();
//       setUser(data);
//       setUpdatedUser(data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   }

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await fetch(`http://localhost:3030/user/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedUser),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update user');
//       }
//       console.log(`User with ID ${id} updated successfully.`);
//       setEditMode(false);
//     } catch (error) {
//       console.error(`Error updating user with ID ${id}:`, error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser({
//       ...updatedUser,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="container-fluid">
//       <Header />
//       <div className="container-1 d-flex justify-content-center mt-5">
//         <div className="card mb-4">
//         <h3 className="text-center text-secondary mt-2"> This is my profile !</h3>
//           <button className="btn btn-secondary mt-3" style={{ width: "70px", marginLeft: "20px" }} onClick={handleEdit}>Edit</button>
//           <form style={{ width: "750px", marginLeft: "30px", marginRight: "30px" }}>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <img
//                 className="profile-pic mt-5"
//                 style={{ height: "100px", width: "100px", border: "2px solid red", borderRadius: "50%" }}
//                 src="https://rukminim2.flixcart.com/image/850/1000/xif0q/examination-pad/j/u/e/cute-cartoon-girl-flipdecor-original-imagz3m68hukkphh.jpeg?q=20&crop=false"
//                 alt="Profile Pic"
//               />
//             </div>
//             <div>
//               <label htmlFor="id" className="form-label">Id</label>
//               <input type="number" id="id" className="form-control mb-2" value={user?.id || ''} readOnly />
//             </div>
//             <div>
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" id="name" className="form-control mb-2" name="name" value={editMode ? updatedUser.name : user?.name || ''} onChange={handleChange} readOnly={!editMode} />
//             </div>
//             <div>
//               <label htmlFor="email" className="form-label">Email</label>
//               <input type="email" id="email" className="form-control mb-2" name="email" value={editMode ? updatedUser.email : user?.email || ''} onChange={handleChange} readOnly={!editMode} />
//             </div>
//             <div className="mb-5">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input type="password" id="password" className="form-control mb-2" name="password" value={editMode ? updatedUser.password : user?.password || ''} onChange={handleChange} readOnly={!editMode} />
//             </div>
//             {editMode && (
//               <div className="d-flex justify-content-center">
//                 <button className="btn btn-warning mb-4" onClick={handleUpdate}>Update</button>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import { Header } from "./Header";
import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState('');
  const [id, setId] = useState('');
  const [editMode, setEditMode] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const storedId = localStorage.getItem('user-id');
    if (storedId) {
      setId(storedId);
    }
    getdata();
  }, [id]);

  useEffect(() => {
    if (id) {
      getdata();
    }
  }, [id]);

  useEffect(() => {
    setFormData({
      id: user?.id || '',
      name: user?.name || '',
      email: user?.email || '',
      password: user?.password|| '',
    });
  }, [user]);

  async function getdata() {
    try {
      const response = await fetch(`http://localhost:3030/user/${id}`, {
        method: 'GET'
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await fetch(`http://localhost:3030/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      
      getdata();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="container-1 d-flex justify-content-center mt-5">
        <div className="card mb-3">
        <h3 className="text-center mt-3">This is my profile!</h3>
          <form style={{ width: "550px", height:"500px", marginLeft: "30px", marginRight: "30px" }}>
          <div className="ml-3">
                {editMode ? (
                  <button type="button" className="btn btn-success mt-4" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary mt-4" onClick={handleEditToggle}>
                    Edit
                  </button>
                )}
              </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="profile-pic"
                style={{ height: "100px", width: "100px", border: "2px solid red", borderRadius: "50%" }}
                src="https://rukminim2.flixcart.com/image/850/1000/xif0q/examination-pad/j/u/e/cute-cartoon-girl-flipdecor-original-imagz3m68hukkphh.jpeg?q=20&crop=false"
                alt="Profile Pic"
              />
            </div>
            <div>
              <label htmlFor="id" className="form-label">Id</label>
              <input type="number" id="id" className="form-control" value={formData.id} readOnly={!editMode} disabled />
            </div>
            <div>
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-control" value={formData.name} onChange={handleInputChange} readOnly={!editMode} />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" value={formData.email} onChange={handleInputChange} readOnly={!editMode} />
            </div>
            <div className="mb-5">
              <label htmlFor="number" className="form-label">password</label>
              <input type="password" id="password" className="form-control" value={formData.password} onChange={handleInputChange} readOnly={!editMode} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}