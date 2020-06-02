/*import React from "react";
import DropDown from "./DropDown";
import { useGlobalState } from "../../context/GlobalContext";

const CategorySelector = ({ onChange, selectedId }) => {
  const { category } = useGlobalState();

  return (
    <div>
      <DropDown
        t={selectedId}
        items={category}
        name="Categorie"
        active={true}
        onChange={onChange}
      />
    </div>
  );
};

export default CategorySelector;