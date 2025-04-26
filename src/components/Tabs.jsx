import { useState } from "react";

function Tabs({ options, onChange, defaultValue, className }) {
  if (options.length <= 0) return null;
  const [selected, setSelected] = useState(
    defaultValue ? defaultValue : options[0].value
  );

  const handleClick = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className={`tab ${className}`}>
      {options.map((item) => (
        <button
          key={item.id}
          data-text={item.value}
          className={
            item.value === selected ? "tab-button active" : "tab-button"
          }
          onClick={() => handleClick(item.value)}
        >
          {item.title}
        </button>
      ))}
      <div
        className="tab-selected"
        style={{
          width: `calc(100% / ${options.length} - 3px)`,
          transform: `translate(${
            options.findIndex((item) => item.value === selected) * 100
          }%, -50%)`,
        }}
      ></div>
    </div>
  );
}

export default Tabs;
