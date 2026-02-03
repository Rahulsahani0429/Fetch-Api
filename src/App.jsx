import { Routes, Route } from "react-router-dom";
import AddUser from "./AddUser";
import UserList from "./UserList";
import Navbar from "./Navbar";
import PageNot from "./PageNot";

import DeleteUser from "./DeleteUser";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="*" element={<PageNot />} />

        <Route path="/delete/:id" element={<DeleteUser></DeleteUser>} />
      </Routes>
    </>
  );
}

export default App;
