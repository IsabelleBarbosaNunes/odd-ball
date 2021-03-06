/**
 * @import attachEventListenersToArena, updateName, addPlayer,
 *         updateScores, setPlayerName, addPlayers
 * @global arena, board, playerId, players, nameInput
 * @function setPlayers - atribui o valor recebido a players
 * @function setDOMPointers - obtém referências aos elementos
 *     do DOM scoreBoard, arena e changeNameInput
 * @function getBoard
 * @function getArena
 * @function getPlayers
 * @function setEventListeners - atribuir ao evento click do elemento
 *     de id changeNameButton uma função
 * 
 */

import attachEventListenersToArena from '../control/attachEventListenersToArena.js';
import updateName from '../control/updateName.js';
import addPlayer from './addPlayer.js';
import updateScores from './updateScores.js';
import setPlayerName from './setPlayerName.js';
import addPlayers from './addPlayers.js';

let arena;
let board;
let playerId;
let players = [];
let nameInput;

function setPlayers(p) {
    players = p;
}

function setDOMPointers(){
    board = document.getElementById("scoreBoard");
    arena = document.getElementById("arena");
    nameInput = document.getElementById("changeNameInput");
}

function getBoard() { return board }
function getArena() { return arena }
function getPlayers() { return players }

function setEventListeners () {
    document.getElementById("changeNameButton").onclick = () => { updateName(nameInput.value) };
    attachEventListenersToArena();
}

function setPlayer(id){
    playerId = id;
}

function getPlayer(){
    return playerId;
}

function removePlayer(id){
    document.getElementById(id).remove();
    players[id] = {};
}

function getStatus(){
    if (players[playerId].alive) return "ready";
    return "dead";
}

function revivePlayer(id){
    players[id].alive = true;
    players[id].avatar.classList.remove("dead");
}

function resizePlayer(id, radius) {
    players[id].radius = radius;
    players[id].avatar.style.width = players[id].avatar.style.height = radius*2 + "px";
}

function setArenaSize(size) {
    arena.style.width = arena.style.height = size+"px";
}

export {
    setPlayer,
    getPlayer,
    setPlayers,
    addPlayers,
    addPlayer,
    removePlayer,
    setDOMPointers,
    getPlayers,
    updateScores,
    getStatus,
    revivePlayer,
    resizePlayer,
    setEventListeners,
    setPlayerName,
    setArenaSize,
    getBoard,
    getArena
};
