import { React, useState } from 'react';
import crossImage from '../../assets/cross.svg';
import Box from '../Box';
import Input from '../Input';
import ButtonCreate from '../ButtonCreate';
import ErrorMessage from '../ErrorMessage';
import './index.css';

const AddProduto = ({ handleClickClose }) => {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
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

    async function createProject() {
        if (nome && preco) {
            handleClickClose();
        } else {
            setUnValidated(true);
        }
    }

    return (
        <Box handleClick={handleClickClose}>
            <button className="box-close-button" onClick={() => handleClickClose()}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <legend className="add-produto-title">
                <h3>Adicione um novo produto</h3>
            </legend>

            <label className="add-produto-label">Nome:</label>
            <div className="add-produto-input">
                <Input type="text" name="nome" onChange={handleInputName}
                    required={true} autoComplete="off" />
            </div>

            {isUnValidated && <ErrorMessage>Campo nome é obrigatório</ErrorMessage>}

            <label className="add-produto-label">Descrição:</label>
            <div className="add-produto-input">
                <Input type="text" name="descricao"
                    onChange={handleInputDescription} autoComplete="off" />
            </div>

            <label className="add-produto-label">Preço:</label>
            <div className="add-produto-input">
                <Input type="text" name="nome" onChange={handleInputPrice}
                    required={true} autoComplete="off" />
            </div>

            {isUnValidated && <ErrorMessage>Campo preço é obrigatório</ErrorMessage>}

            <div className="add-produto-button">
                <ButtonCreate type='button' handleClick={createProject}>
                    Criar
                </ButtonCreate>
            </div>
        </Box>
    );
}

export default AddProduto;