import * as React from "react";
const PlusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    style={{
      fill: "#000",
    }}
    {...props}
  >
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
  </svg>
);
export default PlusIcon;
