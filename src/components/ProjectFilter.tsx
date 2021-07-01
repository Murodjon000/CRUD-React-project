import React, { FC } from "react";
import category from "../helper/category";

const ProjectFilter: FC<{ filter: string; handleFilterChange: any }> = ({
  filter,
  handleFilterChange,
}) => {
  const categories = ["All", ...category];
  return (
    <div className="filter__wrapper">
      <select
        name="category"
        value={filter}
        className="test-filter"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        {categories.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectFilter;
