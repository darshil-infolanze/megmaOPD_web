import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Button, CardBody, Input, Typography } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(formData)).unwrap();
    } catch (error) {
      // Error handled by Redux
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-violet-100">
      <section className="w-full max-w-md bg-white border border-violet-200 rounded-2xl shadow-xl px-8 py-10">
        {/* Logo and Welcome */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src={logo}
              alt="Magma OPD"
              className="w-14 h-14 rounded-full "
            />
            <Typography
              variant="h3"
              className="font-extrabold text-violet-600 tracking-tight"
            >
              Magma <span className="text-slate-800">OPD</span>
            </Typography>
          </div>
          <Typography
            variant="paragraph"
            className="text-gray-600 text-base mt-2"
          >
            Admin Login
          </Typography>
        </div>

        {/* Login Form */}
        <CardBody className="p-0">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Email */}
            <div>
              <Typography
                variant="small"
                className="mb-1 text-gray-700 font-medium"
              >
                Email Address <span className="text-red-500">*</span>
              </Typography>
              <Input
                type="email"
                variant="outlined"
                placeholder="name@mail.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="username"
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
            </div>

            {/* Password */}
            <div>
              <Typography
                variant="small"
                className="mb-1 text-gray-700 font-medium"
              >
                Password <span className="text-red-500">*</span>
              </Typography>
              <div className="relative">
                <Input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                  className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2/4 -translate-y-1/2"
                  tabIndex={-1}
                >
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5 text-violet-600" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-violet-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 flex items-center justify-center text-base font-semibold rounded-md py-2"
              fullWidth
              disabled={false}
            >
              Sign In
            </Button>
          </form>
        </CardBody>
      </section>
    </div>
  );
}

export default Login;
