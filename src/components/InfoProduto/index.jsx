import { React, useState } from 'react';
import crossImage from '../../assets/cross.svg';
import Box from '../Box';
import Input from '../Input';
import ButtonCreate from '../ButtonCreate';
import ErrorMessage from '../ErrorMessage';
import { api } from '../../services/api';
import './index.css';

const InfoProduto = ({ handleClickClose, produto }) => {

    const [nome, setNome] = useState(produto.nome);
    const [descricao, setDescricao] = useState(produto.descricao);
    const [preco, setPreco] = useState(produto.preco);
    const [isUnValidated, setUnValidated] = useState(false);

    function handleInputName(e) {
        setUnValidated(false);
        setNome(e.target.value);
    }

    function handleInputDescription(e) {
        setDescricao(e.target.value);
    }

    function handleInputPrice(e) {
        setPreco(e.target.value);
    }

    async function updateProject() {
        if (nome && preco) {
            try {
                await api.put(`/produtos/${produto.id}`, {
                    nome,
                    descricao,
                    preco
                });
                handleClickClose();
            } catch (err) {
                alert("Error: Por favor verifique se já existe um produto com esse nome")
            }

        } else {
            setUnValidated(true);
        }
    }

    return (
        <Box handleClick={handleClickClose}>
            <button className="box-close-button" onClick={() => handleClickClose()}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <legend className="info-produto-title">
                <h3>Informações do Produto</h3>
            </legend>

            <label className="info-produto-label">Nome:</label>
            <div className="info-produto-input">
                <Input type="text" name="nome" onChange={handleInputName}
                    required={true} autoComplete="off" value={nome} />
            </div>

            {isUnValidated && <ErrorMessage>Campo nome é obrigatório</ErrorMessage>}

            <label className="info-produto-label">Descrição:</label>
            <div className="info-produto-input">
                <Input type="text" name="descricao"
                    onChange={handleInputDescription} autoComplete="off" value={descricao} />
            </div>

            <label className="info-produto-label">Preço:</label>
            <div className="info-produto-input">
                <Input type="text" name="nome" onChange={handleInputPrice}
                    required={true} autoComplete="off" value={preco} />
            </div>

            {isUnValidated && <ErrorMessage>Campo preço é obrigatório</ErrorMessage>}

            <div className="info-produto-button">
                <ButtonCreate type='button' handleClick={updateProject}>
                    Salvar
                </ButtonCreate>
            </div>
        </Box>
    );
}

export default InfoProduto;