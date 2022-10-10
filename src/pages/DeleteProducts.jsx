import ProductForm from "../components/ProductForm"


const DeleteProducts = () => {
    return (
        <>
            <section className="products">
                <div className="products-container">
                    <h1>Deletar de Produto</h1>
                    <ProductForm type="delete"/>
                </div>
            </section>
        </>
    )
}

export default DeleteProducts