import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import api from "../../../services/api.service";
import './new-product.css';


export default function NewProduct() {
  const[name, setName] = useState('');
  const[manufacturingDate, setManufacturingDate] = useState('');
  const[expireDate, setExpireDate] = useState('');
  const[isPerishable, setIsPerishable] = useState(Boolean);
  const[currency, setCurrency]=useState('')
  const[price, setPrice] = useState(0);

  const payload = {name, expireDate, manufacturingDate, currency ,price}

  const navigate = useNavigate();

  const addNewProduct = () => {
      api
        .post("/products", payload);
      console.log('result get', payload);      
    }

    const goBack = () => {
      navigate('/home');
    }

  return (
    <div>

      <div className="row">

        <form className='form-container' onSubmit={addNewProduct}>
          <div className="col field">
            <label htmlFor="name">Nome do produto</label>
            <input type="text" name='name' value={name} onChange={(event) => setName(event.target.value)}/>
          </div>
          <div className="col field">
            <label htmlFor="expireDate">Data de validade</label>
            <input type="text" name='expireDate' value={expireDate} onChange={(event) => setExpireDate(event.target.value)}/>
          </div>
          <div className="col field">
            <label htmlFor="manufacturingDate">Data de fabricação</label>
            <input type="text" name='manufacturingDate' value={manufacturingDate} onChange={(event) => setManufacturingDate(event.target.value)}/>
          </div>
          <div className="col field">
            <label htmlFor="isPerishable">É perecível?</label>
            <input type="checkbox" name='isPerishable' checked={isPerishable} onChange={(event) => setIsPerishable(event.target.checked)}/>
          </div>
          <div className="col field">
            <label htmlFor="price">Preço</label>
            <NumericFormat type='text' decimalSeparator="," thousandsGroupStyle="thousand" decimalScale={3} prefix={'R$'} allowedDecimalSeparators={['%']}  name='price' placeholder='R$10,00' value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrice(parseInt(event.target.value))}/>
          </div>
          <div className="col field">
            <label htmlFor="currency">Moeda (R$, $)</label>
            <input type="text" name='currency' placeholder='Exemplo: R$' value={currency} onChange={(event) => setCurrency(event.target.value)}/>
          </div>
          <div>
            <button style={{margin:'10px'}} type="submit" className="btn-submit">Cadastrar</button>
            <button className='btn-edit' onClick={goBack}>Voltar</button>
          </div>
        </form>

      </div>
    </div>
  )
}
