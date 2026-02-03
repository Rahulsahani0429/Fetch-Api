// // import { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import "./App.css";

// // function EditUser() {
// //   const { id } = useParams(); // get id from URL
// //   const navigate = useNavigate();

// //   const [name, setName] = useState("");
// //   const [age, setAge] = useState("");
// //   const [city, setCity] = useState("");
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // 🔹 GET single user by id (page load)
// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:3000/users/${id}`);

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch user");
// //         }

// //         const data = await response.json();
// //         setName(data.name);
// //         setAge(data.age);
// //         setCity(data.city);
// //       } catch (err) {
// //         setError(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUser();
// //   }, [id]);

// //   // 🔹 PUT update user
// //   const handleUpdate = async (e) => {
// //     e.preventDefault();

// //     const updatedUser = { name, age, city };

// //     try {
// //       const response = await fetch(`http://localhost:3000/users/${id}`, {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(updatedUser),
// //       });

// //       if (!response.ok) {
// //         throw new Error("Failed to update user");
// //       }

// //       // 🔹 Go back to list page after update
// //       navigate("/");
// //     } catch (err) {
// //       setError(err);
// //     }
// //   };

// //   // 🔹 UI states
// //   if (loading) {
// //     return <h2>Loading user...</h2>;
// //   }

// //   if (error) {
// //     return <h2 style={{ color: "red" }}>{error.message}</h2>;
// //   }

// //   return (
// //     <>
// //       <h1>Edit User</h1>

// //       <form onSubmit={handleUpdate} className="edit-form">
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="number"
// //           placeholder="Age"
// //           value={age}
// //           onChange={(e) => setAge(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="text"
// //           placeholder="City"
// //           value={city}
// //           onChange={(e) => setCity(e.target.value)}
// //           required
// //         />

// //         <button type="submit">Update User</button>
// //       </form>
// //     </>
// //   );
// // }

// // export default EditUser;

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function EditUser() {
//   const { id } = useParams(); // 👈 gets real id
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [city, setCity] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // 🔹 GET single user
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/users/${id}`);
//         if (!res.ok) throw new Error("User not found");

//         const data = await res.json();
//         setName(data.name);
//         setAge(data.age);
//         setCity(data.city);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [id]);

//   // 🔹 PUT update
//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`http://localhost:3000/users/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, age, city }),
//       });

//       if (!res.ok) throw new Error("Failed to update user");

//       navigate("/"); // back to list
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

//   return (
//     <div>
//       <h1>Edit User</h1>

//       <form onSubmit={handleUpdate}>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           required
//         />
//         <br />

//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           placeholder="Age"
//           required
//         />
//         <br />

//         <input
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="City"
//           required
//         />
//         <br />

//         <button type="submit">Update User</button>
//       </form>
//     </div>
//   );
// }
