import React, { useState } from 'react';
import estilos from './Jogo.module.css';
import pedraSvg from '../../images/pedra.svg';
import papelSvg from '../../images/papel.svg';
import tesouraSvg from '../../images/tesoura.svg';

const opcoes = [
  { nome: 'Pedra', imagem: pedraSvg },
  { nome: 'Papel', imagem: papelSvg },
  { nome: 'Tesoura', imagem: tesouraSvg },
];

function Jogo() {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [vitoriasJogador, setVitoriasJogador] = useState(0);
  const [vitoriasComputador, setVitoriasComputador] = useState(0);
  const [empates, setEmpates] = useState(0);

  const determinarVencedor = (jogador, computador) => {
    if (jogador === computador) {
      return 'empate';
    } else if (
      (jogador === 'Pedra' && computador === 'Tesoura') ||
      (jogador === 'Papel' && computador === 'Pedra') ||
      (jogador === 'Tesoura' && computador === 'Papel')
    ) {
      return 'jogador';
    } else {
      return 'computador';
    }
  };

  const escolherOpcao = (opcao) => {
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    setEscolhaJogador(opcao);
    setEscolhaComputador(escolhaComputador);

    const resultadoJogo = determinarVencedor(opcao.nome, escolhaComputador.nome);
    setResultado(resultadoJogo);

    if (resultadoJogo === 'jogador') {
      setVitoriasJogador(vitoriasJogador + 1);
    } else if (resultadoJogo === 'computador') {
      setVitoriasComputador(vitoriasComputador + 1);
    } else {
      setEmpates(empates + 1);
    }
  };

  const reiniciarJogo = () => {
    setEscolhaJogador(null);
    setEscolhaComputador(null);
    setResultado(null);
  };

  return (
    <div>
      <h1>Jogo Pedra, Papel, Tesoura</h1>
      <h2>Escolha sua jogada:</h2>
      {opcoes.map((opcao) => (
        <button key={opcao.nome} onClick={() => escolherOpcao(opcao)}>
          <img src={opcao.imagem} alt={opcao.nome} className={estilos.jogadorImagem} />
        </button>
      ))}
      {escolhaJogador && escolhaComputador && (
        <div>
          <h3>Você escolheu: <img src={escolhaJogador.imagem} alt={escolhaJogador.nome} className={estilos.jogadorImagem} /></h3>
          <h3>O computador escolheu: <img src={escolhaComputador.imagem} alt={escolhaComputador.nome} className={estilos.jogadorImagem} /></h3>
          <h2>Resultado: {resultado === 'jogador' ? 'Você venceu!' : resultado === 'computador' ? 'O computador venceu!' : 'Empate!'}</h2>
          <button className={estilos.botao}id="reiniciar" onClick={reiniciarJogo}>Jogar Novamente</button>
        </div>
      )}
      <h2>Placar</h2>
      <p>Vitórias do Jogador: {vitoriasJogador}</p>
      <p>Vitórias do Computador: {vitoriasComputador}</p>
      <p>Empates: {empates}</p>
    </div>
  );
}

export default Jogo;
