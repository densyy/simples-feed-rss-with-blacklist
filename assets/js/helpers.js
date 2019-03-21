/************
|  HELPERS  |
************/

const HELPERS = function () {}

//
// ENVIA LISTA DE NOTICIAS PARA GALERIA
//

HELPERS.prototype.enviaNoticiasParaGaleria = function (_listaNoticias) {

  _listaNoticias.forEach( function (noticia) {
    new NOTICIA_GALLERY().add(noticia)
  })
}

//
// FILTRA LISTA DE NOTICIAS DE ACORDO COM BLACKLIST
//

HELPERS.prototype.filtrarNoticias = function () {

  const listaBlacklist = document.querySelectorAll('.blacklist__lista ul li span.palavra')
  const listaFiltrada = []

  // verifica se existem palavras na blacklist
  if ( listaBlacklist.length === 0 ) {
    new HELPERS().enviaNoticiasParaGaleria( CONFIG.listaTodasNoticias )
  }

  // loop entre todas as noticias
  for ( let indexNoticia in CONFIG.listaTodasNoticias ) {

    // loop entre as palavra da blacklist
    let palavraDetectada = false
    for ( let indexPalavra = 0; indexPalavra < listaBlacklist.length; indexPalavra++ ) {

      const noticiaTitulo = CONFIG.listaTodasNoticias[indexNoticia].titulo.toUpperCase()
      const palavraBlacklist = listaBlacklist[indexPalavra].innerText.toUpperCase()

      // filtro
      if ( noticiaTitulo.includes( palavraBlacklist ) ) {
        palavraDetectada = true
        break
      }

      // verifica se palavra foi realmente detectada
      if ( palavraDetectada === false && indexPalavra === listaBlacklist.length -1 ) {
        listaFiltrada.push( CONFIG.listaTodasNoticias[indexNoticia] )
      }
    }

  }
  
  new HELPERS().enviaNoticiasParaGaleria( listaFiltrada )
}

