import React from "react";

type Props = {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
};
const SelectBox = ({ onChange, children }: Props) => {
  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default SelectBox;
