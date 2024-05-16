import { CallToAction, 
  CardContent, 
  Footer, 
  MdiCalendarClock, 
  MdiCalendarMultiselect, 
  MdiCreationOutline, 
  MdiInformationVariantCircle, 
  MdiSale, 
  Navbar
} from "@/components"

export const OffersPage = () => {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-900 h-full w-svw text-white mt-24">
        <section className="mx-4 pt-4">
          <h2 className="font-bold text-3xl">Ofertas</h2>
          <p className="text-lg italic pb-3">Gestiones y Menús activos.</p>
        </section>

        <section className="bg-gray-700 overflow-hidden py-4">
          <div className="flex overflow-x-auto pl-4 items-center gap-3">
            <div className="flex flex-col justify-center text-center items-center mr-4">
              <CallToAction
                href="/offers/promotions" 
                className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-20 w-20 flex-none flex items-center justify-center"
              >
                <MdiSale className="scale-[1.7] "/>
              </CallToAction>
              <span className="text-xl">Promos</span>
            </div>
            <div className="flex flex-col justify-center text-center mr-4">
              <CallToAction href="/offers/calendar" className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-20 w-20 flex-none flex items-center justify-center">
                <MdiCalendarMultiselect className="scale-[1.7]"/>
              </CallToAction>
              <span className="text-xl">Semana</span>
            </div>
            <div className="flex flex-col justify-center text-center mr-4">
              <CallToAction href="/offers/events" className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-20 w-20 flex-none flex items-center justify-center">
                <MdiCalendarClock className="scale-[1.7]"/>
              </CallToAction>
              <span className="text-xl">Eventos</span>
            </div>
            <div className="flex flex-col justify-center text-center mr-4 py-1">
              <CallToAction href="/offers/others" className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-20 w-20 flex-none flex items-center justify-center">
                <MdiCreationOutline className="scale-[1.7]"/>
              </CallToAction>
              <span className="text-xl">Otros</span>
            </div>
          </div>
        </section>

        <article className="text-2xl mx-4 mt-4 p-1  pb-6 h-auto flex flex-col items-center rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%">
          <div className="h-[330px] w-80 my-2 relative">
            <img 
              src="/images/comida.jpeg" 
              alt="comida"
              className="w-80 h-80 object-cover rounded-lg" 
            />
            <section className="flex flex-row">
              <div className="absolute bottom-4 right-1 backdrop-blur-[3px] bg-opacity-100 rounded-2xl bg-cyan-950 py-1 px-2">
                <span className="text-white font-bold">Precio $ 3,500</span>
              </div>
              <CardContent className="flex flex-row gap-1 justify-center items-center mt-2" >
                <MdiInformationVariantCircle className="scale-[0.7]"/>
                <a href="/offers" className="text-sm">+Info</a>
              </CardContent>

            </section>
          </div>
        </article>
        <Footer />
      </main>
    </>
  )
}


<div className="text-white">
              <h3 className="mx-2 mt-4 text-3xl">Wrapper de carne</h3>
              <p className="text-xl mx-2 text-slate-200">Con una capa exterior de carne de primera calidad que envuelve un sabroso relleno</p>
            </div>