AFRAME.registerComponent('rotador-colores', {
  schema: {
	colores: {type:'array', default:['yellow','red']},
	duracion: {type:'number', default:1000}
  },
  init: function () {
	this.indice = 0
    setInterval( ()=>{
		this.el.setAttribute('color', this.data.colores[this.indice])
		this.indice++;

		//Si llegamos al final , volver a 0
		if(this.indice >= this.data.colores.length) {
			this.indice = 0;
		}
    }, this.data.duracion )
  }
});