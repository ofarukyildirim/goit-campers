import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import css from './BookingForm.module.css'

const MIN_NAME_LENGTH = 2
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SUBMIT_DELAY_MS = 600

const Field = ({ label, error, inputProps }) => (
  <div className={css.field}>
    <div className={css.control}>
      <input
        className={css.input}
        placeholder={label}
        aria-label={label}
        aria-invalid={Boolean(error)}
        {...inputProps}
      />
      {error && (
        <>
          <span className={css.chip}>{label}</span>
          <Icon name="error" size={20} className={css.errorIcon} />
        </>
      )}
    </div>
    {error && <p className={css.error}>{error.message}</p>}
  </div>
)

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { name: '', email: '' } })

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_DELAY_MS))
    toast.success('Your booking request has been sent. We will contact you soon!')
    reset()
  }

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={css.heading}>
        <h2 className={css.title}>Book your campervan now</h2>
        <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
      </div>

      <div className={css.fields}>
        <Field
          label="Name*"
          error={errors.name}
          inputProps={{
            type: 'text',
            autoComplete: 'name',
            ...register('name', {
              setValueAs: (value) => value.trim(),
              required: 'Please enter your name.',
              minLength: {
                value: MIN_NAME_LENGTH,
                message: 'Please enter your full name.',
              },
            }),
          }}
        />
        <Field
          label="Email*"
          error={errors.email}
          inputProps={{
            type: 'email',
            autoComplete: 'email',
            ...register('email', {
              required: 'Please enter your email.',
              pattern: { value: EMAIL_PATTERN, message: 'Please enter a valid email.' },
            }),
          }}
        />
      </div>

      <Button type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send'}
      </Button>
    </form>
  )
}

export default BookingForm
