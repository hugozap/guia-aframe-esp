# Creando componentes

En este ejemplo creamos un componente que rota una lista de colores:

```javascript
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
```

La propiedad `schema` permite declarar los parámetros
de nuestro componente.

En este caso tiene 2 parámetros

1) colores: array con valor por defecto.
2) duracion: Duración del intervalo (por defecto será 1 segundo (1000 milisegundos))

## Propiedad init:

La propiedad `init` debe ser una función que se ejecuta
cuando una instancia del componente es creado.

## Accediendo a los parámetros

Se usa la propiedad `data` de la siguiente manera:

this.data.nombrePropiedad

Nota: Tener presentes las reglas de `this` de JavaScript. Algunas veces `this` puede cambiar de valor dependiendo del contexto en el que se ejecute.