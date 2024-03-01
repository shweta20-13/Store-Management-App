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
    role:'',
    image:'',
  });
  const [imageFile, setImageFile] = useState(null); 

  useEffect(() => {
    const storedId = localStorage.getItem('user-id');
    if (storedId) {
      setId(storedId);
    }
    getdata();
  }, []);

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
      role: user?.role || '',
      image: user?.image || '', 
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

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      const formDataWithImage = { ...formData };
      if (imageFile) {
        const imageURL = URL.createObjectURL(imageFile);
        formDataWithImage.image = imageURL;
        localStorage.setItem('user-image', imageURL); // Store image URL in local storage
      }
      await fetch(`http://localhost:3030/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithImage),
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
          <form style={{ width: "550px", height:"550px", marginLeft: "30px", marginRight: "30px" }}>
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
                src={formData.image || localStorage.getItem('user-image') || "https://rukminim2.flixcart.com/image/850/1000/xif0q/examination-pad/j/u/e/cute-cartoon-girl-flipdecor-original-imagz3m68hukkphh.jpeg?q=20&crop=false"}
                alt="Profile Pic"
              />
              {editMode && (
                <div style={{cursor:"pointer",width:"20px", height:"20px", borderRadius:"50%", border:"1px solid gray",background:"yellow",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"190px",left:"335px"}}>
                  <label htmlFor="upload" style={{cursor:"pointer",width:"11px", height:"25px" ,color:"gray"}}>+</label>
                  <input type="file" id="upload" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                </div>
              )}
            </div>
            <div>
              <label htmlFor="id" className="form-label">Id</label>
              <input type="text" id="id" className="form-control" value={formData.id} readOnly={!editMode} disabled />
            </div>
            <div>
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-control" value={formData.name} onChange={handleInputChange} readOnly={!editMode} />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" value={formData.email} onChange={handleInputChange} readOnly={!editMode} />
            </div>
            <div>
              <label htmlFor="number" className="form-label">password</label>
              <input type="password" id="password" className="form-control" value={formData.password} onChange={handleInputChange} readOnly={!editMode} />
            </div>
            <div>
              <label htmlFor="number" className="form-label">Role</label>
              <input type="text" id="role" className="form-control" value={formData.role} onChange={handleInputChange} readOnly={!editMode} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



// import { Header } from "./Header";
// import { useState, useEffect } from "react";

// export default function Profile() {
//   const [user, setUser] = useState('');
//   const [id, setId] = useState('');
//   const [editMode, setEditMode] = useState('');
//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     email: '',
//     password: '',
//     role:'',
//     image:'',
//   });
//   const [imageFile, setImageFile] = useState(null); 

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
//   }, [id]);

//   useEffect(() => {
//     setFormData({
//       id: user?.id || '',
//       name: user?.name || '',
//       email: user?.email || '',
//       password: user?.password|| '',
//       role: user?.role || '',
//       image: user?.image || '',
//     });
//   }, [user]);

//   async function getdata() {
//     try {
//       const response = await fetch(`http://localhost:3030/user/${id}`, {
//         method: 'GET'
//       });
//       const data = await response.json();
//       setUser(data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   }

//   const handleEditToggle = () => {
//     setEditMode(!editMode);
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleSave = async () => {
//     try {
//       const formDataWithImage = { ...formData };
//       if (imageFile) {
//         const formData = new FormData();
//         formData.append('file', imageFile);
//         const response = await fetch(`http://localhost:3030/upload`, {
//           method: 'POST',
//           body: formData
//         });
//         const data = await response.json();
//         formDataWithImage.image = data.filePath;
//       }
//       await fetch(`http://localhost:3030/user/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formDataWithImage),
//       });
      
//       getdata();
//       setEditMode(false);
//     } catch (error) {
//       console.error("Error updating user data:", error);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <Header />
//       <div className="container-1 d-flex justify-content-center mt-5">
//         <div className="card mb-3">
//         <h3 className="text-center mt-3">This is my profile!</h3>
//           <form style={{ width: "550px", height:"550px", marginLeft: "30px", marginRight: "30px" }}>
//           <div className="ml-3">
//                 {editMode ? (
//                   <button type="button" className="btn btn-success mt-4" onClick={handleSave}>
//                     Save
//                   </button>
//                 ) : (
//                   <button type="button" className="btn btn-primary mt-4" onClick={handleEditToggle}>
//                     Edit
//                   </button>
//                 )}
//               </div>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <img
//                 className="profile-pic"
//                 style={{ height: "100px", width: "100px", border: "2px solid red", borderRadius: "50%" }}
//                 src={formData.image || localStorage.getItem('user-image') || "https://rukminim2.flixcart.com/image/850/1000/xif0q/examination-pad/j/u/e/cute-cartoon-girl-flipdecor-original-imagz3m68hukkphh.jpeg?q=20&crop=false"}
//                 alt="Profile Pic"
//               />
//               {editMode && (
//                 <div style={{cursor:"pointer",width:"20px", height:"20px", borderRadius:"50%", border:"1px solid gray",background:"yellow",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"190px",left:"335px"}}>
//                   <label htmlFor="upload" style={{cursor:"pointer",width:"11px", height:"25px" ,color:"gray"}}>+</label>
//                   <input type="file" id="upload" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
//                 </div>
//               )}
//             </div>
//             <div>
//               <label htmlFor="id" className="form-label">Id</label>
//               <input type="text" id="id" className="form-control" value={formData.id} readOnly={!editMode} disabled />
//             </div>
//             <div>
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" id="name" className="form-control" value={formData.name} onChange={handleInputChange} readOnly={!editMode} />
//             </div>
//             <div>
//               <label htmlFor="email" className="form-label">Email</label>
//               <input type="email" id="email" className="form-control" value={formData.email} onChange={handleInputChange} readOnly={!editMode} />
//             </div>
//             <div>
//               <label htmlFor="number" className="form-label">password</label>
//               <input type="password" id="password" className="form-control" value={formData.password} onChange={handleInputChange} readOnly={!editMode} />
//             </div>
//             <div>
//               <label htmlFor="number" className="form-label">Role</label>
//               <input type="text" id="role" className="form-control" value={formData.role} onChange={handleInputChange} readOnly={!editMode} />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
