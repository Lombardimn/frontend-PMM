interface CallToActionProps {
  children: React.ReactNode,
  className: string,
  href: string,
  title?: string
}

export const CallToAction = (props: CallToActionProps) => {
  return (
    <a  href={props.href} className={props.className}>
      {props.children}
    </a>
  )
}