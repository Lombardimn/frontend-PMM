import { Navbar } from "@/components"

export const NewClientPage = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-900 h-svh w-full text-white mt-24">
        <section className="mx-4 pt-4">
          <h2 className="font-bold text-3xl">Clientes</h2>
          <p className="text-lg italic pb-2">Consulta general de clientes.</p>
        </section>
        <section className="text-2xl mx-4 mt-4 p-1 h-auto rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%">
          <form action="">
            <div className="mx-2">
              <label htmlFor="firstNameClient">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                name="firstNameClient"
                id="firstNameClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2"
              />
            </div>
            <div className="mx-2">
              <label htmlFor="lastNameClient">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                name="lastNameClient"
                id="lastNameClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2"
              />
            </div>
            <span>Contato</span>
            <div className="mx-2 flex flex-col justify-start">
              <div className="flex justify-between">
                <label htmlFor="prefixClient">Prefijo</label>
                <label htmlFor="celClient">Celular</label>
              </div>
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  placeholder="Prefijo"
                  name="prefixClient"
                  id="prefixClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-2/4 p-2"
                />
                <input
                  type="text"
                  placeholder="Número"
                  name="celClient"
                  id="celClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2"
                />
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}