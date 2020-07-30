import React, { useState, useEffect } from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'



function CadastrarCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    
    const [ valores, setValores ] = useState([valoresIniciais]);
    const [ categorias, setCategorias ] = useState([]);

    function setValor(e){
        // setValores({...valores, nome: e.target.value})

        const chave = e.target.getAttribute('name');
        const valor = e.target.value;
        setValores({
            ...valores,
            [chave]: valor
        })

    }

    function criarCategoria(e){
        e.preventDefault();
        setCategorias([
            ...categorias, valores
        ]);
    }

    useEffect(()=>{
        const URL = 'http://localhost:8081/categorias'
        fetch(URL)
            .then(async (resp)=>{
                const respostas = await resp.json();
                setCategorias([
                    ...respostas
                ])
            });
    }, [
        //values.nome atualiza somente aqui
    ]);

    return(
        <Template>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={criarCategoria}>
                <FormField type="text" name="nome" value={valores.nome} onChange={setValor}>Nome da Categoria: </FormField>
                
                <FormField type="textarea" name="descricao" value={valores.descricao} onChange={setValor}>Descricao: </FormField>

                <FormField type="color" name="cor" value={valores.cor} onChange={setValor}>Cor: </FormField>

                <Button>
                    Cadastrar
                </Button>
                
            </form>

            {categorias.length === 0 &&(
                <div>
                    Carregando...
                </div>
            )}

            <ul>
                {categorias.map((categoria, index)=>{
                    return(
                        <li key={index}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            
            <Link to="/">
            Ir para home
            </Link>
        </Template>
    )
}

export default CadastrarCategoria;