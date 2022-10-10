import {
   api
} from '../services/api';

export const getUser = (email, password) => {
   return (api.get("/users").then((response) => {
      let auth = response.data.filter((value) => {
         if (value.email === email && value.password === password) {
            return value
         }
      })

      return auth[0]
   }).catch(error => {
      console.log(error)
   }))
}
