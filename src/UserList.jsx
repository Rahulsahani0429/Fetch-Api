import { useEffect, useState } from "react";
import "./App.css";

function UserList() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     FetchData();
  //   }, []);

  // we can also write useEffect like this without creating a separate function

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
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

  return (
    <>
      <h1>Fetch data</h1>
      <ul className="list">
        <li className="list-header">
          <span>Name</span>
          <span>Age</span>
          <span>City</span>
        </li>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          user.map((item) => (
            <li key={item.id}>
              <p>Name: {item.name}</p>
              <p>Age: {item.age}</p>
              <p>City: {item.city}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default UserList;
