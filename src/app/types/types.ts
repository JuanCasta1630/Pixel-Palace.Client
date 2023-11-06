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
  initialTab: number;
}
export interface NewUserProps {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  birthdate: string;
  isRegistered: boolean;
}
