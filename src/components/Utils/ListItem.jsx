const ListItem = ({item}) => {
  const { id, _id, nombre, precioVenta } = item
  return (
  <tr>
    <td>{ id || _id }</td>
    <td>{ nombre }</td>
    <td>{ precioVenta }</td>
    <td>✔</td>
  </tr>
  )
}

export default ListItem