import React, { useState } from "react";
import Select, { components } from "react-select";

export interface Option {
  value: string;
  label: string;
}


const options: Option[] = [
  { value: " Schools", label: " Schools" },
  { value: " Hospitals", label: " Hospitals" },
  { value: " Resort Park", label: " Resort Park" },
  { value: " Shopping Malls", label: " Shopping Malls" },
  { value: " Airport", label: " Airport" },
  { value: " Train Station", label: " Train Station" },
  { value: " Nightlife", label: " Nightlife" },
  { value: " Public Wifi", label: " Public Wifi" },
  { value: " Parking Lot", label: " Parking Lot" },
  { value: " Public Transport", label: " Public Transport" },
  { value: " Bus Station", label: " Bus Station" },
  { value: " Traffic", label: " Traffic" },
  { value: " Adult Home", label: " Adult Home" },
  { value: " Pet Store", label: " Pet Store" },
  { value: "Gym", label: " Gym" },
  { value: " Quiet", label: " Quiet" },
  { value: " Recreation", label: " Recreation" },
  
  // Add more options as needed
];

const CheckboxOption: React.FC<any> = (props) => {
  return (
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} onChange={() => {}} />
      {props.label}
    </components.Option>
  );
};
interface MultiSelectDropdownProps {
  selectedAmenities: Option[];
  onChange: (selectedOptions: Option[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ selectedAmenities, onChange }) => {
  const handleChange = (selectedOptions: readonly Option[]) => {
    onChange(selectedOptions as Option[]);
  };


  return (
    <Select
      isMulti
      options={options}
      onChange={handleChange}
      placeholder="Select Amenities"
      components={{ Option: CheckboxOption }}
      blurInputOnSelect={false}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      
    />
  );
};

export default MultiSelectDropdown;
