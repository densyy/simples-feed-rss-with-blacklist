/************
|  REQUETS  |
************/

const REQUESTS = function () {}

//
// RECEBE FEED
//

REQUESTS.prototype.getFeed = function () {
  
  const feedUrl = './assets/xml/feed.xml'
  const CDATA_REGEX = /<!\[CDATA\[\n(.*)\n\]\]>/
  const listaNoticias = []

  HTTP.request(feedUrl, 'GET', null, null, function (_response) {
    const feedNoticias = _response.querySelectorAll('rss channel item')

    feedNoticias.forEach( noticia => {
      const descricao = noticia.querySelector('description').innerHTML.replace(CDATA_REGEX, '').substring(0, 100).concat('...')
      const link = noticia.querySelector('link').innerHTML
      const titulo = noticia.querySelector('title').innerHTML
      const imagem = noticia.childNodes[9].getAttribute('url')

      const noticiaObj = { imagem, link, titulo, descricao }
      listaNoticias.push( noticiaObj )
    })

    CONFIG.listaTodasNoticias = listaNoticias
  })

}