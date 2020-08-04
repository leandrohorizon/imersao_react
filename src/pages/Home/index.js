import React, { useEffect, useState } from 'react';

import '../../index.css';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Display from '../../components/Display';
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
        for(let i = 0; i < dados.length; i+= 2)
        if(index === i){
          const video = dados[index].videos[0];
          return(
            <>
              <BannerMain 
                video={video}
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
