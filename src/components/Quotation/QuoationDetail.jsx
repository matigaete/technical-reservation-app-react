import Table from 'react-bootstrap/Table'

const QuotationDetail = () => {
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
        <tr>
          <td>1</td>
          <td>Aceite</td>
          <td>1000</td>
          <td>✔</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tarro</td>
          <td>3200</td>
          <td>✔</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default QuotationDetail