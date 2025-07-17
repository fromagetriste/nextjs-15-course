import { ReactNode } from "react";

type NoteLayoutProps = {
  children: ReactNode;
};

export default function NoteLayout({ children }: NoteLayoutProps) {
  return <>{children}</>;
}
