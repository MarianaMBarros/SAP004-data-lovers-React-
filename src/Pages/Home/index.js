import React, { useEffect } from 'react';
import './style.css';
import '../../Gallery/gallery.theme.css';
import '../../Gallery/gallery.min.css';

export default function () {
  return (
    <>
      <header class="ola">
        <section class="gallery autoplay items-3">
          <div id="item-1" class="control-operator"></div>
          <div id="item-2" class="control-operator"></div>
          <div id="item-3" class="control-operator"></div>

          <figure class="item">
            <div>
              <a>
                <img class="top" src="https://fontmeme.com/permalink/200429/196ada5df6b06cbbd0b9ee6f014559b4.png"
                  alt="fonte-de-pokemon-go" border="0" />
              </a>
            </div>
            <a href="./detail?num=150"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/150.png" /></a>
            <a href="./detail?num=065"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/065.png" /></a>
            <a href="./detail?num=149"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/149.png" /></a>
          </figure>

          <figure class="item">
            <div>
              <a>
                <img class="top" src="https://fontmeme.com/permalink/200429/8aac5fd1cefbdfee2d39542be186b792.png"
                  alt="fonte-de-pokemon-go" border="0" />
              </a>
            </div>
            <a href="./detail?num=091"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/091.png" /></a>
            <a href="./detail?num=095"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/095.png" /></a>
            <a href="./detail?num=144"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/144.png" /></a>
          </figure>

          <figure class="item">
            <div>
              <a>
                <img class="top" src="https://fontmeme.com/permalink/200429/0a4dce5e5599f1eee1fd33563b17a86c.png"
                  alt="fonte-de-pokemon-go" border="0" />
              </a>
            </div>
            <a href="./detail?num=113"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/113.png" /></a>
            <a href="./detail?num=143"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/143.png" /></a>
            <a href="./detail?num=134"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/134.png" /></a>
          </figure>

          <div class="controls">
            <a href="#item-1" class="control-button"><i class="fas fa-hand-rock"></i></a>
            <a href="#item-2" class="control-button"><i class="fas fa-dizzy"></i></a>
            <a href="#item-3" class="control-button"><i class="fas fa-heart"></i></a>
          </div>
        </section>
      </header>
      <div>
        <span class="sub-title">Descubra o Universo Pokemon!!!</span>
        <span>
          <p>O que são Pokémon?</p>
          Pokémon são criaturas de todas as formas e tamanhos que convivem com os humanos na natureza.
          Na grande maioria, os Pokémon não falam, exceto para proferir seus nomes.
          Os Pokémon são criados e comandados por seus donos (os chamados "Treinadores").
          No decorrer das aventuras, os Pokémon crescem e ganham experiência, podendo até mesmo evoluir para
          Pokémon mais fortes. Alguns Pokémon, como Pikachu, Piplup e Charizard, possuem papéis de destaque na
          série de videogames, no jogo Estampas Ilustradas e nos programas de TV, mas eles são apenas algumas
          das quase 500 criaturas que habitam o universo dos Pokémon.
        </span>

      </div>
    </>
  )
}
