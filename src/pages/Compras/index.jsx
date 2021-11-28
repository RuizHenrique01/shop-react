import React, { useState, useEffect } from "react";
import AddCompra from "../../components/AddCompra";
import ButtonCreate from '../../components/ButtonCreate';
import Compra from "../../components/Compra";
import { api } from '../../services/api';
import './index.css';

const Compras = () => {

    const [compras, setCompras] = useState([]);
    const [isBoxInfoComprasOpen, setIsBoxInfoComprasOpen] = useState(false);

    function handleIsBoxInfoComprasOpen() {
        setIsBoxInfoComprasOpen(!isBoxInfoComprasOpen);
    }

    useEffect(() => {
        async function getCompras() {

            await api.get("/compras").then(response => {
                setCompras(response.data);
            });
        }

        getCompras();
    }, [compras]);

    return (
        <>
            <main className="compras-main">
                <ButtonCreate handleClick={handleIsBoxInfoComprasOpen}>
                    + Nova Compra
                </ButtonCreate>

                {
                    compras.map((result, index) => {
                        return <Compra key={result.id} compra={result} index={index} />
                    })
                }
            </main>

            {isBoxInfoComprasOpen && <AddCompra handleClickClose={handleIsBoxInfoComprasOpen} />}
        </>
    );
}

export default Compras;