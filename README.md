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

<div align="center">

<img src="https://github.com/fremontano/guitar-store-app/blob/eb566bf11cb97927df6a57442ed55d0d11736b45/image1.png" alt="Vista del catálogo de guitarras" width="100%" height="400px" style="margin-bottom: 2rem;">
<p>Explora la colección de guitarras disponibles en la tienda, con almacenamiento en localStorage y persistencia de datos.</p>

<img src="https://github.com/fremontano/guitar-store-app/blob/eb566bf11cb97927df6a57442ed55d0d11736b45/image2.png" alt="Carrito de compras" width="100%" height="400px" style="margin-bottom: 2rem;">
<p>Muestra el carrito con las guitarras agregadas y opciones para modificar cantidades o eliminar productos.</p>

<img src="https://github.com/fremontano/guitar-store-app/blob/eb566bf11cb97927df6a57442ed55d0d11736b45/image3.png" alt="Interfaz responsiva" width="100%" height="400px" style="margin-bottom: 2rem;">
<p>Muestra las guitarras de forma responsiva en dispositivos móviles y de escritorio.</p>

</div>


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
