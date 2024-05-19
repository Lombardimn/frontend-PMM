import { ButtonAction, CardContent, MdiInformationVariantCircle } from "@/components"

interface OffersProps {
  className: string,
  src: string,
  altImg: string,
  price: string,
  children?: React.ReactNode,
  onClick?: () => void
}


export const Offers = (props: OffersProps) => {

  return (
    <article className={props.className}>
      <div className="h-[330px] w-80 my-2 relative">
        <img
          src={props.src}
          alt={props.altImg}
          className="w-80 h-80 object-cover rounded-lg"
        />
        <section className="flex flex-row">
          <div className="absolute bottom-4 right-1 backdrop-blur-xl bg-opacity-100 rounded-2xl py-1 px-2">
            <span className="text-white font-bold">Precio $ {props.price}</span>
          </div>
          <CardContent className="flex flex-row gap-1 justify-center items-center mt-2 px-2 bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-xl" >
            <MdiInformationVariantCircle className="scale-[0.8]" />
            <ButtonAction className="text-sm" onClick={props.onClick}>+Info</ButtonAction>
          </CardContent>
        </section>
      </div>
      {props.children}
    </article>
  )
}