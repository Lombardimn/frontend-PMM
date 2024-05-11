import { CallToAction, CardContent, Footer, MdiAccountEdit, MdiDeleteEmpty, MdiMagnify, MdiPhone, Navbar } from "@/components"

export const ClientsPage = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-900 h-auto w-full text-white mt-24">
        <section className="mx-4 pt-4">
          <h2 className="font-bold text-3xl">Clientes</h2>
          <p className="text-lg italic pb-2">Consulta general de clientes.</p>
        </section>
        <section className="flex justify-center gap-4">
            <CallToAction href="" className="h-auto w-auto text-center text-xl font-semibold p-2 border border-transparent bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300">
              Nuevo Cliente
            </CallToAction>
            <CallToAction href="" className="h-auto w-auto text-center text-xl font-semibold p-2 border border-transparent bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300">
              Registro Gnral
            </CallToAction>
        </section>
        <section className="text-2xl mx-4 mt-4 p-1 h-auto rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%">
          <CardContent className="flex mt-2 mx-1 items-center justify-between">
            <input 
              id="search"
              name="search"
              type="text"
              placeholder="Usuario..."
              className="rounded-md bg-slate-50 border border-black text-gray-800 w-48 p-2" />
            <CardContent className="flex flex-row gap-2">
              <CallToAction href="" className="p-2 h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300">
                <MdiMagnify className="scale-[1.5]" />
              </CallToAction>
              <CallToAction href="" className="p-2 h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300">
                <MdiAccountEdit className="scale-[1.5]" />
              </CallToAction>
              <CallToAction href="" className="p-2 h-auto w-auto bg-red-600 rounded hover:bg-red-800 focus:ring focus:ring-red-300">
                <MdiDeleteEmpty className="scale-[1.5]" />
              </CallToAction>
            </CardContent>
          </CardContent>
          <CardContent className="mt-4 mx-1 h-52 w-auto relative rounded-md bg-slate-50 border border-black">
            <CallToAction href="" className="absolute right-2 top-2 p-2 h-auto w-auto bg-green-600 rounded hover:bg-green-800 focus:ring focus:ring-green-300">
              <MdiPhone className="scale-[1.5]" />
            </CallToAction>
            <div className="w-3/4 text-[20px]">
              <p className="text-gray-800">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-800">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-800">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-800">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-800">Lorem ipsum dolor sit amet.</p>
            </div>
          </CardContent>
          <CardContent className="mt-4 mx-1 h-52 w-auto rounded-md bg-slate-50 border border-black">
          </CardContent>
        </section>
        <Footer />
      </main>
    </>
  )
}