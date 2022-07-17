const filterList = [
  "all",
  "class",
  "design",
  "API",
  "Coding Problem",
  "Cloud Computing",
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };
  console.log(currentFilter);

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
