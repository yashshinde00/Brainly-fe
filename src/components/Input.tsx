import type { RefObject } from "react";

interface InputProps{
    placeholder ?: string;
    reference ?:  RefObject<HTMLInputElement>;
}
export function Input({ placeholder, reference }: InputProps) {
  return (
    <input
      ref={reference}
      placeholder={placeholder}
      type="text"
      className="px-2 py-2 border"
    />
  );
}
