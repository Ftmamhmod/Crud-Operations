export const NavBar = () => {
  return (
    <nav className="navbar ">
      <div className="">
        <form className="flex justify-between w-full p-4" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn ">Logout</button>
        </form>
      </div>
    </nav>
  );
};
