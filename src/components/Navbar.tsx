export const Navbar = () => {
  return (
    <header className="w-auto py-3 bg-gray-800 text-white flex justify-center items-center">
    <h1 className="text-xl font-bold">PMM</h1>
  <nav className="flex flex-row gap-2 justify-center items-center">
    <div className="flex items-center">
      <ul className="flex text-xl gap-2">
        <li className="hover:text-cyan-400"><a href="/">Home</a></li>
        <li className="hover:text-cyan-400"><a href="/products">Products</a></li>
      </ul>
    </div>
    <div className="flex items-center">
      <button className="bg-sky-600 py-2 px-4 font-bold border rounded-lg border-solid border-y-slate-950 h-auto w-auto">Acceder</button>
    </div>
  </nav>
</header>
  )
}