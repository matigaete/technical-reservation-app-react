import { Form, Button } from "react-bootstrap"
import FormItem from "../Utils/FormItem"

const CreateCategory = () => {
  return (
    <Form>
      <FormItem id='category' label='Nombre de categoria' />
      <Button>Aceptar</Button>
      <Button>Nueva Categoria</Button>
    </Form>
  )
}

export default CreateCategory