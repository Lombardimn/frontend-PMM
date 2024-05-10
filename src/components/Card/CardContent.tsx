interface CardContentProps {
  children?: React.ReactNode,
  className?: string,
}

export const CardContent = (props: CardContentProps) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}