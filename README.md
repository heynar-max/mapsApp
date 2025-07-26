Este es un nuevo proyecto [**React Native**](https://reactnative.dev), iniciado utilizando[`@react-native-community/cli`](https://github.com/react-native-community/cli).
```sh
# Using npm
npx @react-native-community/cli init nombredelproyecto

```

# Empezando

> **Note**: asegúrese de haber completado la guía [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment)  antes de continuar.

## Step 1: iniciacion de este Proyecto

Primero, necesitarás ejecutar Metro , la herramienta de compilación de JavaScript para React Native.

Para iniciar el servidor de desarrollo Metro, ejecute el siguiente comando desde la raíz de su proyecto React Native:

```sh
# Using npm
npm start android

```

## Paso 2: instalar los iconos vector

-- [**Iconos Vector**](https://github.com/oblador/react-native-vector-icons) --
```sh
npm install react-native-vector-icons
```
en la carpeta android/app/build.gladle,  pone esta linea
 ```sh
project.ext.vectoricons = [
    iconFontNames: [ 'Ionicons.ttf' ] // Specify font files
]

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle");
```