import Table from 'react-bootstrap/Table'
import ListItem from './ListItem'

const List = ({items}) => {

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Eliminar❌</th>
        </tr>
      </thead>
      <tbody>
        { items?.map((item) => {
          const key = item.id || item._id
          return <ListItem key={key} item={item}></ListItem>
        }) }
      </tbody>
    </Table>
  )
}

export default List