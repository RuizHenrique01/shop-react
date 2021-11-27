import React, { useState, useEffect } from "react";
import AddProduto from "../../components/AddProduto";
import ButtonCreate from '../../components/ButtonCreate';
import Produto from '../../components/Produto';
import { api } from '../../services/api';
import './index.css';

const Produtos = () => {

    const [produtos, setProdutos] = useState([]);
    const [isBoxOpen, setIsBoxOpen] = useState(false)

    function handleOpenBox() {
        setIsBoxOpen(!isBoxOpen);
    }

    useEffect(() => {
        async function getProdutos() {

            await api.get("/produtos").then(response => {
                setProdutos(response.data);
            });
        }

        getProdutos();
    }, [isBoxOpen, produtos]);

    return (
        <>
            <main className="produtos-main">
                <ButtonCreate handleClick={handleOpenBox}>
                    + Novo Produto
                </ButtonCreate>

                {
                    produtos.map(result => {
                        return <Produto key={result.id} produto={result} />
                    })
                }

            </main>

            {isBoxOpen && <AddProduto handleClickClose={handleOpenBox} />}
        </>
    );
}

export default Produtos;