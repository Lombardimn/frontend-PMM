import { ButtonAction, CallToAction, Footer, Navbar } from "@/components"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Toaster, toast } from "sonner"

export const NewClientPage = () => {

  const  { register, handleSubmit, formState:{ errors } } = useForm()
  const  [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: any) => {
    if (data.values === null ) {
      console.log(data)
      toast.error('Campos obligatorios vacios', { duration: 3000 })
      return
    }
    setSubmitted(true)
    toast.success('Usuario registrado', { duration: 3000 })
};

  return (
    <>
      <header>
        <Navbar />
      </header>

      <Toaster 
        richColors 
        theme="system" 
        toastOptions={{
          style: {
            height: '40px',
            padding: '4px',
          },
          className: 'class',
        }}
      />

      <main className="bg-gray-900 h-full w-full text-white mt-24">
        <section className="mx-4 pt-4">
          <h2 className="font-bold text-3xl">Clientes</h2>
          <p className="text-lg italic pb-2">Consulta general de clientes.</p>
        </section>
        <section className="text-2xl mx-4 mt-4 p-1 h-auto rounded-lg w-auto bg-gradient-to-l from-blue-950 from-10% via-sky-950 via-30% bg-cyan-950 to-90%">

          <form onSubmit={handleSubmit(onSubmit)}>
            <span className="text-xl m-2">General</span>
            <div className="mx-2">
              <label htmlFor="firstNameClient" className="hidden md:block">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                name="firstNameClient"
                id="firstNameClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
              />
            </div>
            <div className="mx-2">
              <label htmlFor="lastNameClient" className="hidden md:block">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                name="lastNameClient"
                id="lastNameClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
              />
            </div>

            <span className="text-xl m-2">Contato</span>
            <div className="mx-2 flex flex-col justify-start">
              <div className="flex justify-between">
                <label htmlFor="prefixClient" className="hidden md:block">Prefijo</label>
                <label htmlFor="celClient" className="hidden md:block">Celular</label>
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

            <span className="text-xl m-2">Domicilio</span>
            <div className="mx-2">
              <label htmlFor="streetClient" className="hidden md:block">Calle</label>
              <input
                type="text"
                placeholder="Calle"
                name="streetClient"
                id="streetClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
              />
            </div>
            <div className="mx-2 flex flex-col justify-start mt-3">
              <div className="flex justify-between">
                <label htmlFor="numbStreetClient" className="hidden md:block">Número</label>
                <label htmlFor="floorClient" className="hidden md:block">Piso</label>
                <label htmlFor="DepartamentClient" className="hidden md:block">Dpto</label>
              </div>
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  placeholder="Número"
                  name="numbStreetClient"
                  id="numbStreetClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-2/4 p-2"
                />
                <input
                  type="text"
                  placeholder="Piso"
                  name="floorClient"
                  id="floorClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-1/3 p-2"
                />
                <input
                  type="text"
                  placeholder="Dpto"
                  name="DepartamentClient"
                  id="DepartamentClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-1/3 p-2"
                />
              </div>
            </div>
            <div className="mx-2 flex flex-col justify-start mt-3">
              <div className="flex justify-between">
                <label htmlFor="blockClient" className="hidden md:block">Manzana</label>
                <label htmlFor="lotClient" className="hidden md:block">Lote</label>
              </div>
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  placeholder="Manzana"
                  name="blockClient"
                  id="blockClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2"
                />
                <input
                  type="text"
                  placeholder="Lote"
                  name="lotClient"
                  id="lotClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2"
                />
              </div>
            </div>
            <div className="mx-2">
              <label htmlFor="localityClient" className="hidden md:block">Localidad</label>
              <input
                type="text"
                placeholder="Localidad"
                name="localityClient"
                id="localityClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
              />
            </div>
            <div className="mx-2">
              <label htmlFor="provinceClient" className="hidden md:block">Provincia</label>
              <input
                type="text"
                placeholder="Provincia"
                name="provinceClient"
                id="provinceClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
              />
            </div>
            <div className="mx-2">
              <label htmlFor="stateClient" className="hidden md:block">País</label>
              <input
                type="text"
                placeholder="País"
                name="stateClient"
                id="stateClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
              />
            </div>
            <section className="flex justify-center gap-4 mt-5 mb-3">
              <ButtonAction type="submit" className="h-auto w-auto text-center text-xl font-semibold p-2 border border-transparent bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300">
                Guardar
              </ButtonAction>
              <CallToAction href="/clients" className="h-auto w-auto text-center text-xl font-semibold p-2 border border-transparent rounded-lg bg-red-600 hover:bg-red-800 focus:ring focus:ring-red-300">
                Cancelar
              </CallToAction>
            </section>
          </form>
        </section>
        <Footer />
      </main>
    </>
  )
}