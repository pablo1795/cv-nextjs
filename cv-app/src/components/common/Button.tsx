interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  onClick?:  (() => void) | undefined;
  rightIcon?: React.ReactNode;
  styles?: string;
  text?: string;
  title?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({
  children,
  disabled = false,
  leftIcon,
  onClick,
  rightIcon,
  styles,
  text,
  title,
  type = "button"
}: ButtonProps) {
  const buttonClasses = `bg-sky-600 text-stone-200 hover:bg-sky-700 dark:hover:bg-sky-500 font-bold text-xl uppercase py-1 px-2 rounded-lg print:hidden ${styles}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
    >
      {children || (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {text && <span>{text}</span>}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  )
}
