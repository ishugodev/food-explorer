import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles.ts";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <Container {...props}>{props.children}</Container>;
}
