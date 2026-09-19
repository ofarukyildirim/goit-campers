import css from './Filter.module.css'

const Filter = ({ name, value, label, checked, onChange }) => (
  <label className={css.option}>
    <input
      className={css.input}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
    />
    <span className={css.radio} aria-hidden="true" />
    {label}
  </label>
)

export default Filter
