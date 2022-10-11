import ProductForm from "../components/ProductForm"


const EditProducts = () => {
    return (
        <>
            <section className="products">
                <div className="products-container">
                    <h1>Editar Produto</h1>
                    <ProductForm type="edit"/>
                </div>
            </section>
        </>
    )
}

export default EditProducts