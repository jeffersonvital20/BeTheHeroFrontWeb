import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi'

import './style.css'
import logoImg from '../../../assets/logo.svg'

export default function Register(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um heroi para resolver isso.
                    </p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o home
                    </Link>
                </section>
                <form action="">
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>
                    <button className="" type="submit">Cancelar</button>
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>

        </div>

    
    );
}