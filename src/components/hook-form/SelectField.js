import { useFormContext } from 'react-hook-form';

export function SelectField({
  name,
  label,
  options,
  styleLabelList,
  styleLabelItem,
  styleMessage,
  className,
  ...passProps
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={className}>
      <label className={styleLabelList} htmlFor={name}>
        {label}
      </label>
      <select {...passProps} {...register(name)}>
        {options.map((value) => (
          <option className={styleLabelItem} key={value}>
            {value}
          </option>
        ))}
      </select>
      <span className={styleMessage}>{errors[name]?.message}</span>
    </div>
  );
}
