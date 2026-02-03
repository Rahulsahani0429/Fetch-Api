import { useEffect, useState } from "react";
import "./App.css";

function UserList() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ApiUrl = "http://localhost:3000/users";

  //   useEffect(() => {
  //     FetchData();
  //   }, []);

  // we can also write useEffect like this without creating a separate function

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(ApiUrl);
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();

        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  const handleDelete = async (id) => {
    let res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    // const data = await res.json();
    await res.json(res);
    // console.log("recored deleted", data);
    // alert("recored deleted", data);
    console.log("User with id", id, "deleted.");
  };

  return (
    <>
      <h1>Fetch data</h1>
      <ul className="list">
        <li className="list-header">
          <span>Name</span>
          <span>Age</span>
          <span>City</span>
          <span>Action</span>
        </li>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          user.map((item) => (
            <li key={item.id}>
              <p> {item.name}</p>
              <p>{item.age}</p>
              <p> {item.city}</p>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default UserList;

// import { useEffect, useState } from "react";
// import "./App.css";

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // 🔹 GET users (page load)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/users");

//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }

//         const data = await response.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // 🔹 DELETE user (button click)
//   const handleDelete = async (id) => {
//     // const confirmDelete = window.confirm(
//     //   "Are you sure you want to delete this user?",
//     // );

//     // if (!confirmDelete) return;

//     try {
//       const response = await fetch(`http://localhost:3000/users/${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete user");
//       }

//       // 🔹 Update UI without re-fetching
//       setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
//     } catch (err) {
//       setError(err);
//     }
//   };

//   // 🔹 UI states
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2 style={{ color: "red" }}>{error.message}</h2>;
//   }

//   return (
//     <>
//       <h1>User List</h1>

//       <ul className="list">
//         <li className="list-header">
//           <span>Name</span>
//           <span>Age</span>
//           <span>City</span>
//           <span>Action</span>
//         </li>

//         {users.length === 0 ? (
//           <p>No users found</p>
//         ) : (
//           users.map((item) => (
//             <li key={item.id}>
//               <span>{item.name}</span>
//               <span>{item.age}</span>
//               <span>{item.city}</span>
//               <button onClick={() => handleDelete(item.id)}>Delete</button>
//             </li>
//           ))
//         )}
//       </ul>
//     </>
//   );
// }

// export default UserList;
