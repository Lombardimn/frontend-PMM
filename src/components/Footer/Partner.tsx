interface PartnerProps {
  children: React.ReactNode,
  srcImg: string,
  altImg: string,
  className: string,
  classNameImg: string
}

export const Partner = (props: PartnerProps) => {
  return (
    <article className={props.className}>
      <img src={props.srcImg} alt={props.altImg} className={props.classNameImg} />
      {props.children}
    </article>
  )
}