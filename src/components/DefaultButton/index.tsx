import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string; //labelText?: string; exemplo de variavel opcional
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} exemplo de if para validar*/}
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
