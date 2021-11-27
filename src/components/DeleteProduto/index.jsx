import React from 'react';
import crossImage from '../../assets/cross.svg';
import DeleteMessage from '../DeleteMessage';
import ButtonCreate from '../ButtonCreate';
import './index.css';

const DeleteProduto = ({ handleClickClose, handleClick }) => {
    return (
        <DeleteMessage handleClick={handleClickClose}>

            <button className="box-close-button" onClick={handleClickClose}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <h3 className='title-delete-produto'>Deseja realmente excluir o produto?</h3>

            <p className='message-delete-produto'>Clicando no botão de confirmação o produto será excluido com todas as suas informações permanentemente!</p>

            <div className="buttons-delete-produto">
                <ButtonCreate type='button' handleClick={() => {
                    handleClickClose();
                }}>Sim</ButtonCreate>

                <ButtonCreate type='button' handleClick={handleClickClose}>Cancelar</ButtonCreate>
            </div>
        </DeleteMessage>
    );
}

export default DeleteProduto;