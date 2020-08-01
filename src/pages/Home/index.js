import React, { useEffect, useState } from 'react';

import '../../index.css';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Template from '../../components/Template';

// import dados from '../../data/videos_croche.json';
import categoriasRepository from '../../api/categorias'



function Home() {
  const [dados, setDadosIniciais] = useState({

  })

  useEffect(() =>{
    categoriasRepository.getAll()
      .then((d)=> {
        setDadosIniciais(d)})
      .catch((err)=>alert(err))
  }, [])
  return (
    <Template paddingAll={0}>
      {!dados[0] && (<div>Espera um pouco mãe...</div>)}

      {dados.length >= 1 && dados.map((categoria, index) =>{
        if(index === 0){
          return(
            <>
              <BannerMain 
                video={dados[0].videos[0]}
              />
              <Carousel 
                key={categoria.titulo}
                category={categoria}
                ignoreFirstVideo
              />
            </>
          )  
        }
        return(
          <Carousel 
            key={categoria.titulo}
            category={categoria}
          />
      
        )
      })}
      
      
      
     
      
    </Template>
  );
}

export default Home;
