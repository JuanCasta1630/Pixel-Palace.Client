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
export interface Game  {
  categoria: string[];
  desarrollador: string;
  fecha_lanzamiento: string;
  imagen: string;
  nombre: string;
  precio: number;
};

export interface NewUserProps {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  birthday: string;
  isRegistered?: boolean;
}
