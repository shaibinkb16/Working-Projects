'use client'
import { ThemeProvider as NextThemesprovider } from "next-themes";
export function ThemeProvider({ children, ...props}){
    return <NextThemesprovider {...props}>{children}</NextThemesprovider>
}