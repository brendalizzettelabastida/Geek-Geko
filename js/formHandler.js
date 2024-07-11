import { addProduct } from './api.js'
import { addProductToDOM } from './productCard.js'

// Función para leer la imagen como DataURL
function readImage(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

// Función para manejar el envío del formulario
export function handleFormSubmit(form, productList, modal) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const imgFile = document.getElementById("img").files[0]

    if (!imgFile) {
      alert("Por favor, selecciona una imagen.")
      return
    }
    const img = await readImage(imgFile)

    const product = {
      name,
      price,
      img
    }

    try {
      const newProduct = await addProduct(product)
      addProductToDOM(newProduct, productList)
      form.reset()
      modal.style.display = "none"
    } catch (error) {
      console.error('Error al añadir el producto:', error)
    }
  })

  // Event listener for form button
  document.querySelector(".button__clear").addEventListener("click", (event) => {
    event.preventDefault()
    form.reset()
  })
}
