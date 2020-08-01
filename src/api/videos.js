import config from '../config'

const URL_CATEGORIES = `${config.URL}/videos`;

function create(objetoDoVideo){
    return fetch(`${URL_CATEGORIES}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objetoDoVideo)
    })
        .then(async (respostaServidor) =>{
            if(respostaServidor.ok){
                const resposta = await respostaServidor.json();
                return resposta;
            }

            throw new Error('Mãe liga pra mim o servidor caiu');
        })
}

export default {
    create
}