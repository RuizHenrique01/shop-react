import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import Compras from "../Compras";
import Produtos from "../Produtos";

const Home = () => {
    return (<>
        <Header />
        <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/compras" element={<Compras />} />
        </Routes>
    </>);
}

export default Home;