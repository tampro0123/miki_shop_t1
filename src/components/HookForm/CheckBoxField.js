import { useFormContext } from 'react-hook-form';

export function CheckBoxField({
  name,
  label,
  options,
  styleLabelList,
  styleLabelItem,
  styleInput,
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
      <label className={styleLabelList}>{label}</label>
      {options?.map((value) => (
        <div className={'flex items-center'} key={value}>
          <input className={styleInput} type="checkbox" value={value} {...passProps} {...register(name)} />
          <label className={styleLabelItem} htmlFor={value}>
            {value}
          </label>
        </div>
      ))}
      <span className={styleMessage}>{errors[name]?.message}</span>
    </div>
  );
}
