import { useFormContext } from 'react-hook-form';

export function TextField({ name, label, styleLabel, styleInput, styleMessage, className, ...passProps }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={className}>
      <label className={styleLabel} htmlFor={name}>
        {label}
      </label>
      <input className={styleInput} {...register(name)} {...passProps} />
      <span className={styleMessage}>{errors[name]?.message}</span>
    </div>
  );
}
