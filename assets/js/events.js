/************
|  EVENTOS  |
************/

;( function () {

  //
  // INPUT INSERIR - TECLA ENTER
  //

  const inputInserir = document.querySelector( '.blacklist__inserir input' )
  inputInserir.addEventListener( 'keypress', function ( event ) {
    if ( event.keyCode === 13 ) {
      new BLACKLIST().add( inputInserir.value )

      new NOTICIA_GALLERY().clear()
      new HELPERS().filtrarNoticias()
    }
  })

  //
  // BLACKLIST REMOVER - CLICK
  //

  document.addEventListener( 'click', function ( event ) {
    if ( event.target.nodeName === 'SPAN' && event.target.getAttribute('class') === 'icone_deletar' ) {
      new BLACKLIST().del( event.target.parentElement )

      new NOTICIA_GALLERY().clear()
      new HELPERS().filtrarNoticias()
    }
  })

}());