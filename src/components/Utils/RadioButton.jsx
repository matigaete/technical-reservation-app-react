const RadioButton = ({ groupName, children }) => {
  return (
    <div className="radioButton form-check">
      <label className="form-check-label">{children}</label>
      <input className="form-check-input" type='radio' name={groupName} />
    </div>
  )
}

export default RadioButton