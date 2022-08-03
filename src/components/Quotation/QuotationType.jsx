import FormItem from "../Utils/FormItem"
import RadioButton from "../Utils/RadioButton"


const QuotationType = () => {
  return (
    <div>
      <RadioButton groupName='quoteType'> Cotización </RadioButton>
      <RadioButton groupName='quoteType'> Factura </RadioButton>
      <RadioButton groupName='quoteType'> Factura Compra </RadioButton>

      <FormItem> Nro. de factura </FormItem>
      <FormItem> Fecha de factura </FormItem>
      <FormItem> Proveedor / Cliente </FormItem>
    </div>
  )
}

export default QuotationType