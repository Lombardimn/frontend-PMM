import { CallToAction } from "../Button"
import { Partner } from "./Partner"

export const Footer = () => {
  return (
    <footer className="h-auto w-full bg-gray-800 mt-10">
      <section className="text-xl flex flex-col justify-center items-center gap-3 py-4">
        <CallToAction href="/" className="">
          Contactos
        </CallToAction>
        <div className="border-t border-gray-600 w-10"></div>
        <CallToAction href="/" className="">
          Empresa
        </CallToAction>
        <div className="border-t border-gray-600 w-10"></div>
        <CallToAction href="/" className="">
          Mapa del sitio
        </CallToAction>
      </section>
      <Partner
        className="flex flex-col justify-center items-center text-sm"
        altImg="logo de lombardidev" 
        href="https://lombardidev.ar"
        srcImg="/src/assets/logomain.png" 
        classNameImg="w-16 h-16 mx-auto"  >
        <p className="">@lombardidev 2024</p>
        <span className="visible mx-2 md:invisible">|</span>
        <p>&copy; Todos los derechos reservados</p>
      </Partner>
    </footer>
  )
} 