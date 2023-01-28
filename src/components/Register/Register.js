import React, { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Register = () => {
  const { createUser, profileInfo, emailVerify } = useContext(AuthContext);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const fname = form.fname.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      alert("Password should be at least 6 character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setSuccess("Registerd successfully");
        handleProfile(fname, photo);
        handeVerify();
        toast.success("Verification email sent");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleProfile = (fname, photo) => {
    const profile = {
      displayName: fname,
      photoURL: photo,
    };
    profileInfo(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handeVerify = () => {
    emailVerify()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-[90.8vh] flex items-center justify-center">
      <div className="bg-gray-100 flex dark:bg-gray-900 rounded-2xl shadow-lg max-w-4xl p-5 items-center">
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1668184162944-7ce7cdf1fc35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="login"
          />
        </div>

        <div className="md:w-1/2 px-8 md:px-16 text-center">
          <h2 className="font-bold text-2xl dark:text-white text-[#002D74]">
            Sign Up
          </h2>
          <p className="text-xs mt-4 dark:text-white text-[#002D74]">
            Sign up now to access exclusive features and content!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="fname"
              placeholder="Full Name"
              required
            />
            <input
              className="p-2  rounded-xl border"
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />

              {showPassword ? (
                <svg
                  onClick={() => setShowPassword(!showPassword)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-2 description-2"
                  role="graphics-symbol"
                >
                  <title id="title-2">Check mark icon</title>
                  <desc id="description-2">Icon description here</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setShowPassword(!showPassword)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-2d description-2d"
                  role="graphics-symbol"
                >
                  <title id="title-2d">Check mark icon</title>
                  <desc id="description-2d">Icon description here</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              )}
            </div>

            <button
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105"
              type="submit"
            >
              Register
            </button>
          </form>

          <p className="text-center text-green-600 mt-4">{success}</p>
          <p className="text-center text-red-400 mt-4">{error}</p>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p className="dark:text-white">Already a member ?</p>
            <Link to="/login">
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
