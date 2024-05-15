/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonAction, CallToAction, Footer, Navbar } from "@/components"
import { Country, Provinces, Cities, Neighborhoods } from "@/models"
import { Province, City, Neighborhood } from "@/models"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { ChangeEvent, useState } from "react"
import { Toaster, toast } from "sonner"

export const NewClientPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [submitted, setSubmitted] = useState(false)
 

  //ESTADOS DE SELECTORES

  const [country, setCountry] = useState('')
  const [provinceValue, setProvinceValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const [nbhValue, setNbhValue] = useState('')


  //DATOS DE LOCACIÓN

  const [province, setProvince] = useState<Province[]>([])
  const [city, setCity] = useState<City[]>([])
  const [neighborhood, setNeighborhood] =  useState<Neighborhood[]>([])


  //FUNCIONES PARA LECTURA DE SELECTORES

  const handleProvince = (e: ChangeEvent<HTMLSelectElement>) => {
    const getCountryId = parseInt(e.target.value)
    const getProvinceData: Province[] = Provinces.filter(province => province.id_countrie === getCountryId)
    setCountry(e.target.value)

    if (getProvinceData.length > 0) {
      setProvince(getProvinceData)
    } else {
      setProvince([{ id: 0, id_countrie: 0, province: 'Sin datos' }])
    }
  }

  const handleCity = (e: ChangeEvent<HTMLSelectElement>) => {
    const getProvinceId = parseInt(e.target.value)
    const getCityData: City[] = Cities.filter(city => city.id_province === getProvinceId)
    setProvinceValue(e.target.value)

    if (getCityData.length > 0) {
      setCity(getCityData)
    } else {
      setCity([{ id: 0, id_province: 0, city: 'Sin datos' }])
    }
  }

  const handleNeighborhood = (e: ChangeEvent<HTMLSelectElement>) => {
    const getCityId = parseInt(e.target.value)
    const getNeighborhoodData: Neighborhood [] = Neighborhoods.filter(nbh => nbh.id_city === getCityId)
    setCityValue(e.target.value)

    if (getNeighborhoodData.length > 0) {
      setNeighborhood(getNeighborhoodData)
    } else {
      setNeighborhood([{ id: 0, id_city: 0, neighborhood: 'Sin datos'}])
    }
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNbhValue(e.target.value)
  }



  //PRE-VALIDACIONES DE CARGA DE DATOS

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.firstNameClient === ' ') {
      console.log(data)
      toast.error('Campos obligatorios vacios', { duration: 3000 })
      return
    }
    setSubmitted(true)
    console.log(data)
    console.log(submitted)
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
            height: '50px',
            padding: '6px',
            fontSize: '18px'
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
                    {errors.firstNameClient?.message?.toString()}
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
                    {errors.lastNameClient?.message?.toString()}
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
                      {errors.prefixClient?.message?.toString()}
                    </span>
                  )
                }
                {
                  errors.celClient && (
                    <span
                      className="font-semibold text-red-400 italic mt-1 text-lg"
                    >
                      {errors.celClient?.message?.toString()}
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
                      {errors.streetClient?.message?.toString()}
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
                      {errors.numbStreetClient?.message?.toString()}
                    </span>
                  )
                }
                {
                  errors.floorClient && (
                    <span
                      className="font-semibold text-red-400 italic mt-1 text-lg"
                    >
                      {errors.floorClient?.message?.toString()}
                    </span>
                  )
                }
                {
                  errors.departamentClient && (
                    <span
                      className="font-semibold text-red-400 italic mt-1 text-lg"
                    >
                      {errors.departamentClient?.message?.toString()}
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
            <div className="mx-2 mt-3">
              <label htmlFor="stateClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">País</label>
              <select
                name="stateClient"
                id="stateClient"
                value={country}
                onChange={(e) => handleProvince(e)}
                className="rounded-md bg-slate-50 border border-black text-gray-600 w-full p-2"
              >
                <option 
                  value="" 
                  disabled
                  className="absolute z-10 mt-1 max-h-56 w-2/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >Selecciona un país</option>
                {
                  Country.map((country) => (
                    <option 
                      value={country.id} 
                      key={country.id}
                      className= "rounded-md bg-slate-50 text-gray-800 p-1 text-base"
                    >
                      {country.country}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="mx-2 mt-3">
              <label htmlFor="provinceClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Provincia</label>
              <select 
                name="provinceClient" 
                id="provinceClient"
                value={provinceValue}
                onChange={(e) => handleCity(e)}
                className="rounded-md bg-slate-50 border border-black text-gray-600 w-full p-2"
              >
                <option 
                  value=""
                  disabled 
                  className="absolute z-10 mt-1 max-h-56 w-2/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >Selecciona una provincia</option>
                  {
                    province.map((province) => (
                      <option 
                        value={province.id} 
                        key={province.id}
                        className= "rounded-md bg-slate-50 text-gray-800 p-1 text-base"
                      >
                        {province.province}
                      </option>
                    ))
                  }
              </select>
            </div>
            <div className="mx-2 mt-3">
              <label htmlFor="cityClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Ciudad</label>
              <select 
                name="cityClient" 
                id="cityClient"
                value={cityValue}
                onChange={(e) => handleNeighborhood(e)}
                className="rounded-md bg-slate-50 border border-black text-gray-600 w-full p-2"
              >
                <option 
                  value=""
                  disabled 
                  className="absolute z-10 mt-1 max-h-56 w-2/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >Selecciona una Ciudad</option>
                  {
                    city.map((city) => (
                      <option 
                        value={city.id} 
                        key={city.id}
                        className= "rounded-md bg-slate-50 text-gray-800 p-1 text-base"
                      >
                        {city.city}
                      </option>
                    ))
                  }
              </select>
            </div>
            <div className="mx-2 mt-3">
              <label htmlFor="neighborhoodClient" className="hidden md:block after:content-['*'] after:ml-0.5 after:text-red-500">Barrio</label>
              <select 
                name="neighborhoodClient" 
                id="neighborhoodClient"
                value={nbhValue}
                onChange={(e) => handleChange(e)}
                className="rounded-md bg-slate-50 border border-black text-gray-600 w-full p-2"
              >
                <option 
                  value=""
                  disabled 
                  className="absolute z-10 mt-1 max-h-56 w-2/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >Selecciona un barrio</option>
                  {
                    neighborhood.map((nbh) => (
                      <option 
                        value={nbh.id} 
                        key={nbh.id}
                        className= "rounded-md bg-slate-50 text-gray-800 p-1 text-base"
                      >
                        {nbh.neighborhood}
                      </option>
                    ))
                  }
              </select>
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
