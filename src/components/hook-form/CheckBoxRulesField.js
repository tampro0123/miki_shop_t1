import { useFormContext } from 'react-hook-form';
import Button from 'src/components/Button';

export function CheckBoxRulesField({
  name,
  styleLabelItem,
  styleBox,
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
      <div className={'flex items-center'}>
        <div className="w-[37px]">
          <input className={styleInput} type="checkbox" value={name} {...passProps} {...register(name)} />
        </div>
        <div className={styleLabelItem} htmlFor={name}>
          Tôi đã đọc và đồng ý với các{' '}
          <Button text className={'font-medium'}>
            {' '}
            điều khoản chính sách{' '}
          </Button>{' '}
          của Miki Jewelry
        </div>
      </div>
      <span className={styleMessage}>{errors[name]?.message}</span>
    </div>
  );
}
