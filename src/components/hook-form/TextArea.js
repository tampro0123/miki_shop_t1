import { useFormContext } from 'react-hook-form';
export function TextArea({ name, label, styleLabel, styleInput,
  styleMessage, className, ...passProps }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={className}>
      <label className={styleLabel} htmlFor={name}>
        {label}
      </label>
      <textarea className={styleInput} {...register(name)} {...passProps} rows="10"></textarea>
      <span className={styleMessage}>{errors[name]?.message}</span>
    </div>
  )
}

