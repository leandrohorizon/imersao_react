import React, {useEffect, useState} from 'react';
import Template from '../../../components/Template'
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../api/videos';
import categoriasRepository from '../../../api/categorias';

function CadastroVideo(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoriasTitulo = categorias.map((categoria)=>categoria.titulo);
    const {setValor, valores} = useForm({
        titulo: '',
        url: '',
        categoria: ''
    });

    useEffect(()=>{
        categoriasRepository.getAll()
            .then((categoriasFromServer)=>{
                setCategorias(categoriasFromServer);
            })
    },[]);

    return(
        <Template>
            <h1>Página de Cadastro de Video!</h1>

            <form onSubmit={(e)=>{
                e.preventDefault();
                
                const categoriaEscolhida = categorias.find((categoria) =>{
                    return categoria.titulo === valores.categoria;
                });

                videosRepository.create({
                    titulo: valores.titulo,
                    url: valores.url,
                    categoriaId: 1
                }).then(() => {
                    console.log()
                })
                history.push('/');
            }}>
                <FormField name="titulo" onChange={setValor} value={valores.titulo}>
                    Título do Video
                </FormField>
                <FormField name="url" onChange={setValor} value={valores.url}>
                    URL
                </FormField>
                <FormField name="categoria" onChange={setValor} value={valores.categoria} suggestions = {categoriasTitulo}>
                    Categoria
                </FormField>

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </Template>
    )
}

export default CadastroVideo;