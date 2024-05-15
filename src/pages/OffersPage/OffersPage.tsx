import { CallToAction, 
  Footer, 
  MdiCalendarClock, 
  MdiCalendarMultiselect, 
  MdiCreationOutline, 
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
                className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-24 w-24 flex-none flex items-center justify-center"
              >
                <MdiSale className="scale-[1.7] "/>
              </CallToAction>
              <span className="">Promos</span>
            </div>
            <div className="flex flex-col justify-center text-center mr-4">
              <CallToAction href="/offers/calendar" className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-24 w-24 flex-none flex items-center justify-center">
                <MdiCalendarMultiselect className="scale-[1.7] "/>
              </CallToAction>
              <span className="">Semana</span>
            </div>
            <div className="flex flex-col justify-center text-center mr-4">
              <CallToAction href="/offers/events" className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-24 w-24 flex-none flex items-center justify-center">
                <MdiCalendarClock className="scale-[1.7] "/>
              </CallToAction>
              <span className="">Eventos</span>
            </div>
            <div className="flex flex-col justify-center text-center mr-4">
              <CallToAction href="/offers/others" className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-24 w-24 flex-none flex items-center justify-center">
                <MdiCreationOutline className="scale-[1.7] "/>
              </CallToAction>
              <span className="">Otros</span>
            </div>
          </div>
        </section>

        <section className="text-2xl mx-4 mt-4 p-1 h-[300px] rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%">
        </section>
        <section className="text-2xl mx-4 mt-4 p-1 h-[300px] rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%">
        </section>
        <section className="text-2xl mx-4 mt-4 p-1 h-[300px] rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%">
        </section>
        <Footer />
      </main>
    </>
  )
}
