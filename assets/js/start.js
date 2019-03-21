/**********
|  START  |
**********/

;( function () {
  
  // Recebe Feed do XML
  new REQUESTS().getFeed()

  // Envia Noticias para Galeria
  setTimeout( function () {
    new HELPERS().enviaNoticiasParaGaleria( CONFIG.listaTodasNoticias )
  }, 500)

}());