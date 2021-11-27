import React, { useState } from 'react';
import infoImage from '../../assets/info.svg';
import crossImage from '../../assets/cross.svg';
import './index.css'
import DeleteProduto from '../DeleteProduto';
import InfoProduto from '../InfoProduto';

const Produto = ({ produto }) => {

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
                    {produto.nome}
                </h3>

                <h3 className="produto-preco">
                    {"R$ " + produto.preco}
                </h3>

                <button type='button' className="produto-button" onClick={handleOpenBoxInfoProduto}>
                    <img className="produto-icon" src={infoImage} alt="Icone de informações" />
                </button>

                <button type='button' className="produto-button" onClick={handleOpenBoxDeleteProduto}>
                    <img className="produto-icon" src={crossImage} alt="Icone de informações" />
                </button>
            </div>

            {isBoxIfonProdutoOpen && <InfoProduto handleClickClose={handleOpenBoxInfoProduto} produto={produto} />}

            {isBoxDeleteProdutoOpen && <DeleteProduto handleClickClose={handleOpenBoxDeleteProduto} produto={produto} />}
        </>
    );
};

export default Produto;