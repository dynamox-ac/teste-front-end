import ProductForm from "../components/ProductForm"


const EditProducts = () => {
    return (
        <>
            <section className="products">
                <div className="products-container">
                    <h1>Editar de Produto</h1>
                    <ProductForm type="edit"/>
                </div>
            </section>
        </>
    )
}

export default EditProducts