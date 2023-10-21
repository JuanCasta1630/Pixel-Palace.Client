export interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
}

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: number
}
