import { useFormContext } from 'react-hook-form';
export function TextArea({ name, label, styleLabel, styleInput,
  styleMessage, className, defaultValueArea, ...passProps }) {
<<<<<<< HEAD
=======

>>>>>>> a7e0630168139554792177d7759a74592ecaa7f0
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={className}>
      <label className={styleLabel} htmlFor={name}>
        {label}
      </label>
      <textarea className={styleInput} {...register(name)} {...passProps} value={defaultValueArea} rows="10"></textarea>
      <span className={styleMessage}>{errors[name]?.message}</span>
    </div>
  )
}

