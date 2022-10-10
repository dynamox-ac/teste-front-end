import { TableProducts } from "../components/TableProducts"

const Products = () => {

  return (
    <>
      <section className="products">
        <div className="products-container">
          <h1>Listagem de Produtos</h1>
          <TableProducts />
        </div>
      </section>
    </>
  )
}

export default Products