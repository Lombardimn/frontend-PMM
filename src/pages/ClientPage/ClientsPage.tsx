import { CallToAction, CardContent, MdiAccountEdit, MdiDeleteEmpty, MdiMagnify, Navbar } from "@/components"

export const ClientsPage = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-900 h-svh w-svw text-white mt-24">
        <section className="mx-4 pt-4">
          <h2 className="font-bold text-3xl">Clientes</h2>
          <p className="text-lg italic pb-3">Gestor interno de negocio.</p>
        </section>
        <section>
            <CallToAction href="/" className="h-auto w-auto mx-4 bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-md">
              Nuevo Cliente
            </CallToAction>
        </section>
        <section className="text-2xl mx-4 mt-8 p-1 h-auto rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%">
          <CardContent className="flex mt-2 mx-1 items-center justify-between">
            <input type="text" placeholder="Usuario..." className="rounded-md bg-slate-50 border border-black text-gray-800 w-48 p-2" />
            <CardContent className="flex flex-row gap-2">
              <CallToAction href="" className="p-2 h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded">
                <MdiMagnify className="scale-[1.5]" />
              </CallToAction>
              <CallToAction href="/" className="p-2 h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded">
                <MdiAccountEdit className="scale-[1.5]" />
              </CallToAction>
              <CallToAction href="/" className="p-2 h-auto w-auto bg-red-600 rounded">
                <MdiDeleteEmpty className="scale-[1.5]" />
              </CallToAction>
            </CardContent>
          </CardContent>
          <CardContent className="mt-4 mx-1 h-52 w-auto rounded-md bg-slate-50 border border-black">
          </CardContent>
          <CardContent className="mt-4 mx-1 h-52 w-auto rounded-md bg-slate-50 border border-black">
          </CardContent>
        </section>
      </main>
    </>
  )
}