import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import CardSection from "@/components/CardSection/CardSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header title="Squirtle" />
        <CardSection titulo="Informações Sobre o Squirtle">
          <div>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
              alt="Squirtle 1"
              width={200} height={200}
            />
            <Image src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png"
              alt="Squirtle 2"
              width={200} height={200}
            />
          </div>
          <p>
            Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.
          </p>
        </CardSection>
        <CardSection titulo="Características">
          <p>Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de
            Kanto e evolui para Wartortle.</p>
        </CardSection>
        <CardSection titulo="Curiosidades">
          <ul>
            <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
            <li>
              Seu nome deriva das palavras &quot;squirrel&quot; (esquilo) e &quot;turtle&quot;
              (tartaruga).
            </li>
            <li>
              Squirtle é frequentemente escolhido por treinadores para começar sua
              jornada Pokémon.
            </li>
          </ul>
        </CardSection>
        <CardSection titulo="Squirtle: O Amigo Aquário">
          <p>
            Squirtle, com sua aparência simpática e sua habilidade em controlar a
            água, conquistou o coração de treinadores Pokémon ao redor do mundo.
            Sendo o inicial de água na região de Kanto, Squirtle é uma escolha
            popular para aqueles que buscam equilíbrio e versatilidade em suas
            equipes.
          </p>
          <p>
            Sua concha nas costas não apenas oferece proteção, mas também é um
            símbolo de resistência. Ao evoluir para Wartortle e, posteriormente,
            para Blastoise, Squirtle se transforma em uma força formidável,
            dominando ataques aquáticos que podem surpreender adversários em
            batalhas.
          </p>
          <p>
            Além de suas habilidades de batalha, Squirtle é conhecido por seu
            carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle
            como uma amizade profunda, tornando-o não apenas um companheiro de
            lutas, mas um amigo leal ao longo de suas jornadas.
          </p>
        </CardSection>
        <CardSection titulo="Recursos Adicionais">
          <ul>
            <li>
              <a href="https://www.pokemon.com/br/pokedex/squirtle" target="_blank">Pokédex - Squirtle</a>
            </li>
            <li>
              <a href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)" target="_blank">Bulbapedia
                - Squirtle</a>
            </li>
          </ul>
        </CardSection>
        <CardSection titulo="Evoluções" >
          <ul >
            <li>
              <a href="./pages/pokemon/index.html?name=squirtle">
                <figure>
                  <Image src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
                    alt="Squirtle"
                    width={200} height={200} />
                  <figcaption>1. Squirtle</figcaption>
                </figure>
              </a>
            </li>

            <li>
              <a href="./pages/pokemon/index.html?name=wartortle">
                <figure>
                  <Image src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
                    alt="Wartortle"
                    width={200} height={200} />
                  <figcaption>2. Wartortle</figcaption>
                </figure>
              </a>
            </li>

            <li>
              <a href="./pages/pokemon/index.html?name=blastoise">
                <figure>
                  <Image src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
                    alt="Blastoise"
                    width={200} height={200} />
                  <figcaption>3. Blastoise</figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </CardSection>
      </div>
    </main>
  );
}
