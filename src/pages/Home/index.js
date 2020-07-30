import React from 'react';

import '../../index.css';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import dados from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div>
      <Menu />
      <BannerMain 
        video={dados.categorias[0].videos[0]}
      />
      
      {dados.categorias.map((categoria, index) =>{
        console.log(categoria);
        if(index === 0){
          return(
            <Carousel key={categoria.titulo} category={categoria} ignoreFirstVideo/>
          )  
        }
        return(
          <Carousel key={categoria.titulo} category={categoria}/>
        )
      })}
      
      <Footer/>
    </div>
  );
}

export default Home;
