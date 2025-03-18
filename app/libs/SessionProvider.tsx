"use client"
import  {ReactNode} from 'react';
import {SessionProvider} from "next-auth/react";

type SessionProviderProps = {
  children: ReactNode;
}

function NextSessionProvider(props:SessionProviderProps) {
  return (
    <SessionProvider>{props.children}</SessionProvider>
  );
}

export default NextSessionProvider;