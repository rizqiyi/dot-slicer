import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "primary-outlined" | "ghost";
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { variant = "primary", type = "button", ...rest } = props;

  const variants: { [key: string]: string } = {
    primary: "btn-primary",
    "primary-outlined": "btn-primary-outlined",
    ghost: "btn-ghost",
  };

  const baseClass = variants[variant];

  return (
    <button
      {...rest}
      className={
        props.className ? `${baseClass} ${props.className}` : baseClass
      }
    />
  );
};

export default Button;
