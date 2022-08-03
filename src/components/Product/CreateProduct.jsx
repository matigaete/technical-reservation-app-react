import { Form, Button } from 'react-bootstrap'
import FormItem from '../Utils/FormItem'

const CreateProduct = () => {
  return (
    <Form>
      <FormItem id='productCode'> Codigo del producto </FormItem>
      <FormItem id='productCode'> Nombre del producto </FormItem>
      <FormItem id='productCode'> Descripcion del producto </FormItem>
      <FormItem id='productCode' type='select'> Categoría del producto </FormItem>
      <FormItem id='productCode'> Stock </FormItem>
      <FormItem id='productCode'> Stock crítico </FormItem>
      <Form.Group className="mb-3" controlId="autoValorate">
        <Form.Check type="checkbox" label="Valoracion automatica (%)" />
        <Form.Control />
      </Form.Group>
      <FormItem id='productCode'> Precio de venta </FormItem>
      <Button variant="primary" type="submit"> Aceptar </Button>
    </Form>
  )
}

export default CreateProduct


