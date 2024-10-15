import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type UIInputDefaultProps = InputHTMLAttributes<HTMLInputElement>;

export interface UIInputProps extends UIInputDefaultProps {
  label?: string;
  inputStyle?: string;
  labelStyle?: string;
  blockStyle?: string;
  svgIcon?: React.ReactElement;
  isPassword?: boolean;
}

export interface UIPhoneInputProps extends UIInputDefaultProps {
  label?: string;
  inputStyle?: string;
  labelStyle?: string;
  blockStyle?: string;
  svgIcon?: boolean;
  isPassword?: boolean;
}

export interface UIFileInputProps extends UIInputDefaultProps {
  multiple?: boolean;
  label: string;
  onFileSelect?: any;
}

export interface UITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  blockStyle?: string;
}
