import { React, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const AdminDashboard = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users`);
        const data = await response.json();
        setusers(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserData();
  }, []);

  // Delete User Function start Here...........
  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/${userId}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (result.success) {
        alert("User deleted successfully");
        setusers(users.filter((user) => user._id !== userId));
      } else {
        alert(result.message || "Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Something went wrong while deleting the user.");
    }
  };

  return (
    <section className="flex h-screen overflow-hidden">
      {/* Left side container */}
      <div className="w-[20%] bg-slate-700 min-h-screen flex flex-col justify-start items-center">
        <div className="bg-gray-200 w-[90%] h-[30%] mt-2 rounded-md flex flex-col justify-center items-center font-mono">
          <h1 className="text-3xl">Login User</h1>
          <p className="text-3xl font-semibold">{users.length}</p>
        </div>
      </div>

      {/* Right side container */}
      <div className="w-[80%] bg-slate-500 min-h-screen flex flex-col">
        <h1 className="text-center text-2xl font-mono font-semibold py-4 bg-gray-300 m-2 rounded-md text-black">
          Admin Dashboard
        </h1>

        {/* Wrapper with fixed height and overflow that contains the table */}
        <div className="m-2 flex-1 overflow-hidden flex flex-col">
          {/* Table container with overflow-y-auto for scrolling */}
          <div className="overflow-y-auto flex-1 rounded-md scrollbar-hide">
            <table className="w-full text-left border-collapse border-gray-300 text-black">
              {/* Table Head - This will remain fixed */}
              <thead className="bg-gray-100 sticky top-0">
                <tr className="border-b-4 border-gray-400">
                  <th className="h-12 px-6 text-md font-semibold text-center rounded-tl-md">
                    S.No.
                  </th>
                  <th className="h-12 px-6 text-md font-semibold text-center">
                    Profile
                  </th>
                  <th className="h-12 px-6 text-md font-semibold text-center">
                    User Name
                  </th>
                  <th className="h-12 px-6 text-md font-semibold text-center">
                    User Email
                  </th>
                  <th className="h-12 px-6 text-md font-semibold text-center">
                    Gender
                  </th>
                  <th className="h-12 px-6 text-md font-semibold text-center">
                    DOB
                  </th>
                  <th className="h-12 px-6 text-md font-semibold text-center rounded-tr-md">
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user._id}
                    className="bg-white border border-gray-300"
                  >
                    <td className="h-16 px-6 text-center">{index + 1}</td>
                    <td className="h-16 px-6 flex items-center justify-center">
                      <img
                        src={user.image}
                        alt="profile"
                        className="w-14 h-14 object-cover rounded"
                      />
                    </td>
                    <td className="h-16 px-6 text-center">{user.name}</td>
                    <td className="h-16 px-6 text-center">{user.email}</td>
                    <td className="h-16 px-6 text-center">{user.gender}</td>
                    <td className="h-16 px-6 text-center">{user.birthDate}</td>
                    <td className="h-16 px-6 text-center">
                      <button
                        className="text-3xl text-red-600"
                        onClick={() => handleDelete(user._id)}
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
