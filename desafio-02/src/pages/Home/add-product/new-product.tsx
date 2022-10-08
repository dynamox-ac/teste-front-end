import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../../../services/api.service";


export default function NewProduct() {
  const[name, setName] = useState('');
  const[manufacturingDate, setManufacturingDate] = useState('');
  const[expireDate, setExpireDate] = useState('');
  const[currency, setCurrency]=useState('')
  const[price, setPrice] = useState(0);
  
  const payload = {name, expireDate, manufacturingDate, currency ,price}

  const navigate = useNavigate();


  useEffect(() => {
    api
      .post("/products", payload)
    });
    console.log('result get', payload);

    const goBack = () => {
      navigate('/home');
    }

  return (
    <div>

      <div className="row">

        <form>
          <div className="col">
            <label htmlFor="name">Nome do produto</label>
            <input type="text" name='name' value={name} onChange={(event) => setName(event.target.value)}/>
          </div>
        </form>

      </div>

      <div className="row">
        <div className="col">
          <button onClick={goBack}>Voltar</button>
        </div>
      </div>
    </div>
  )
}
