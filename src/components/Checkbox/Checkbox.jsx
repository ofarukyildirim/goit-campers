import css from './Checkbox.module.css'

const Checkbox = ({ name, label, checked, onChange }) => (
  <label className={css.option}>
    <input
      className={css.input}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    />
    <span className={css.box} aria-hidden="true" />
    {label}
  </label>
)

export default Checkbox
