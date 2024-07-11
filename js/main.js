import { loadProducts } from './productCard.js'
import { handleFormSubmit } from './formHandler.js'

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-form]")
  const productList = document.querySelector("[data-ul]")
  const modal = document.getElementById("modal")
  const addProductButton = document.querySelector(".products__btn-add")
  const closeButton = document.querySelector(".close")

  // 
  function showModal() {
    modal.style.display = "block"
  }

  // 
  function closeModal() {
    modal.style.display = "none"
  }

  // 
  addProductButton.addEventListener("click", showModal)

  closeButton.addEventListener("click", closeModal)

  // 
  window.addEventListener("click", (event) => {
    if (event.target == modal){
      closeModal()
    }
  })

  // 
  loadProducts(productList)

  // 
  handleFormSubmit(form, productList, modal)
})
