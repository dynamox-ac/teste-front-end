import ProductForm from "../components/ProductForm"


const NewProducts = () => {
    return (
        <>
            <section className="products">
                <div className="products-container">
                    <h1>Registro de Produto</h1>
                    <ProductForm type="add"/>
                </div>
            </section>
        </>
    )
}

export default NewProducts