import React, { useContext, useRef } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/UserContext";

const Profile = () => {
  const { user, profileInfo } = useContext(AuthContext);

  const nameRef = useRef(user?.displayName);
  const photoRef = useRef(user?.photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const photo = photoRef.current.value;
    handleUpdate(name, photo);
    toast.success("Profile Updated successfully");
  };

  const handleUpdate = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    profileInfo(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2 className="text-center text-xl font-semibold my-8">Profile info</h2>
      <form className="w-1/3 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-8 ">
          <div className="relative my-6">
            <input
              id="id-b10"
              type="email"
              name="id-b10"
              defaultValue={user?.email}
              readOnly
              placeholder="Your email"
              className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="id-b10"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Your email
            </label>
          </div>
        </div>
        <div className="mb-8 ">
          <div className="relative my-6">
            <input
              id="id-b02"
              type="text"
              name="id-b02"
              defaultValue={user?.displayName}
              ref={nameRef}
              placeholder="your name"
              className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="id-b02"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Your name
            </label>
          </div>
        </div>
        <div className="mb-8 ">
          <div className="relative my-6">
            <input
              id="id-b04"
              type="text"
              name="id-b04"
              defaultValue={user?.photoURL}
              ref={photoRef}
              placeholder="Your Photo url"
              className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="id-b04"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Your Photo url
            </label>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none"
          >
            <span>Update Profile</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
