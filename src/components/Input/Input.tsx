import type { InputHTMLAttributes, ReactNode } from "react";
import style from "./input.module.css";

type Props = {
  start?: ReactNode;
  end?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  start,
  end,
  className,
  ...inputProps
}: Props) => {
  return (
    <label className={[style.inputWrapper, className].join(" ")}>
      {start && <span className={style.beforeInput}>{start}</span>}
      <input {...inputProps} />
      {end && <span className={style.afterInput}>{end}</span>}
    </label>
  );
};
