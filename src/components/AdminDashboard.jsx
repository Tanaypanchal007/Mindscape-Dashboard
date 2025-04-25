import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const AdminDashboard = () => {
  // Sample JSON data
  const usersData = [
    {
      id: 1,
      name: "Tanay Panchal",
      email: "tanaypanchal7@gmail.com",
      gender: "Male",
      dob: "10-12-2004",
      profile:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/24544933-ca76-403b-b102-56b18c235d74/ba8e5245-deaf-4acb-af8d-0ab1ba2d42a8.png",
    },
    {
      id: 2,
      name: "Riya Mehta",
      email: "riya.mehta@example.com",
      gender: "Female",
      dob: "02-08-2003",
      profile:
        "https://static.vecteezy.com/system/resources/thumbnails/028/794/706/small_2x/cartoon-cute-school-boy-photo.jpg",
    },
    {
      id: 2,
      name: "Riya Mehta",
      email: "riya.mehta@example.com",
      gender: "Female",
      dob: "02-08-2003",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmW8a3sxylC60pFS2esg48yK2xyVhy_KgOg&s",
    },
  ];

  return (
    <section className="flex">
      {/* Left side container */}
      <div className="w-[20%] bg-slate-700 min-h-screen flex flex-col justify-start items-center">
        <div className="bg-gray-200 w-[90%] h-[30%] mt-2 rounded-md flex flex-col justify-center items-center font-mono">
          <h1 className="text-3xl ">Login User</h1>
          <p className="text-3xl font-semibold">03</p>
        </div>
      </div>

      {/* Right side container */}
      <div className="w-[80%] bg-slate-500 min-h-screen">
        <h1 className="text-center text-2xl font-mono font-semibold py-4 bg-gray-300 m-2 rounded-md text-black">
          Admin Dashboard
        </h1>

        <section className="m-2">
          <table className="w-full text-left border-collapse border-gray-300 text-black rounded-md">
            {/* Table Head */}
            <thead className="bg-gray-100">
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
              {usersData.map((user, index) => (
                <tr
                  key={user.id}
                  className="bg-white border border-gray-300 rounded-md"
                >
                  <td className="h-16 px-6 text-center">{index + 1}</td>
                  <td className="h-16 px-6 flex items-center justify-center">
                    <img
                      src={user.profile}
                      alt="profile"
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="h-16 px-6 text-center">{user.name}</td>
                  <td className="h-16 px-6 text-center">{user.email}</td>
                  <td className="h-16 px-6 text-center">{user.gender}</td>
                  <td className="h-16 px-6 text-center">{user.dob}</td>
                  <td className="h-16 px-6 text-center">
                    <button className="text-3xl text-red-600">
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </section>
  );
};

export default AdminDashboard;
