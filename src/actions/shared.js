import { getInitialData } from '../utils/api'

export function handleInitialData(){
  return (dispatch) => {
    return getInitialData()
    .then(( users, tweets) => {

    })
  }
}