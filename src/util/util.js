const maskPhone = (valor) => {
  var retorno = valor.replace(/\D/g, "");
  retorno = retorno.replace(/^0/, "");
  if (retorno.length === 10) {
    retorno = retorno.replace(/^(\d\d)(\d{4})(\d{4}).*/, "($1) $2-$3");
  } else if (retorno.length > 10) {
    retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (retorno.length > 2) {
    retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else if (retorno.length > 5) {
    if (retorno.length > 6) {
      return retorno;
    }
    retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else {
    if (retorno.length !== 0) {
      retorno = retorno.replace(/^(\d*)/, "($1");
    }
  }
  return retorno
}

const validEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const util = {
  maskPhone:maskPhone,
  validEmail:validEmail
}