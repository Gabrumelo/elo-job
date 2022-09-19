import {
  faCrosshairs,
  faGamepad,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ferro from "../assets/ferro.png";
import bronze from "../assets/bronze.png";
import prata from "../assets/prata.png";
import ouro from "../assets/ouro.png";
import platina from "../assets/platina.png";
import diamante from "../assets/diamante.png";
import mestre from "../assets/mestre.png";
import graomestre from "../assets/graomestre.png";
import desafiante from "../assets/desafiante.png";

interface IElos {
  id: string;
  name: string;
  img: string;
  niveis: number[];
}

const elos: IElos[] = [
  {
    id: "1",
    name: "Ferro",
    img: ferro,
    niveis: [1, 2, 3, 4],
  },
  {
    id: "2",
    name: "Bronze",
    img: bronze,
    niveis: [1, 2, 3, 4],
  },
  {
    id: "3",
    name: "Prata",
    img: prata,
    niveis: [1, 2, 3, 4],
  },
  {
    id: "4",
    name: "Ouro",
    img: ouro,
    niveis: [1, 2, 3, 4],
  },
  {
    id: "5",
    name: "Platina",
    img: platina,
    niveis: [1, 2, 3, 4],
  },
  {
    id: "6",
    name: "Diamante",
    img: diamante,
    niveis: [1, 2, 3, 4],
  },
  {
    id: "7",
    name: "Mestre",
    img: mestre,
    niveis: [1],
  },
  {
    id: "8",
    name: "Grão Mestre",
    img: graomestre,
    niveis: [1],
  },
  {
    id: "9",
    name: "Desafiante",
    img: desafiante,
    niveis: [1],
  },
];

function EloBoost() {
  const [selectedElo, setSelectedElo] = useState<{
    currentElo: IElos;
    previewElo: IElos;
  }>({
    currentElo: elos[0],
    previewElo: elos[7],
  });

  return (
    <div className="flex flex-col content-center">
      <div className="flex gap-5">
        <div>
          <FontAwesomeIcon icon={faGamepad} />
          <p>5312</p>
          <p>Serviços Finalizados</p>
        </div>

        <div>
          <FontAwesomeIcon icon={faTrophy} />
          <p>1</p>
          <p>Anos no Mercado</p>
        </div>

        <div>
          <FontAwesomeIcon icon={faCrosshairs} />
          <p>118</p>
          <p>Numero de Boosters</p>
        </div>
      </div>

      <div>
        <h1>ELO JOB (ELO BOOST)</h1>
        <p>
          Nós, parcelamos qualquer serviço em até 12x no cartão de crédito
          Através de Picpay ou MercadoPago
        </p>
        <video src="https://www.youtube.com/watch?v=ER2ItrPP5KI&feature=emb_imp_woyt"></video>
      </div>

      <section>
        <div className="flex gap-5">
          <div>
            <h2>SUA POSIÇÃO ATUAL</h2>
            <div>
              <select
                name="elo"
                id="elo"
                onChange={(value) => {
                  const changeElo = elos.find(
                    (elo) => elo.id === value.target.value
                  );

                  if (!changeElo) return;
                  setSelectedElo({
                    ...selectedElo,
                    currentElo: changeElo,
                  });
                }}
              >
                {elos.map((elo) => (
                  <option key={elo.id} value={elo.id}>
                    {elo.name}
                  </option>
                ))}
              </select>
              {selectedElo && (
                <select name="elo-level" id="elo-level">
                  {selectedElo.currentElo.niveis.map((eloLevel) => (
                    <option key={eloLevel} value={eloLevel}>
                      {eloLevel}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <img
              src={selectedElo.currentElo.img}
              alt={selectedElo.currentElo.name}
            />
          </div>

          <div>
            <h2>SUA POSIÇÃO FUTURA</h2>
            <div>
              <select
                name="eloPreview"
                id="eloPreview"
                onChange={(value) => {
                  const changeElo = elos.find(
                    (elo) => elo.id === value.target.value
                  );

                  if (!changeElo) return;
                  setSelectedElo({
                    ...selectedElo,
                    previewElo: changeElo,
                  });
                }}
              >
                {elos.map((elo) => (
                  <option value={elo.id}>{elo.name}</option>
                ))}
              </select>
              {selectedElo && (
                <select name="eloLevelPreview" id="eloLevelPreview">
                  {selectedElo.previewElo.niveis.map((eloLevel) => (
                    <option value={eloLevel}>{eloLevel}</option>
                  ))}
                </select>
              )}
            </div>
            <img
              src={selectedElo.previewElo.img}
              alt={selectedElo.previewElo.name}
            />
          </div>
        </div>

        <button className="">Compre Agora!</button>
      </section>

      <section>
        <h2>O REI DO ELOJOB</h2>
        <p>
          Você poderá acompanhar as partidas ao vivo no nosso Discord, os
          boosters fazem transmissões ao vivo das partidas para você assistir
          ele subindo a sua conta! Você aprenderá bastante com essa nova
          experiência! O Rei do Elojob tem 6 anos de experiência e milhares de
          serviços de Elojob (eloboost), Duo boost e Coaching concluídos com
          sucesso, certificando a grande satisfação de nossos clientes.
        </p>

        <h2>PORQUE ESCOLHER O REI DO ELOJOB?</h2>
        <p>
          Temos os melhores boosters para concluir o seu serviço com agilidade,
          profissionalismo e um preço super barato, além disso damos sempre o
          melhor apoio aos nossos clientes, trabalhamos com mercado pago e com
          criptografia em nossos servidores, tudo isso para que você possa
          comprar e navegar com segurança, caso não esteja satisfeito a gente
          devolve seu dinheiro. Buscamos sempre oferecer aos clientes um serviço
          de qualidade, seguro e com um suporte impecável. Nossa proposta é
          simples: Oferecer o melhor serviço pelo menor preço. Contato :
          reidoelojobcontato@gmail.com.
        </p>
      </section>
    </div>
  );
}

export default EloBoost;
