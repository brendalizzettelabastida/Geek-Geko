import { deleteProduct } from './api.js'

// Add function product
export function addProductToDOM(product, productList){
  const li = document.createElement("li")
  li.classList.add("product__card")

  li.innerHTML = `
    <img class="product__img" src="${product.img}" alt="Imagen de ${product.name}">
    <h3 class="product__name">${product.name}</h3>
    <div class="product__description">
      <p class="product__description__price">$ ${product.price}</p>
      <img class="product__description__delete" src="assets/icons/icon-trash.png" alt="Ícono de basurero">
    </div>
  `
  productList.appendChild(li)

  // Event listener for delete
  li.querySelector(".product__description__delete").addEventListener("click", async () => {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        await deleteProduct(product.id)
        li.remove()
      } catch (error) {
        console.error('Error al eliminar el producto:', error)
      }
    }
  })
}

// load function products for API
export async function loadProducts(productList) {
  try {
    const response = await fetch('http://localhost:3000/products')
    const products = await response.json()
    products.forEach(product => {
      addProductToDOM(product, productList)
    })
  } catch (error) {
    console.error('Error al cargar los productos:', error)
  }
}
