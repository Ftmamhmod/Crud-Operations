export const NavBar = () => {
  return (
    <nav className="navbar ">
      <div className="shadow-lg">
        <form className="flex justify-between gap-6 w-full p-4" role="search">
          <input
            className="outline-0 form-control me-2 border border-neutral-300 focus:border-neutral-500 rounded-md p-2
            focus:flex-1 transition-all duration-300"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn cursor-pointer transition-all duration-300">
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
};
