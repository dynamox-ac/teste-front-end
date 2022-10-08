import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useNavigate, useParams } from 'react-router-dom';
import api from "../../../services/api.service";
import './new-product.css';


export default function NewProduct() {
  const[name, setName] = useState('');
  const[manufacturingDate, setManufacturingDate] = useState('');
  const[expireDate, setExpireDate] = useState('');
  const[isPerishable, setIsPerishable] = useState(Boolean);
  const[currency, setCurrency]=useState('')
  const[price, setPrice] = useState(0);

  const {id} = useParams();
  const productID = useParams();
  console.log('productID',productID)
  const payload = {name, expireDate, manufacturingDate, currency ,price, isPerishable}
  console.log(payload)
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  }

  const addOrUpdate = () => {
      if(!productID) {
        api
          .post("/products", payload)
          .then(() => alert(`Produto '${payload.name}' criado com sucesso!`), goHome)
        console.log('result get', payload);
        return;
      }
    }

    const update = () => {
      if(productID) {

        api
        .put('/products/', payload)
        .then((response) => getProductInfoById(response));
      }
    }

    useEffect(() => {
      if(productID){
        api
          .get(`/products/${id}`)
          .then((response) => { 
            getProductInfoById(response)
          })
          .catch((err) => {
            console.error("oops! Ocorreu um erro ao listar os produtos" + err);
          });
      } else {
        return;
      }
    });

      const getProductInfoById = (response: any) => {
      if(response){
         return [setName(response.data.name),
          setManufacturingDate(response.data.manufacturingDate),
          setExpireDate(response.data.expireDate),
          setCurrency(response.data.currency),
          setPrice(response.data.price),
          setIsPerishable(response.data.isPerishable)]
      }
    }

    
  return (
    <main>

      <div className="row">

        <form className='form-container'>
          <div className="col field">
            <label htmlFor="name">Nome do produto</label>
            <input type="text" name='name' value={name} onChange={(event) => setName(event.target.value)}/>
          </div>
          <div className="col field">
            <label htmlFor="isPerishable">É perecível?</label>
            <input type="checkbox" name='isPerishable' checked={isPerishable} onChange={(event) => setIsPerishable(event.target.checked)}/>
          </div>
          {isPerishable ? <div className="col field">
            <label htmlFor="manufacturingDate">Data de fabricação</label>
            <input type="text" name='manufacturingDate' value={manufacturingDate} onChange={(event) => setManufacturingDate(event.target.value)}/>
          </div> : null}
          {isPerishable ?
          <div className="col field">
          <label htmlFor="expireDate">Data de validade</label>
          <input type="text" name='expireDate' value={expireDate} onChange={(event) => setExpireDate(event.target.value)}/>
        </div> : null}
          <div className="col field">
            <label htmlFor="price">Preço</label>
            <NumericFormat type='text' decimalSeparator="." thousandsGroupStyle="thousand" decimalScale={2} name='price' placeholder='R$10.00' value={price} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(event.target.value))}/>
          </div>
          <div className="col field">
            <label htmlFor="currency">Moeda (R$, $)</label>
            <input type="text" name='currency' placeholder='Exemplo: R$' value={currency} onChange={(event) => setCurrency(event.target.value)}/>
          </div>
          <div>
            <button style={{margin:'10px'}} type="submit" className="btn-submit" onClick={productID ? update : addOrUpdate}>{productID ? 'Editar' : 'Cadastrar'}</button>
            <button className='btn-edit' onClick={goHome}>Voltar</button>
          </div>
        </form>

      </div>
    </main>
  )
}
