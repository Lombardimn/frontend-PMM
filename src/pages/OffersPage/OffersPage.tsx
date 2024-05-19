import {
  CallToAction,
  Footer,
  MdiCalendarClock,
  MdiCalendarMultiselect,
  MdiCreationOutline,
  MdiSale,
  Navbar
} from "@/components"
import { Offers } from "./components"
import { useEffect, useRef, useState } from "react";

export const OffersPage: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };

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
          <div className="flex overflow-x-auto pl-4 items-center gap-4">
            <div className="flex flex-col justify-center text-center items-center mr-4">
              <CallToAction
                href="/offers/promotions"
                className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-20 w-20 flex-none flex items-center justify-center"
              >
                <MdiSale className="scale-[1.7] " />
              </CallToAction>
              <span className="text-xl">Promos</span>
            </div>
            <div className="flex flex-col justify-center text-center mr-4">
              <CallToAction href="/offers/calendar" className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-20 w-20 flex-none flex items-center justify-center">
                <MdiCalendarMultiselect className="scale-[1.7]" />
              </CallToAction>
              <span className="text-xl">Semana</span>
            </div>
            <div className="flex flex-col justify-center text-center mr-4">
              <CallToAction href="/offers/events" className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-20 w-20 flex-none flex items-center justify-center">
                <MdiCalendarClock className="scale-[1.7]" />
              </CallToAction>
              <span className="text-xl">Eventos</span>
            </div>
            <div className="flex flex-col justify-center text-center mr-4 py-1">
              <CallToAction href="/offers/others" className="bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300 rounded-full h-20 w-20 flex-none flex items-center justify-center">
                <MdiCreationOutline className="scale-[1.7]" />
              </CallToAction>
              <span className="text-xl">Otros</span>
            </div>
          </div>
        </section>

        <section>
          <Offers
            className="text-2xl mx-4 mt-4 py-2 pb-6 h-auto flex flex-col items-center rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%"
            src="/images/comida.jpeg"
            altImg="comida"
            price="3,500"
            onClick={toggleDiv}
          >
            {isOpen && (
              <div className="text-xl text-left font-extralight ml-5 mt-6" ref={divRef}>
                <p>
                  ¡Prueba nuestro Wrapper de Carne! Jugosa carne envuelta en tortilla de trigo, con lechuga, tomate y cebolla caramelizada. Nutritivo y delicioso, perfecto para cualquier comida. ¡Descubre su sabor único hoy!
                </p>
              </div>
            )}
          </Offers>

          <Offers
            className="text-2xl mx-4 mt-4 py-2 pb-6 h-auto flex flex-col items-center rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%"
            src="/images/comida.jpeg"
            altImg="comida"
            price="3,500"
            onClick={toggleDiv}
          >
            {isOpen && (
              <div className="text-xl text-left font-extralight ml-5 mt-6" ref={divRef}>
                <p>
                  ¡Prueba nuestro Wrapper de Carne! Jugosa carne envuelta en tortilla de trigo, con lechuga, tomate y cebolla caramelizada. Nutritivo y delicioso, perfecto para cualquier comida. ¡Descubre su sabor único hoy!
                </p>
              </div>
            )}
          </Offers>

          <Offers
            className="text-2xl mx-4 mt-4 py-2 pb-6 h-auto flex flex-col items-center rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%"
            src="/images/comida.jpeg"
            altImg="comida"
            price="3,500"
            onClick={toggleDiv}
          >
            {isOpen && (
              <div className="text-xl text-left font-extralight ml-5 mt-6" ref={divRef}>
                <p>
                  ¡Prueba nuestro Wrapper de Carne! Jugosa carne envuelta en tortilla de trigo, con lechuga, tomate y cebolla caramelizada. Nutritivo y delicioso, perfecto para cualquier comida. ¡Descubre su sabor único hoy!
                </p>
              </div>
            )}
          </Offers>
        </section>
        <Footer />
      </main>
    </>
  )
}