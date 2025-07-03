const TaskFilter = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: "all", label: "All", count: taskCounts.all },
    { key: "pending", label: "Pending", count: taskCounts.pending },
    { key: "completed", label: "Completed", count: taskCounts.completed },
  ];

  return (
    <div className="task-filter">
      <h3>Filter Tasks</h3>
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-btn ${
              currentFilter === filter.key ? "active" : ""
            }`}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;
