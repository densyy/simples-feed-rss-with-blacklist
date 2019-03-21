/********************
|  HTTP - REQUESTS  |
********************/

const HTTP = (function () {

  const methods = {}

  /**
   * Envia requisições http utilizando o Fetch
   * @param {String} _url link a ser acessado
   * @param {String} _method metodo da requisicao
   * @param {Any} _data dados a ser enviado no corpo da requisicao
   * @param {Object} _headers parametros do header da pagina
   * @param {Function} _callback funcao a ser executada no final
   * @return {Promise} resposta do servidor
   */
  methods.request = function (_url, _method, _data, _headers, _callback) {
    // verifica headers
    if (!_headers) {
      _headers = {
        'Accept': 'application/xml',
        'Content-Type': 'application/xml'
      }
    }

    // verifica _data
    if (!_data) { _data = null } else { _data = JSON.stringify(_data) }

    // envia requisicao
    fetch(_url, {
      method: _method,
      body: _data,
      headers: _headers
    })
    .then( response => response.text() )
    .then( str => (new window.DOMParser()).parseFromString(str, "text/xml") )
    .then( data => _callback(data) )
    .catch( error => _callback(error) )
  }

  return methods
})();
