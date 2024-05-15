import { CardContent, Footer, Navbar } from "@/components"

export const OffersPage = () => {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-900 h-svh w-svw text-white mt-24">
        <section className="mx-4 pt-4">
          <h2 className="font-bold text-3xl">Ofertas</h2>
          <p className="text-lg italic pb-3">Gestiones y Menús activos.</p>
        </section>

        <section className="bg-gray-700 overflow-hidden relative">
          <div className="flex">
            <CardContent className="bg-cyan-300 rounded-full w-24 h-24 m-4 flex items-center justify-center">
              IMG
            </CardContent>
            <CardContent className="bg-cyan-300 rounded-full w-24 h-24 m-4 flex items-center justify-center">
              IMG
            </CardContent>
            <CardContent className="bg-cyan-300 rounded-full w-24 h-24 m-4 flex items-center justify-center">
              IMG
            </CardContent>
            <CardContent className="bg-cyan-300 rounded-full w-24 h-24 m-4 flex items-center justify-center">
              IMG
            </CardContent>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}