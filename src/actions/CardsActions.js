export const cardSelect = props => {
  return {
    type: props[2],
    payload: [props[0], props[1]]
  }
}