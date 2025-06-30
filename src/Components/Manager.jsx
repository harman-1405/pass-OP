import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("password");
    let passwordArray;
    if (passwords) {
      setpasswordArray((passwordArray = JSON.parse(passwords)));
    }
  }, []);

  const showPassword = () => {
    // alert("show the password");
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/eyecross.png";
    }
  };
  const savePassword = () => {
    //console.log(form);
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-purple-400">&lt;</span>
          Pass
          <span className="text-purple-400">OP/&gt;</span>
        </h1>
        <p className="text-purple-900 text-lg text-center">
          Your own Password Manager
        </p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border border-purple-300 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-purple-300 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-purple-300 w-full p-4 py-1"
                type="text"
                name="password"
                id=""
              />
              <span
                className="absolute right-0 top-0 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-2"
                  width={32}
                  src="icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-purple-300 rounded-full px-8 py-2 w-fit hover:bg-purple-500 text-white gap-4 border border-purple-800">
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to display!!</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full overflow-hidden rounded-md ">
          
            <thead className=" bg-purple-400 text-white">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
              </tr>
            </thead>
            <tbody className="bg-purple-100">
                {passwordArray.map((item,index)=>{
                    return <tr key={index}>
                <td className="py-2 border-2 border-white  text-center w-32">
                  <a href={item.site} target='_blank'>{item.site}</a>
                </td>
                <td className="py-2 border-2 border-white  text-center w-32">
                  {item.username}
                </td>
                <td className="py-2 border-2 border-white  text-center w-32">
                  {item.password}
                </td>
              </tr>
                })}
              
            </tbody>
          </table>}
        </div>
      </div>
    </div>
  );
};

export default Manager;
