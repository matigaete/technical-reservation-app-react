import Form from 'react-bootstrap/Form'
import Select from './Select'

const FormItem = ({ id, children, items, value, onChange, type = "text" }) => {

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{children}</Form.Label>
      {items ? (
        <Select value={value} items={items} onChange={onChange}></Select>
      ) : (
        <Form.Control value={value} type={type}></Form.Control>
      )}
    </Form.Group>
  )
}

export default FormItem