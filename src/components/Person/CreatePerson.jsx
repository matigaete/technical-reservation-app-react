import FormItem from "../Utils/FormItem"
import { Form, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { createPerson, getRegions } from "../Services/personService"

const CreatePerson = () => {

  const [regions, setRegions] = useState([])
  const [provincias, setProvincias] = useState([])
  const [comunas, setComunas] = useState([])

  useEffect(() => {
    getRegions().then((regions) => setRegions(regions))
  }, [])

  const newPerson = (event) => {
    event.preventDefault()
    const { target } = event
    const person = {
      rut: target[0].value,
      nombre: target[1].value,
      giro: target[2].value,
      region: target[3].value,
      provincia: target[4].value,
      comuna: target[5].value,
      direccion: target[6].value,
      contacto: target[7].value,
      email: target[8].value,
      tipo: target[9].checked ? 'C' : 'P'
    }
    createPerson(person).then((response) => {
      console.log("Persona creada", response)
    }).catch((err) => {
      console.log("Error en la creación", err)
    })
  }

  const changeRegion = (items) => {
    setProvincias(regions[items.target.value].provincias)
  }

  const changeProvincia = (items) => {
    setComunas(provincias[items.target.value].comunas)
  }

  return (
    <Form onSubmit={(event) => newPerson(event)}>
      <FormItem id='rut'> Rut </FormItem>
      <FormItem id='nombre'> Nombre </FormItem>
      <FormItem id='giro'> Giro </FormItem>
      <FormItem id='region' items={regions} onChange={changeRegion}> Región </FormItem>
      <FormItem id='provincia' items={provincias} onChange={changeProvincia}> Provincia </FormItem>
      <FormItem id='comuma' items={comunas}> Comuna </FormItem>
      <FormItem id='direccion'> Dirección </FormItem>
      <FormItem id='telefono'> Telefono </FormItem>
      <FormItem id='email' type='email'> Email </FormItem>
      <Form.Check inline label="Cliente" name="group1" type="radio" />
      <Form.Check inline label="Proveedor" name="group1" type="radio" />
      <Button type="submit">Aceptar</Button>
      <Button>Nueva Persona</Button>
    </Form>
  )
}

export default CreatePerson