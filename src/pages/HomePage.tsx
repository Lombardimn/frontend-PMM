import { CardSelector } from "../components/CardSelector"
import { MdiAccountEdit, MdiAccountGroup, MdiCashRegister, MdiFood, MdiInvoiceTextEdit, MdiPackageVariant } from "../components/IconMdi"
import { Navbar } from "../components/Navbar"

export const HomePage = () => {

  return (
    <>
      <Navbar />
      <main className="bg-gray-900 h-screen text-white">
        <section className="mx-2 pt-4">
          <h2 className="font-bold text-2xl">HOMEPAGE</h2>
          <p className="text-lg italic pb-3">Lorem ipsum dolor sit amet.</p>
        </section>
        
        <section className="mx-2 grid grid-cols-1 gap-2">
          <CardSelector
            href="/clients"
            className="py-6 bg-sky-600 font-bold border rounded-lg border-solid border-y-slate-950 h-auto w-auto"
            title="clientes"
          >
            <MdiAccountGroup className="scale-[3.0] ml-4 mr-3" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 bg-sky-600 font-bold border rounded-lg border-solid border-y-slate-950 h-auto w-auto"
            title="ofertas"
          >
            <MdiFood className="scale-[3.0] ml-4 mr-3" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 bg-sky-600 font-bold border rounded-lg border-solid border-y-slate-950 h-auto w-auto"
            title="inventario"
          >
            <MdiPackageVariant className="scale-[3.0] ml-4 mr-3" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 bg-sky-600 font-bold border rounded-lg border-solid border-y-slate-950 h-auto w-auto"
            title="usuarios"
          >
            <MdiAccountEdit className="scale-[3.0] ml-4 mr-3" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 bg-sky-600 font-bold border  rounded-lg border-solid border-y-slate-950 h-auto w-auto"
            title="finanzas"
          >
            <MdiCashRegister className="scale-[3.0] ml-4 mr-3" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 bg-sky-600 font-bold border border-solid rounded-lg  border-y-slate-950 h-auto w-auto"
            title="afip/pagos"
          >
            <MdiInvoiceTextEdit className="scale-[3.0] ml-4 mr-3" />
          </CardSelector>
        </section>
        

      </main>
    </>
  )
}