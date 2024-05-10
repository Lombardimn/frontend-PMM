import { 
  CardSelector,
  Navbar,
  MdiAccountEdit,
  MdiAccountGroup,
  MdiCashRegister,
  MdiFood,
  MdiInvoiceTextEdit,
  MdiPackageVariant,
  Footer
} from "@/components"

export const HomePage = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-900 h-svh w-svw text-white mt-24">
        <section className="mx-4 pt-4">
          <h2 className="font-bold text-3xl">MyPyme</h2>
          <p className="text-lg italic pb-3">Gestor interno de negocio.</p>
        </section>
        
        <section className="mx-3 grid grid-cols-1 gap-2">
          <CardSelector
            href="/clients"
            className="py-6 font-bold border border-solid border-transparent rounded-xl border-y-slate-950 h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="clientes"
          >
            <MdiAccountGroup className="scale-[3.0] ml-5 mr-5" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 font-bold border border-solid border-transparent rounded-xl border-y-slate-950 h-auto w-auto bg-gradient-to-r  from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="ofertas"
          >
            <MdiFood className="scale-[3.0] ml-5 mr-5" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 font-bold border border-solid border-transparent rounded-xl border-y-slate-950 h-auto w-auto bg-gradient-to-r  from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="inventario"
          >
            <MdiPackageVariant className="scale-[3.0] ml-5 mr-5" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 font-bold border border-solid border-transparent rounded-xl border-y-slate-950 h-auto w-auto bg-gradient-to-r  from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="usuarios"
          >
            <MdiAccountEdit className="scale-[3.0] ml-5 mr-5" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 font-bold border border-solid border-transparent rounded-xl border-y-slate-950 h-auto w-auto bg-gradient-to-r  from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="finanzas"
          >
            <MdiCashRegister className="scale-[3.0] ml-5 mr-5" />
          </CardSelector>
          <CardSelector 
            href="/"
            className="py-6 font-bold border border-solid border-transparent rounded-xl border-y-slate-950 h-auto w-auto bg-gradient-to-r  from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="afip/pagos"
          >
            <MdiInvoiceTextEdit className="scale-[3.0] ml-5 mr-5" />
          </CardSelector>
        </section>
        <Footer/>
      </main>
    </>
  )
}