import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Head";
import Filters from "../Components/Filters";
const MoviesPage = () => {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 py-6">
        <Filters />
      </div>
    </Layout>
  );
};

export default MoviesPage;
