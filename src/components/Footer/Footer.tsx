import { CallToAction } from "../Button"
import { Partner } from "./Partner"

export const Footer = () => {
  return (
    <footer className="h-[250px] w-full bg-gray-800 mt-10">
      <section>
        <CallToAction href="/" className="">
          Contactos
        </CallToAction>
        <CallToAction href="/" className="">
          Empresa
        </CallToAction>
        <CallToAction href="/" className="">
          Mapa del sitio
        </CallToAction>
      </section>
      <Partner
        className=""
        altImg="logo de lombardidev" 
        srcImg="https://lombardidev.ar" 
        classNameImg=""  >
        <p>@lombardidev 2024</p>
        <p>|</p>
        <p>&copy; Todos los derechos reservados</p>
      </Partner>
    </footer>
  )
} 