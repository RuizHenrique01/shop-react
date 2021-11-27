import React, { useState, useEffect } from "react";
import AddProduto from "../../components/AddProduto";
import ButtonCreate from '../../components/ButtonCreate';
import Produto from '../../components/Produto';
//import { api } from '../../services/api';
import './index.css';

const Compras = () => {

    return (
        <>
            <main className="compras-main">
                <ButtonCreate handleClick={handleOpenBox}>
                    + Nova Compra
                </ButtonCreate>

            </main>
        </>
    );
}

export default Compras;