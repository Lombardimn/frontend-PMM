import { ButtonAction, CallToAction, Footer, Navbar } from "@/components"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Toaster, toast } from "sonner"
import { FormData } from "../../models/Interfaces"

export const NewClientPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: FormData) => {
    if (data.firstNameClient === ' ') {
      console.log(data)
      toast.error('Campos obligatorios vacios', { duration: 3000 })
      return
    }
    setSubmitted(true)
    toast.success('Usuario registrado', { duration: 3000 })
  }

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
              <label htmlFor="firstNameClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Nombres</label>
              <input
                type="text"
                placeholder="Nombre"
                id="firstNameClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
                {...register(
                  "firstNameClient",
                  {
                    required: 'Por favor ingresa un nombre',
                    maxLength: 20
                  }
                )}
              />
              {
                errors.firstNameClient && (
                  <span
                    className="font-semibold text-red-400 italic mt-1 text-lg"
                  >
                    {errors.firstNameClient?.message}
                  </span>
                )
              }
            </div>
            <div className="mx-2">
              <label htmlFor="lastNameClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                id="lastNameClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
                {...register(
                  "lastNameClient",
                  {
                    required: 'Por favor ingresa un apellido',
                    maxLength: 32
                  }
                )}
              />
              {
                errors.lastNameClient && (
                  <span
                    className="font-semibold text-red-400 italic mt-1 text-lg"
                  >
                    {errors.lastNameClient?.message}
                  </span>
                )
              }
            </div>

            <span className="text-xl m-2">Contato</span>
            <div className="mx-2 flex flex-col justify-start">
              <div className="flex justify-between">
                <label htmlFor="prefixClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Prefijo</label>
                <label htmlFor="celClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Celular</label>
              </div>
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  placeholder="Prefijo"
                  id="prefixClient"
                  maxLength={5}
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-2/4 p-2"
                  {...register(
                    "prefixClient",
                    {
                      required: 'Por favor ingresa el código de área',
                      maxLength: 5,
                      minLength: 4,
                    }
                  )}
                />
                <input
                  type="number"
                  inputMode="numeric"
                  maxLength={7}
                  placeholder="Número"
                  id="celClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2"
                  {...register(
                    "celClient",
                    {
                      required: 'Por favor ingresa el número sin el 15',
                      minLength: { value: 7 , message:'Debe ingresar un mínimo de 7 dígitos' },
                      maxLength: { value: 7 , message:'Debe ingresar un máximo de 7 dígitos' }
                    }
                  )}
                />
              </div>
              <div className="flex justify-between gap-4">
                {
                  errors.prefixClient && (
                    <span
                      className="font-semibold text-red-400 italic mt-1 text-lg"
                    >
                      {errors.prefixClient?.message}
                    </span>
                  )
                }
                {
                  errors.celClient && (
                    <span
                      className="font-semibold text-red-400 italic mt-1 text-lg"
                    >
                      {errors.celClient?.message}
                    </span>
                  )
                }
              </div>
            </div>

            <span className="text-xl m-2">Domicilio</span>
            <div className="mx-2">
              <label htmlFor="streetClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Calle</label>
              <input
                type="text"
                placeholder="Calle"
                id="streetClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
                {...register(
                  "streetClient",
                  {
                    required: 'Por favor ingresa la calle',
                    maxLength: 50
                  }
                )}
              />
              {
                  errors.streetClient && (
                    <span
                      className="font-semibold text-red-400 italic mt-1 text-lg"
                    >
                      {errors.streetClient?.message}
                    </span>
                  )
              }
            </div>
            <div className="mx-2 flex flex-col justify-start mt-3">
              <div className="flex justify-between">
                <label htmlFor="numbStreetClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Número</label>
                <label htmlFor="floorClient" className="hidden md:block">Piso</label>
                <label htmlFor="departamentClient" className="hidden md:block">Dpto</label>
              </div>
              <div className="flex justify-between gap-4">
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Número"
                  id="numbStreetClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-2/4 p-2"
                  {...register(
                    "numbStreetClient",
                    {
                      required: 'Por favor ingresa la altura',
                      minLength: {value: 3, message: 'Ingrese por lo menos 3 dígitos'},
                      maxLength: {value: 4, message: 'No puede ingresar mas de 4 dígitos'}
                    }
                  )}
                />
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Piso"
                  id="floorClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-1/3 p-2"
                  {...register(
                    "floorClient",
                    {
                      maxLength: {value: 2, message:'No se permite más de 2 dígitos' }
                    }
                  )}
                />
                <input
                  type="text"
                  placeholder="Dpto"
                  id="departamentClient"
                  className="rounded-md bg-slate-50 border border-black text-gray-800 w-1/3 p-2"
                  {...register(
                    "departamentClient",
                    {
                      maxLength: {value: 2, message: 'No se permite más de 2 carácteres'}
                    }
                  )}
                />
              </div>
              <div className="flex justify-between gap-4">
                {
                  errors.numbStreetClient && (
                    <span
                      className="font-semibold text-red-400 italic mt-1 text-lg"
                    >
                      {errors.numbStreetClient?.message}
                    </span>
                  )
                }
                {
                  errors.floorClient && (
                    <span
                      className="font-semibold text-red-400 italic mt-1 text-lg"
                    >
                      {errors.floorClient?.message}
                    </span>
                  )
                }
                {
                  errors.departamentClient && (
                    <span
                      className="font-semibold text-red-400 italic mt-1 text-lg"
                    >
                      {errors.departamentClient?.message}
                    </span>
                  )
                }
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
              <label htmlFor="localityClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Localidad</label>
              <input
                type="text"
                placeholder="Localidad"
                name="localityClient"
                id="localityClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
              />
            </div>
            <div className="mx-2">
              <label htmlFor="provinceClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Provincia</label>
              <input
                type="text"
                placeholder="Provincia"
                name="provinceClient"
                id="provinceClient"
                className="rounded-md bg-slate-50 border border-black text-gray-800 w-full p-2 mt-3"
              />
            </div>
            <div className="mx-2">
              <label htmlFor="stateClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">País</label>
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