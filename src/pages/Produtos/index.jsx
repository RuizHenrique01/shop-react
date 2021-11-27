import React, { useState } from "react";
import AddProduto from "../../components/AddProduto";
import ButtonCreate from '../../components/ButtonCreate';
import Produto from '../../components/Produto';
import './index.css';

const Produtos = () => {

    const [isBoxOpen, setIsBoxOpen] = useState(false)

    function handleOpenBox() {
        setIsBoxOpen(!isBoxOpen);
    }

    return (
        <>
            <main className="produtos-main">
                <ButtonCreate handleClick={handleOpenBox}>
                    + Novo Produto
                </ButtonCreate>

                <Produto nome="Porta" preco="1.000" />
            </main>

            {isBoxOpen && <AddProduto handleClickClose={handleOpenBox} />}
        </>
    );
}

export default Produtos;