/*****************
|  FEED GALLERY  |
*****************/

const NOTICIA_GALLERY = function () {}

/**
 * Adiciona noticia à galeria de noticias
 * @param {Object} _noticia noticia a ser inserida
 */
NOTICIA_GALLERY.prototype.add = function (_noticia) {
  const galeria = document.querySelector('.noticia_gallery')
  const itemNoticia = `
  <div class="noticia">
    <!-- Imagem -->
    <div class="noticia__imagem">
      <a href="${_noticia.link}">
        <img src="${_noticia.imagem}" alt="imagem da noticia">
      </a>
    </div>
    <!-- Titulo -->
    <div class="noticia__titulo">
      <p>${_noticia.titulo}</p>
    </div>
    <!-- Descricao -->
    <div class="noticia__descricao">
      <p>${_noticia.descricao}</p>
    </div>
  </div>

  `
  galeria.innerHTML += itemNoticia
}

/**
 * Limpa a galeria de noticias
 */
NOTICIA_GALLERY.prototype.clear = function () {
  const galeria = document.querySelector('.noticia_gallery')
  galeria.innerHTML = ''
}