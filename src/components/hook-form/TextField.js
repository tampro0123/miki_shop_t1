import { useForm } from 'react-hook-form';

export function TextField({ name, label, styleLabel, styleInput,
  styleMessage, className, passwordErr, userNameErr, mailErr, isArray, ...passProps }) {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [baseName, index, subName] = isArray ? name.split('.') : []
  return (
    <div className={className}>
      <label className={styleLabel} htmlFor={name}>
        {label}
      </label>
      <input className={styleInput} {...register(name)} {...passProps} />
      <span className={styleMessage}>{isArray ? errors?.[baseName]?.[+index]?.[subName]?.message :
        errors[name]?.message || userNameErr || passwordErr || mailErr}</span>
    </div>
  );
}
