'use client';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function SwitchThemes () {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(()=>{
        setMounted(true);
    }, [])

    if(!mounted) return(<p></p>);

    if(resolvedTheme === 'dark') {
        return <div className="p-3 bg-black flex justify-center items-center rounded-full" onClick={()=>setTheme('light')}><FiSun ></FiSun></div>
    } 

    if(resolvedTheme === 'light') {
        return <div className="p-3 bg-black flex justify-center items-center rounded-full" onClick={()=>setTheme('dark')}><FiMoon></FiMoon></div>
    } 
}