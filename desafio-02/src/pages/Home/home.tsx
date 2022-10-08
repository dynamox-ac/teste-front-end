import { useContext, useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../data/context/Authcontext';
import { IProduct } from '../../interface/product.interface';
import api from "../../services/api.service";
import './home.css';

export default function Home() {
  const [product, setProduct] = useState<Array<IProduct>>([]);
  const { setAuth, auth } = useContext(AuthContext);

  const [productId, setProductId] = useState(0);

  console.log(auth);
  const navigate = useNavigate();
  const [currentItems, setCurrentItems] = useState<Array<any>>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  
  useEffect(() => {
    api
      .get("/products")
      .then((response) => { setProduct(response.data)}) 
      .catch((err) => {
        console.error("oops! Ocorreu um erro ao listar os produtos" + err);
      });
    }, []);
    console.log('result get', product);
  

  useEffect(() => {
    const endOffset =  itemOffset + itemsPerPage;
    setCurrentItems(product.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(product.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, product]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    setItemOffset(newOffset);
  };

  const addNewProduct = () => {
    navigate('/cadastrar');
  }

  const editRoute = () => {
    const editId = String(productId)
    console.log('editId,', editId);
    navigate(`/editar/${editId}`)
  }

  const deleteRequest = () => {
    api
    .delete(`/products/${productId}`)
    .then(() => window.location.reload());
    alert('produto excluido com sucesso!')
  }

 
    const lisItems = product.map((item) => {
      return (
    <div className="row product-box" key={item?.id} onClick={() => setProductId(item?.id)}>

        <div className="col-12 info">
          <h4 className='title'>{item?.name}</h4>
        </div>

          <div className="details">
            <p>Fabricado em: {item?.manufacturingDate} <br /> Válido até: {item?.expireDate}</p>
          </div>

          <div className="col-12 pricing">
            <p className="price">{item.currency}<span>{item.price}</span></p>
          </div>
          
          <div className="col">
            <button className='btn-edit' onClick={editRoute}>Editar produto</button>
          </div>
          <div style={{cursor:'pointer'}} onClick={deleteRequest}><MdDelete /></div>
      </div>

        )
      });

    const handleLogOut =(e: any) => {
      setAuth(false);
      navigate('/');
      window.alert('Deslogado com sucesso')
    }
    
  return <main className="container-box">

    <header className="menu">
      <div className="row menu-container">
        <div className="col btn-container">
          <button className='btn-menu' onClick={handleLogOut}>Deslogar</button>
        </div>
      </div>
    </header>
     <section className="menu-container">
      {lisItems}
    </section>
    <section className="menu-container">
      <div className="product-add-box row" onClick={addNewProduct}>
        <div className="col">
          <button className="btn-add">Cadastrar novo produto</button>
          <br />
          <IoMdAdd />
          </div>
      </div>
    </section>

    <ReactPaginate
    breakLabel="..."
    nextLabel="próxima >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="< anterior"
    containerClassName='pagination'
    pageLinkClassName='page-num'
    previousLinkClassName='page-num'
    nextLinkClassName='page-num'
    activeClassName='active'
    />

  </main>
}
