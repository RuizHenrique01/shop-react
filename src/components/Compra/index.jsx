import React, { useState } from 'react';
import InfoCompra from '../InfoCompra';
import './index.css'

const Compra = ({ compra, index }) => {

    const [isBoxOpen, setIsBoxOpen] = useState(false);

    function handleBox() {
        setIsBoxOpen(!isBoxOpen);
    }

    return (
        <>
            <div className="compra-conteiner" onClick={handleBox}>
                <h3 className="compra-title">
                    {`Compra ${index + 1}`}
                </h3>

                <h3 className="compra-preco">
                    {compra.total !== undefined ? `R$ ${compra.total}` : null}
                </h3>
            </div>

            {isBoxOpen && <InfoCompra compra={compra} handleClickClose={handleBox} index={index} />}
        </>
    );
};

export default Compra;