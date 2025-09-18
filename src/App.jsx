import { useEffect, useState } from "react"
import { Guitar } from "./components/Guitar"
import { Header } from "./components/Header"

import { db } from '../src/data/db.js';

function App() {


  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  // State para obtener datos API, DATA 
  const [data, setData] = useState([]);
  // State para agregar al carrito de compra
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 7;
  const MIN_ITEM = 1;

  //Cada que el arreglo del cart cambie ejecuta el codigo del carrito de compra
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])


  // Funcion para agregar al  carrito de compra 
  function addToCart(item) {
    // Buscar si el item ya está en el carrito
    const itemExist = cart.findIndex(guitar => guitar.id === item.id);

    if (itemExist >= 0) {
      // Tomar una copia del carrito
      const updateCart = [...cart];
      // Usar el indice para aumentar la cantidad
      updateCart[itemExist].quantity++;
      // Setear el carrito actualizado
      setCart(updateCart);
    } else {
      // Si no existe, inicializamos cantidad en 1
      item.quantity = 1;
      setCart([...cart, item]);
    }

  }

  //Funcion para eliminar del carrito de compra
  function deleteFromCart(id) {
    const deleteItemToCart = cart.filter((item) => item.id != id);
    setCart(deleteItemToCart);
  }

  // Funcion incrementar cantidad 
  function increaseQuantity(id) {
    const updateCartQuantity = cart.map((item) => {
      if (item.id === id && item.quantity <= MAX_ITEMS) {
        return {
          ...item, //referencia de objetos
          quantity: item.quantity + 1 //retornar la cantidad
        }
      }
      //no perder la cantida
      return item;
    })
    // Actualizar mi carrito 
    setCart(updateCartQuantity);
  }


  // Funcion decrementar cantidad 
  function decrementQuantity(id) {
    const updateCartQuantity = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEM) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    });
    setCart(updateCartQuantity);
  }

  //Limpiar carrito
  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    setData(db);
  }, [])



  return (
    <>
      <Header
        cart={cart}
        deleteFromCart={deleteFromCart}
        increaseQuantity={increaseQuantity}
        decrementQuantity={decrementQuantity}
        clearCart={clearCart}

      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarObj) => (
            <Guitar
              key={guitarObj.id}
              guitarObj={guitarObj}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
