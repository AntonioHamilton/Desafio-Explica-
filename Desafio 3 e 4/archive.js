/* Como não existem propriedades privadas no JS dentro de classes, acredito que uma abordagem funcional seria mais apropriada. Mas como foi pedido que uma classe fosse criada, meu enfoque foi em construi-la baseada nas próximas versões do ES (ES2019) onde existirão atributos privados, por isso temos a sintaxe "#"*/

/*const archive_2 = (function () {
  let content;

  return {
    setContent: function (text) {
      content = text;
    },
    getContent: function () {
      return content;
    },
  };
})();*/

class FileClass {
  #content;
  constructor() {
    this.#content;

    this.setContent = function (content) {
      this.content = content;
    };

    this.getContent = function () {
      return this.content;
    };
  }
}
