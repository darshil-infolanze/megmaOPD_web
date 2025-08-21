// src/components/FormDataResetWatcher.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearForm } from "../redux/formSlice";

const FormDataResetWatcher = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const formRoutes = [
      "/selfinformation",
      "/member1",
      "/member2",
      "/member3",
    ];

    if (!formRoutes.includes(location.pathname)) {
      // Reset Redux form state
      dispatch(clearForm());

      // Clear any manually saved data in localStorage
      localStorage.removeItem("selfInfo");
      localStorage.removeItem("member1");
      localStorage.removeItem("member2");
      localStorage.removeItem("member3");
    }
  }, [location, dispatch]);

  return null; // No visible output
};

export default FormDataResetWatcher;
