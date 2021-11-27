import React, { useState } from 'react';
import infoImage from '../../assets/info.svg';
import crossImage from '../../assets/cross.svg';
import './index.css'
import DeleteProduto from '../DeleteProduto';
import InfoProduto from '../InfoProduto';

const Produto = ({ nome, preco }) => {

    const [isBoxDeleteProdutoOpen, setIsBoxDeleteProdutoOpen] = useState(false);

    const [isBoxIfonProdutoOpen, setIsBoxIfonProdutoOpen] = useState(false);

    function handleOpenBoxDeleteProduto() {
        setIsBoxDeleteProdutoOpen(!isBoxDeleteProdutoOpen);
    }

    function handleOpenBoxInfoProduto() {
        setIsBoxIfonProdutoOpen(!isBoxIfonProdutoOpen);
    }

    return (
        <>
            <div className="produto-conteiner">
                <h3 className="produto-title">
                    {nome}
                </h3>

                <h3 className="produto-preco">
                    {"R$ " + preco}
                </h3>

                <button type='button' className="produto-button" onClick={handleOpenBoxInfoProduto}>
                    <img className="produto-icon" src={infoImage} alt="Icone de informações" />
                </button>

                <button type='button' className="produto-button" onClick={handleOpenBoxDeleteProduto}>
                    <img className="produto-icon" src={crossImage} alt="Icone de informações" />
                </button>
            </div>

            {isBoxIfonProdutoOpen && <InfoProduto handleClickClose={handleOpenBoxInfoProduto} />}

            {isBoxDeleteProdutoOpen && <DeleteProduto handleClickClose={handleOpenBoxDeleteProduto} />}
        </>
    );
};

export default Produto;