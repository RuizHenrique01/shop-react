import { React, useState, useEffect } from 'react';
import crossImage from '../../assets/cross.svg';
import Box from '../Box';
import Input from '../Input';
import ButtonCreate from '../ButtonCreate';
import ErrorMessage from '../ErrorMessage';
import './index.css';
import { api } from '../../services/api';

const AddCompra = ({ handleClickClose }) => {

    const [tipo_pagamento, setTipo_Pagamento] = useState('');
    const [status, setStatus] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [produtosCompra, setProdutosCompra] = useState([]);
    const [isUnValidated, setUnValidated] = useState(false);
    let arrProdutos = [];

    function handleInputTipoPagamento(e) {
        setTipo_Pagamento(e.target.value);
    }

    function handleInputStatus(e) {
        setStatus(e.target.value);
    }

    function hanldeChoiceProduto(e, produto) {
        arrProdutos = produtos;
        if (e.target.checked) {
            arrProdutos.push({ id: produto.id });
        } else {
            arrProdutos = arrProdutos.filter(p => p.id !== produto.id);
        }
        setProdutos(arrProdutos);
        console.log(produtos);
    }

    useEffect(() => {
        async function getProdutos() {

            await api.get("/produtos").then(response => {
                setProdutosCompra(response.data);
            });
        }

        getProdutos();
    }, [produtosCompra]);

    async function createCompra() {
        await api.post("/compras", {
            produtos,
            tipo_pagamento,
            status
        });
        handleClickClose();
    }

    return (
        <Box handleClick={handleClickClose}>
            <button className="box-close-button" onClick={() => handleClickClose()}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <legend className="add-compra-title">
                <h3>Faça uma nova compra</h3>
            </legend>

            <label className="add-compra-label">Tipo de Pagamento:</label>
            <div className="add-compra-input">
                <Input type="text" name="tipo_pagamento" onChange={handleInputTipoPagamento}
                    required={true} autoComplete="off" />
            </div>

            {isUnValidated && <ErrorMessage>Campo tipo de pagamento é obrigatório</ErrorMessage>}

            <label className="add-compra-label">Status:</label>
            <div className="add-compra-input">
                <Input type="status" name="status"
                    onChange={handleInputStatus} autoComplete="off" />
            </div>

            {isUnValidated && <ErrorMessage>Campo status é obrigatório</ErrorMessage>}

            <div className="add-compra-produtos">
                {
                    produtosCompra.map(result => {
                        return (
                            <div key={result.id} className="info-produtos-informacoes">
                                <input type="checkbox" id={result.id} className="info-produtos-checkbox"
                                    onChange={(e) => hanldeChoiceProduto(e, result)} />
                                <label className="produto-label" htmlFor={result.id}>
                                    <span className="produto-check" />
                                    <span className="info-produtos-title first-child">{result.nome}</span>
                                    <span className="info-produtos-title last-child">{`R$ ${result.preco}`}</span>
                                </label>
                            </div>
                        );
                    })
                }
            </div>

            <div className="add-compra-button">
                <ButtonCreate type='button' handleClick={createCompra}>
                    Criar
                </ButtonCreate>
            </div>
        </Box>
    );
}

export default AddCompra;