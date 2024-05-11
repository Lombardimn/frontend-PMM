interface PartnerProps {
  children: React.ReactNode,
  srcImg: string,
  altImg: string,
  className: string,
  classNameImg: string,
  href: string
}

export const Partner = (props: PartnerProps) => {
  return (
    <article className={props.className}>
      <a href={props.href}>
        <img src={props.srcImg} alt={props.altImg} className={props.classNameImg} />
      </a>
      <div className="flex">
        {props.children}
      </div>
    </article>
  )
}