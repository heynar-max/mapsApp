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

## Paso 3: Stack navigator

se instala el stack
```sh
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install @react-native-masked-view/masked-view
```
se importan en el punto mas alto de aplicación app
 ```sh
import 'react-native-gesture-handler';
```
se pone en la parte mas alta de la aplicación app
```sh
<NavigationContainer>
```
se crea archivo creat navigator.

## Step 4: Instalación de los fundamento de react-navigation
-- [**React Navigation**](https://reactnavigation.org/) --

```sh
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
```

en la carpeta MainActivity.kt se copia estas lineas
```sh
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
    }
```
debe importar este paquete
```sh
import android.os.Bundle;

```
## Step 5: Instalación de permisos
se debe instalar los permisos, por que si no la aplicacion no los puede usar

-- [**react-native-permissions**](https://www.npmjs.com/package/react-native-permissions) --

```sh
npm i react-native-permissions

```

en la carpeta android/app/src/main/AndroidManifest.xml se copia estas lineas, las que se necesita perdir los permisos, si se necesita mas permisos, copia las demas
```sh
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

## Step 5: Instalación de zustand
se debe instalar los permisos, por que si no la aplicacion no los puede usar

```sh
npm i zustand

```

## Step 5: Instalación de react-native-maps
se debe instalar react-native-maps

-- [**react-native-maps**](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md) --

```sh
npm install react-native-maps

```

en la carpeta android/app/src/main/AndroidManifest.xml se copia estas lineas, las que se necesita para google maps
```sh
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="AIzaSyAxihmCOcLvvKV96-tqBMx40a1VzflN3k0"/>
```

## Step 6: Instalación de react-native-geolocation
se debe instalar react-native-geolocation

-- [**react-native-geolocation**](https://github.com/michalchudziak/react-native-geolocation) --

```sh
npm install @react-native-community/geolocation --save

```

en la carpeta android/app/src/main/AndroidManifest.xml se copia estas lineas, las que se necesita para google maps
```sh
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="AIzaSyAxihmCOcLvvKV96-tqBMx40a1VzflN3k0"/>
```
