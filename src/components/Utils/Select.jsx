import Form from 'react-bootstrap/Form'

const Select = ({ items, onChange }) => {

	const optionList = (items) => {
		return items?.map((item, index) => {
			const { abreviatura, nombre } = item
			const texto = abreviatura ? `${abreviatura} - ${nombre}` : nombre
			return (
				<option key={index} value={index}>{texto}</option>
			)
		})
	}

	return (
		<Form.Select onChange={(event) => onChange ? onChange(event) : ""}>
			<option key="0"> Seleccione... </option>
			{optionList(items)}
		</Form.Select>
	)
}

export default Select