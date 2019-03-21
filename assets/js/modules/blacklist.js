/**************
|  BLACKLIST  |
**************/

const BLACKLIST = function () {}

/**
 * Adiciona item à BlackList
 * @param {String} _conteudo texto a ser inserido
 */
BLACKLIST.prototype.add = function (_conteudo) {
  const inputInserir = document.querySelector('.blacklist__inserir input')
  const lista = document.querySelector('.blacklist__lista ul')
  const itemLista = 
  `
  <li>
    <span class="icone_deletar">X</span>
    <span class="palavra">${_conteudo}</span>
  </li>
  `

  lista.innerHTML += itemLista
  inputInserir.value = ''
}

/**
 * Deleta um item da BlackList
 * @param {Node} _element item a ser deletado
 */
BLACKLIST.prototype.del = function (_element) {
  _element.parentNode.removeChild(_element)
}