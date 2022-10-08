import { useEffect, useState } from "react";
import { IoMdAdd } from 'react-icons/io';
import { IProduct } from '../../interface/product.interface';
import api from "../../services/api.service";
import './home.css';

export default function Home() {
  const [product, setProduct] = useState<Array<IProduct>>([]);

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
          <h4>{item?.name}</h4>
          <p>Fabricado em: {item?.manufacturingDate} <br /> Válido até: {item?.expireDate}</p>
          <p className="price">{item.currency}<span>{item.price}</span></p>
        </div>
          <div className="col-12 btn-edit">Editar produto</div>
      </div>
    );
    
  return <main className="container-box">

    {/* <header className="menu">
      <div className="row menu-container">
        <div className="col btn-container">
          <button className='btn-menu'>Adicionar novo produto</button>
          <button className='btn-menu'>Adicionar novo produto</button>
        </div>
      </div>
    </header> */}
     <section className="menu-container">
      {lisItems}
    </section>
    <section className="menu-container">
      <div className="product-add-box row">
        <div className="col">
          <button className="btn-add">Adicionar produto</button>
          <br />
          <IoMdAdd />
          </div>
      </div>
    </section>

  </main>
}
