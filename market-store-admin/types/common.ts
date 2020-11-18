export interface ErrorPayload {
  statusCode: number;
  message: string;
}

export enum AlertType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export enum Align {
  Top = "top",
  Right = "right",
  Left = "left",
  Bottom = "bottom",
}

export interface AlertMutation {
  message: string;
  type: AlertType;
  icon?: string;
}

export interface SnackbarMutation {
  message: string;
  color?: string;
  timeout?: number;
  align?: Align;
}

export interface Metadata {
  createBy?: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface DrawerItem {
  icon: string;
  title: string;
  to: string;
}
