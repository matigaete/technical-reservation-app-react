import { useEffect, useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

const IndexSelector = ({onChange}) => {

  return (
    <ButtonGroup>
      <Button key={0} onClick={() => onChange(0)}> Agregar </Button>
      <Button key={1} onClick={() => onChange(1)}> Modificar </Button>
      <Button key={2} onClick={() => onChange(2)}> Consultar </Button>
      <Button key={3} onClick={() => onChange(3)}> Listado </Button>
    </ButtonGroup>
  )
}

export default IndexSelector