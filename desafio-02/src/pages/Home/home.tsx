import { useContext, useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../data/context/Authcontext';
import { IProduct } from '../../interface/product.interface';
import api from "../../services/api.service";
import './home.css';

export default function Home() {
  const [product, setProduct] = useState<Array<IProduct>>([]);
  const { setAuth, auth } = useContext(AuthContext)
  console.log(auth);
  const navigate = useNavigate();
  const [currentItems, setCurrentItems] = useState<Array<any>>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

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

  useEffect(() => {
    api
      .get("/products")
      .then((response) => { setProduct(response.data)}) 
      .catch((err) => {
        console.error("oops! Ocorreu um erro ao listar os produtos" + err);
      });
    }, []);
    console.log('result get', product);
    
    const lisItems = product.map((item) =>
    <div className="row product-box" key={item?.id}>

        <div className="col-12 info">
          <h4 className='title'>{item?.name}</h4>
        </div>

          <div className="details">
            <p>Fabricado em: {item?.manufacturingDate} <br /> Válido até: {item?.expireDate}</p>
          </div>

          <div className="col-12 pricing">
            <p className="price">{item.currency}<span>{item.price}</span></p>
          </div>
          
          <div className="col-12 btn-edit">Editar produto</div>
      </div>
    );

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
      <div className="product-add-box row">
        <div className="col">
          <button className="btn-add" onClick={addNewProduct}>Adicionar produto</button>
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
