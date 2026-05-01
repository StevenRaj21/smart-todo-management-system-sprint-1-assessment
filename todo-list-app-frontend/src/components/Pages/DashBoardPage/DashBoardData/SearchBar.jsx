import "../DashboardHomePage/DashBoardHome.Page.css"

const SearchBar = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder={placeholder}
    />
  );
};

export default SearchBar;