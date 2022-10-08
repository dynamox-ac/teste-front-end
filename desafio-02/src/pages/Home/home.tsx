import { useEffect, useState } from "react";
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
    <div className="" key={item?.id}>
        <div className="img">
          <img src={item?.thumb} alt="" />
        </div>
        <div className="info">
          <h2>{item?.name}</h2>
          <p>{item?.price}</p>
        </div>
      </div>
    );
    
  return <main>

    <header className="menu">
      <div className="row menu-container">
        <div className="col btn-container">
          <button className='btn-menu'>Adicionar novo produto</button>
          <button className='btn-menu'>Adicionar novo produto</button>
        </div>
      </div>
    </header>

    
     <section className=''>
      {lisItems}
    </section>

  </main>
}
