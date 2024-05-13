interface ButtonActionProps {
  children: React.ReactNode,
  className: string,
  type?: "submit" | "reset" | "button"
}

export const ButtonAction = (props: ButtonActionProps) => {
  
  return (
    <button className={props.className} type={props.type} >
      {props.children}
    </button>
  )
}