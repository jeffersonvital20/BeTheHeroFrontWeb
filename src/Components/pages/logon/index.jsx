import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../../services/api';
import './style.css';
import heroesImg from '../../../assets/heroes.png';
import logoImg from '../../../assets/logo.svg';


export default function Logon(){   
    const [id, setId] = useState('');   
    
    async function handleLogin(e){
       e.preventDefault();
        console.log({id});
        const data = { id }
       try{
            const response = await api.get('sessions', data);
            console.log(response.data.name);
       } catch(err){
            alert('Falha no login');
       };
       console.log(data);
    };
    
    return(
       <div className="logon-container">
           <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                     <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
           </section>

           <img src={heroesImg} alt="heroes"></img>
       </div>
    );
}

