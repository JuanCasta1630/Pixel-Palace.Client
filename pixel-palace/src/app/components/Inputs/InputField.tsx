import React, { useState } from "react";
import { Input, Form } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { InputFieldProps } from "@/app/types/types";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  const iconMap = {
    text: <UserOutlined className="text-primary" />,
    email: <MailOutlined className="text-primary" />,
    password: <LockOutlined className="text-primary" />,
    date: <CalendarOutlined className="text-primary" />,
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form.Item
      label={label}
      name={label}
      //@ts-ignore
      rules={
        required
          ? [
              { required: true, message: `Por favor ingrese su ${label}` },
              type === "email" && {
                type: "email",
                message: "Correo electrónico no válido",
              },
              type === "date" && { type: "date", message: "Fecha no válida" },
            ]
          : []
      }
      labelCol={{ span: 24 }}
    >
      <Input
        //@ts-ignore
        prefix={iconMap[type]}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        value={value}
        //@ts-ignore
        onChange={onChange}
        placeholder={placeholder}
        suffix={
          type === "password" && (
            <div
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? (
                <EyeOutlined className="text-primary" />
              ) : (
                <EyeInvisibleOutlined className="text-primary" />
              )}
            </div>
          )
        }
      />
    </Form.Item>
  );
};

export default InputField;
