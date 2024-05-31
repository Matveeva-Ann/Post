export interface BtnNextProps {
  onClick: () => void;
  children: string;
}

export default function Btn({ onClick, children }: BtnNextProps) {
  return <button onClick={onClick} className="m-4 mb-8 p-2 px-4 bg-black">{children}</button>;
}
