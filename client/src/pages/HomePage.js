import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      {/* <Link to="/guest">
        <Button variant="outlined" color="error">
          Guest
        </Button>
      </Link> */}
    </Layout>
  );
};
export default HomePage;
