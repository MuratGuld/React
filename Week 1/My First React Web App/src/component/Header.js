// Header component
const Header = () => {
  return (
    <nav class="navbar navbar-dark bg-primary justify-content-between p-2">
      <a class="navbar-brand">Navbar</a>
      <div>
        <a class="btn my-2 my-sm-0 text-white">Home</a>
        <a class="btn my-2 my-sm-0 text-white">About</a>
        <a class="btn my-2 my-sm-0 text-white">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
