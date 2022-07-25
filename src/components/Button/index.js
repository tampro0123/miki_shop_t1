import { useRouter } from 'next/router';

function Button({
  //Logic
  to,
  href,
  //Style
  primary = false,
  secondary = false,
  //Other Style
  className,
  //classHover
  classHover,
  //Style Content
  styleContent,
  //Icon
  leftIcon = false,
  rightIcon = false,
  //Style Icon
  styleLeftIcon,
  styleRightIcon,
  //
  children,
  onClick,
  ...passProps
}) {
  const router = useRouter();
  let props = {
    onClick,
    ...passProps,
  };

  //Logic Btn
  let Component = 'button';
  if (to) {
    props = {
      onClick: () => router.push(to),
      ...passProps,
    };
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  //Style Btn
  if (primary) {
    var classes = 'text-white bg-btn';
  } else if (secondary) {
    var classes = 'text-primary-text bg-white';
  }
  return (
    <Component
      {...props}
      className={`rounded-lg py-2 px-[46px] leading-6 text-base flex items-center justify-center cursor-pointer font-bold ${classes} ${className} hover:${classHover}`}
    >
      {leftIcon && <span className={styleLeftIcon}>{leftIcon}</span>}
      <span className={styleContent}>{children}</span>
      {rightIcon && <span className={styleRightIcon}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
