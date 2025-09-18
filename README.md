# 🎸 Guitar Store App

Aplicación web de tienda de guitarras construida con **React + Vite**.  
Permite explorar una colección de guitarras, agregarlas al carrito de compras, modificar cantidades y vaciar el carrito.

---

## 🌐 Proyecto en vivo

Puedes ver el proyecto funcionando en Netlify:  
[👉 Ver en Netlify](https://incandescent-brioche-ca4524.netlify.app/)

---
Repositorio del proyecto:  
[🔗 Ver en GitHub](https://github.com/fremontano/guitar-store-app)
  
---

## 📷 Imágenes del proyecto

![Vista del catálogo de guitarras](https://github.com/fremontano/guitar-store-app/blob/eb566bf11cb97927df6a57442ed55d0d11736b45/image1.png)  
*Explora la colección de guitarras disponibles en la tienda. con almacenamiento en localstorage y persistencia de datos*

![Carrito de compras](https://github.com/fremontano/guitar-store-app/blob/eb566bf11cb97927df6a57442ed55d0d11736b45/image2.png)  
*Muestra el carrito con las guitarras agregadas y opciones para modificar cantidades o eliminar productos.*

![Interfaz responsiva](https://github.com/fremontano/guitar-store-app/blob/eb566bf11cb97927df6a57442ed55d0d11736b45/image3.png)  
*Muetra de las guitrras responsiva de la aplicación en dispositivos móviles y de escritorio.*

---

## 📝 Qué aprendí con este proyecto

- **Componentes en React:** Creación de componentes reutilizables (`Header`, `Guitar`) y comunicación entre ellos mediante **props**.  
- **Hooks:** Uso de `useState` para manejar el estado del carrito y `useEffect` para sincronizar datos con `localStorage`.  
- **Funciones de manejo de estado:** `increaseQuantity`, `decreaseQuantity`, `clearCart`, `deleteFromCart`.  
- **Arrays y objetos:** Métodos como `map`, `filter` y `findIndex` para manipular datos dinámicamente.  
- **Eventos y props:** Pasar funciones como props (`clearCart`, `deleteFromCart`) para manejar acciones desde componentes hijos.  
- **Persistencia de datos:** Guardar y recuperar el carrito usando **localStorage**.  
- **Estilos y UI:** Uso de **Bootstrap** para diseño responsivo y organización de la interfaz.  

---

## 🛠️ Tecnologías usadas

- React (Hooks, Props, State)  
- Vite  
- JavaScript (ES6+)  
- Bootstrap  
- LocalStorage  

---

## 💻 Instalación y uso

Clona el repositorio e instala dependencias:

```bash
git clone https://github.com/fremontano/guitar-store-app.git
cd guitar-store-app
npm install
npm run dev
