import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dateFormatter = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const formattedDate: string = date
    .toUTCString()
    .slice(0, date.toUTCString().length - 4);

  return `${formattedDate} (UTC)`;
};
