import config from '../config'

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll(){
    return fetch(`${URL_CATEGORIES}`)
        .then(async (respostaServidor) =>{
            if(respostaServidor.ok){
                const resposta = await respostaServidor.json();
                return resposta;
            }

            throw new Error('Mãe liga pra mim o servidor caiu');
        })
}

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaServidor) =>{
            if(respostaServidor.ok){
                const resposta = await respostaServidor.json();
                return resposta;
            }

            throw new Error('Mãe liga pra mim o servidor caiu');
        })
}

export default {
    getAllWithVideos,
    getAll
}