# Taller

1. Abrir https://codepen.io/hugozap/pen/NjExbr

Agregar el códio de inicio:

Agregar una caja (a-box) y la cámara

```html

      <a-box depth="2" height="2" width="2" rotation="14 15 15" color="red"></a-box>
      <!-- Cámara -->
      <a-entity camera look-controls wasd-controls scale="1 1 1" position="0 1 15"></a-entity>

```

2. Ahora vamos a reemplazar los hijos de a-scene y agregar algunas figuras primitivas de a-frame

(Buscar comentario que dice <!-- Declaración de elementos de la escena aquí --> y escribir)

```html

      <a-plane color="#8176cc" height="400" width="400" rotation="-90 0 0"></a-plane>
      <a-box position="-5 1 0" depth="2" height="2" width="2"  color="#f269eb"></a-box>
      <a-box position="0 1 0"  depth="2" height="2" width="2"  color="#e5be00"></a-box>
      <a-box position="5 1 0"  depth="2" height="2" width="2"  color="#0184d8"></a-box>
		
	  <!-- Ahora creamos unas cajas en la posición y = 5 (más arriba) -->
      <a-box position="-5 5 0" depth="2" height="2" width="2"  color="#f269eb"></a-box>
      <a-box position="0 5 0"  depth="2" height="2" width="2"  color="#e5be00"></a-box>
      <a-box position="5 5 0"  depth="2" height="2" width="2"  color="#0184d8"></a-box>

      <a-sphere radius="2" color="red" position="5 2 10"></a-sphere>

      <!-- Cámara -->

      <a-entity camera look-controls wasd-controls scale="1 1 1" position="0 1 15"></a-entity>
   
 ```

3 (Sky) Debemos declarar los recursos que necesitamos. Para ello agregar la siguiente declaración a la escena:

(Ubicar comentario: <!-- Declaración de recursos aquí -->)

Nota: Solo debe haber 1 elemento <a-assets> en la escena:

```html
 <a-assets>
    <img id="sky" src="https://rawgit.com/hugozap/guia-aframe-esp/master/taller/recursos/imagenes/sky.jpg">
 </a-assets>
 ```

 3.1 Ahora debemos agregar el elemento <a-sky> dentro de la escena. 

```html
 <a-sky src="#sky"></a-sky>
 ```

4. Texturas. Agreguemos 3 recursos (dentro de elemento a-assets)

(Cualquier URL de imagen sirve) (sección de recursos)

```html
 <img id="plant1" src="https://rawgit.com/hugozap/guia-aframe-esp/master/taller/recursos/imagenes/plant1.jpg">
 <img id="plant2" src="https://rawgit.com/hugozap/guia-aframe-esp/master/taller/recursos/imagenes/plant2.jpg">
 <img id="plant3" src="https://rawgit.com/hugozap/guia-aframe-esp/master/taller/recursos/imagenes/plant3.jpg">
 ```
4.1 Ahora asignemos las imágenes a algunos de los elementos de la escena.

(Modificar los 3 primeros elementos a-box)

```html
<a-box material="src:#plant1" position="-5 1 0" depth="2" height="2" width="2"  color="#fff"></a-box>
<a-box material="src:#plant2" position="0 1 0"  depth="2" height="2" width="2"  color="#fff"></a-box>
<a-box material="src:#plant3" position="5 1 0"  depth="2" height="2" width="2"  color="#fff"></a-box>
```

5. Agregando luces:

Agregamos una luz de tipo "Punto" (sección elementos)

```html
<!-- Luz: Tipo punto (Ver referencia/luz para otros ejemplos) -->
      <a-entity light="type: point; intensity: 2; distance: 50; decay: 2"
          position="0 10 10"></a-entity>
```

6. Modelo 3D:

Ahora vamos a agregar un modelo3D creado con MagicaVoxel.

6.1 Debemos declarar el recurso (En la sección de recursos, dentro de elmento a-assets):

(Esto SOLO lo declara, no lo muestra)

```html
<a-asset-item id="casa1" src="https://rawgit.com/hugozap/guia-aframe-esp/master/taller/recursos/modelos_hd/casa1.ply"></a-asset-item>
```

6.2 Ahora agregamos el elemento para que lo muestre

(En la sección de elementos)

```html
<a-entity ply-model="src: #casa1" position="-10 0 3" rotation="-90 0 0" scale="0.1 0.1 0.1"></a-entity>
```
