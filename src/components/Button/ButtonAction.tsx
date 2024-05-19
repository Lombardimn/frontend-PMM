interface ButtonActionProps {
  children: React.ReactNode,
  className: string,
  type?: "submit" | "reset" | "button",
  onClick?: () => void
}

export const ButtonAction = (props: ButtonActionProps) => {
  
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}