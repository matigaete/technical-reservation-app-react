import { useEffect, useState } from "react"
import { getProducts } from "../Services/productService"
import IndexSelector from "../Utils/IndexSelector"
import List from "../Utils/List"
import CreateProduct from "./CreateProduct"

const ProductPage = () => {
  const [section, setSection] = useState(0)
  const [items, setItems] = useState([])

  useEffect(() =>{
    getProducts().then((items) => setItems(items))
  }, [])

  const changeMode = (value) => {
    setSection(value)
  }

  return (
    <div>
      <IndexSelector onChange={changeMode}/>
      { section === 0 && (
        <CreateProduct />
      )}
      { section === 1 && (
      <>
        <CreateProduct />
        <List items={items}/>
      </>
      )}
      { section === 2 && (<List items={items}/>)}
      { section === 3 && (<List items={items}/>)}
    </div>
  )
}

export default ProductPage