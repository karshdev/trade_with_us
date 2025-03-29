import ReactSelect from 'react-select';
import { Label } from './Label';

export interface SelectProps {
  label?: string;
  value?: { value: string; label: string };
  onChange: (option: { value: string; label: string } | null) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  isRequired?: boolean;
}

const customStyles = {
  control: (base: any) => ({
    ...base,
    minHeight: '42px',
    height: '42px',
    backgroundColor: 'white',
    borderColor: '#E2E8F0',
    '&:hover': {
      borderColor: '#CBD5E1',
    },
    boxShadow: 'none',
    '&:focus-within': {
      borderColor: '#2563EB',
      boxShadow: '0 0 0 1px #2563EB',
    },
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: '0 12px',
    height: '42px',
  }),
  input: (base: any) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: '#1F2937',
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#9CA3AF',
  }),
  singleValue: (base: any) => ({
    ...base,
    color: '#1F2937',
  }),
  option: (base: any, state: { isSelected: boolean; isFocused: boolean }) => ({
    ...base,
    backgroundColor: state.isSelected 
      ? '#2563EB'
      : state.isFocused 
      ? '#EFF6FF'
      : 'white',
    color: state.isSelected ? 'white' : '#1F2937',
    cursor: 'pointer',
    '&:active': {
      backgroundColor: state.isSelected ? '#2563EB' : '#DBEAFE',
    },
  }),
  menu: (base: any) => ({
    ...base,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: '6px',
  }),
};

export function Select({ label, value, onChange, options, placeholder, isRequired }: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <Label htmlFor="select" className="mb-1.5">
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}
      <ReactSelect
        id="select"
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        className="w-full"
        classNamePrefix="react-select"
        isSearchable={false}
      />
    </div>
  );
} 