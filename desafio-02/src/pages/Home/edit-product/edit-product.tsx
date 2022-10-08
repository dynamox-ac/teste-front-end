import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';

export default function EditProduct() {
  const[name, setName] = useState('');
  const[manufacturingDate, setManufacturingDate] = useState('');
  const[expireDate, setExpireDate] = useState('');
  const[isPerishable, setIsPerishable] = useState(Boolean);
  const[currency, setCurrency]=useState('')
  const[price, setPrice] = useState(0);

  const navigate = useNavigate();


  const updateProduct = () => {
    alert('Produto atualizado');
  }

  const goHome = () => {
    navigate('/home');
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
                <NumericFormat type='text' decimalSeparator="." thousandsGroupStyle="thousand" decimalScale={2} name='price' placeholder='R$10.00' value={price} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(event.target.value))}/>
              </div>
              <div className="col field">
                <label htmlFor="currency">Moeda (R$, $)</label>
                <input type="text" name='currency' placeholder='Exemplo: R$' value={currency} onChange={(event) => setCurrency(event.target.value)}/>
              </div>
              <div>
                <button style={{margin:'10px'}} type="submit" className="btn-submit" onClick={updateProduct}>Cadastrar</button>
                <button className='btn-edit' onClick={goHome}>Voltar</button>
              </div>
          </form>
        </div>
      </main>
  
  )
}
