import React from 'react';
import Box from '../Box';
import crossImage from '../../assets/cross.svg';
import './index.css'

const InfoCompra = ({ compra, index, handleClickClose }) => {

    function dataFormat(data) {
        const newData = new Date(data);

        const date = `${newData.getDate()}-${newData.getMonth() + 1}-${newData.getFullYear()}`;
        const hours = `${newData.getHours()}:${newData.getMinutes() < 10 ? "0" + newData.getMinutes() : newData.getMinutes()}`

        return date + " " + hours;
    }

    return (
        <Box handleClick={handleClickClose}>
            <button className="box-close-button" onClick={() => handleClickClose()}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <h3 className="info-compra-title">{`Compra ${index + 1}`}</h3>

            <p className="info-compra-informacoes">{`data: ${dataFormat(compra.data_criacao)}`}</p>

            <p className="info-compra-informacoes">{`status: ${compra.status}`}</p>

            <p className="info-compra-informacoes">{`Tipo de Pagamento: ${compra.tipo_pagamento}`}</p>

            <p className="info-compra-informacoes">{`Total: R$ ${compra.total}`}</p>

            <div className="info-compra-produtos">
                {
                    compra.compra_produtos.map(result => {
                        return (<div key={result.id} className="info-produtos-informacoes">
                            <span className="info-produtos-title">{result.nome}</span>
                            <span className="info-produtos-title">{`R$ ${result.preco}`}</span>
                        </div>)
                    })
                }
            </div>

        </Box>
    );
}

export default InfoCompra;