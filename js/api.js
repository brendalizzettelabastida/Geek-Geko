const apiUrl = 'http://localhost:3000/products'

export async function getProducts(){
  const response = await fetch(apiUrl)
  if (!response.ok) throw new Error('No se puede mostrar los productos')
  return await response.json()
}

export async function addProduct(product){
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
  if (!response.ok) throw new Error('No se pudo agregar el producto')
  return await response.json()
}

export async function deleteProduct(productId){
  const response = await fetch(`${apiUrl}/${productId}`, {
    method: 'DELETE',
  })
  if (!response.ok) throw new Error('No se pudo borrar el producto')
}
