import {useState} from 'react';

function useForm(valoresIniciais){
    const [ valores, setValores ] = useState([valoresIniciais]);
    
    function setValor(e){
        // setValores({...valores, nome: e.target.value})
        const chave = e.target.getAttribute('name');
        const valor = e.target.value;
        setValores({
            ...valores,
            [chave]: valor
        })

    }

    function clearForm(){
        setValores(valoresIniciais);
    }

    return {
        setValor,
        valores,
        clearForm
        
    }    
}

export default useForm;