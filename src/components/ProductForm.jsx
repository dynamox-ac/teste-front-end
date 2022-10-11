import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import { formatDate, maskMoney } from '../util/util';
import { addProduct, deleteProduct, editProduct, listProduct } from '../apiRequest/crudFunc';

const ProductForm = (props) => {

  const [list, setList] = useState([])
  const [product, setProduct] = useState({})
  const [value, setValue] = useState({})
  const [invalid, setInvalid] = useState({})
  const [disabled, setDisabled] = useState(false)
  const [textButton, setTextButton] = useState("")


  
  useEffect(() => {
    getList()

    if (props.type === "edit") {
      if (!disabled) {
        setDisabled(true)
      }
      setTextButton("Alterar")
    } else if (props.type === "add") {
      setTextButton("Registrar")
    } else if (props.type === "delete") {
      if (!disabled) {
        setDisabled(true)
      }
      setTextButton("Deletar")
    }
  }, [])

  const getList = () => {
    listProduct().then((response) => {
      setList(response)
    }).catch(error => { console.log(error) })
  }

  const validateForm = () => {
    let validate = true

    if (!value.name) {
      validate = false
      setInvalid((prev) => ({ ...prev, name: true }))
    }
    if (!value.dateF) {
      validate = false
      setInvalid((prev) => ({ ...prev, dateF: true }))
    }
    if (!value.price || value.price === "0,00") {
      validate = false
      setInvalid((prev) => ({ ...prev, price: true }))
    }
    if (!!value.perishable && (!value.dateV || value.dateV < value.dateF)) {
      validate = false
      setInvalid((prev) => ({ ...prev, dateV: true }))
      if (value.dateV < value.dateF) {
        setInvalid((prev) => ({ ...prev, dateF: true }))
      }
    }

    return validate
  }

  const sendForm = () => {
    if (props.type === "add") {
      if (validateForm()) {
        let obj = value
        obj.perishable = value.perishable ?? false
        addProduct(obj).then(() => {
          getList()
          setValue({})
          setInvalid({})
        }).catch(error => { console.log(error) })
      }
    } else if (props.type === "edit") {
      if (validateForm()) {
        let obj = value
        editProduct(obj.id, obj).then(() => {
          getList()
          setValue({})
          setProduct("empty")
          setDisabled(true)
          setInvalid({})
        }).catch(error => { console.log(error) })
      }
    } else if (props.type === "delete") {
      deleteProduct(product.id).then(() => {
        getList()
        setProduct("empty")
        setDisabled(true)
      }).catch(error => { console.log(error) })
    }
  }

  return (
    <>
      <div className='product-form'>
        <form noValidate className={props.type}>

          <TextField
            id="standard-select-currency-native"
            select
            className="input-item edit-remove"
            label="Produto"
            value={product.name || "empty"}
            helperText="Selecione o produto desejado"
          >
            <MenuItem value={"empty"} onClick={() => {
              setProduct({})
              setValue({})
              setDisabled(true)
            }}>
              Selecione
            </MenuItem>
            {list.map((obj) => (
              <MenuItem key={obj.id} value={obj.name} onClick={() => {
                setProduct(obj)
                setValue(obj)
                setValue((prev) => ({ ...prev, dateF: obj.dateF }))
                if(!!obj.dateV){
                  setValue((prev) => ({ ...prev, dateV: obj.dateV }))
                }
                setDisabled(false)
              }}>
                {obj.name}
              </MenuItem>
            ))}
          </TextField>

          <div className="add-edit">
            <TextField
              id="standard-basic"
              disabled={disabled}
              error={invalid.name}
              className="input-item"
              label="Nome do produto"
              value={value.name || ""}
              onChange={(ev) => {
                setValue((prev) => ({ ...prev, name: ev.target.value }))
                setInvalid((prev) => ({ ...prev, name: false }))
              }}
            />

            <div className="field01">

              <TextField
                className="input-item"
                id="date"
                error={invalid.dateF}
                disabled={disabled}
                label="Fabricação"
                type="date"
                value={value.dateF || ""}
                onChange={(ev) => {
                  setValue((prev) => ({ ...prev, dateF: ev.target.value }))
                  setInvalid((prev) => ({ ...prev, dateF: false }))
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="standard-select-currency"
                disabled={disabled}
                select
                value={value.perishable || false}
                onChange={() => { setInvalid((prev) => ({ ...prev, dateV: false })) }}
                className="input-item"
                label="Perecível"
              >
                <MenuItem value={true} onClick={() => { setValue((prev) => ({ ...prev, perishable: true })) }}>
                  Sim
                </MenuItem>
                <MenuItem value={false} onClick={() => { setValue((prev) => ({ ...prev, perishable: false })) }}>
                  Não
                </MenuItem>
              </TextField>

            </div>
            <div className='field02'>

              <TextField
                id="date"
                error={invalid.dateV}
                className="input-item"
                disabled={value.perishable ? false : true || disabled}
                label="Validade"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={value.dateV || ""}
                onChange={(ev) => {
                  setValue((prev) => ({ ...prev, dateV: ev.target.value }))
                  setInvalid((prev) => ({ ...prev, dateV: false }))
                }}
              />

              <TextField
                label="Preço (R$)"
                error={invalid.price}
                disabled={disabled}
                className="input-item"
                name="numberformat"
                id="formatted-numberformat-input"
                value={value.price || ""}
                onChange={(ev) => {
                  setValue((prev) => ({ ...prev, price: maskMoney(ev.target.value) }))
                  setInvalid((prev) => ({ ...prev, price: false }))
                }}
              />
            </div>
          </div>


          <Button disabled={disabled} variant="contained" color="primary" onClick={sendForm}>
            {textButton}
          </Button>
        </form>
      </div>
    </>
  )
}

export default ProductForm