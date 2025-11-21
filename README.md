# ReproductorMusica

Es un reproductor de musica para tener en tu escritorio y que se vea agradable para la vista.

Proyecto personal para desarrollar mis habilidades en javascript, usando el framework de electron.js para hacer mis aplicaciones de escritorio.

Si quieres usar la app puedes:

```Bash

git clone https://github.com/Ori31/ReproductorMusica
cd ReproductorMusica

```

Despues para poder exportar la app como .exe o ejecutable debes ir a la bash del proyecto y instalar los modulos para exportar

```Bash

#Para instalar los modulos para exportar
npm install electron-builder --save-dev

```

Una vez hecho eso debes poner estos comandor para exportar

```Bash

#Para Windows
npm run build:win

#Para linux
npm run build:linux

```
