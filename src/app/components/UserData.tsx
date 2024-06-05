import Image from "next/image";

interface UserDataProps {
  avatar: string;
  name: React.ReactNode;
}
export default function UserData ({avatar, name}:UserDataProps) {

    return(
        <div className="flex items-center gap-3 mb-4">
        <Image className="rounded-full" src={avatar} alt="Avatar" width={50} height={50}/>
        <p className="font-medium text-xl leading-5">{name}</p>
      </div>
    )
}