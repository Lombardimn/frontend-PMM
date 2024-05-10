
interface CardSelectorProps {
  children: React.ReactNode,
  className: string,
  href: string,
  title: string
}

export const CardSelector = (props: CardSelectorProps) => {

  return (
    <a href={props.href} className={props.className}>
      <div className="flex items-center gap-3 mx-3">
        {props.children}
        <h3 className="text-lg uppercase">{props.title}</h3>
      </div>
    </a>
  )
}