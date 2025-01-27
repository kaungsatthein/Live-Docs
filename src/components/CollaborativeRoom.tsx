"use client"
import {ClientSideSuspense, RoomProvider} from "@liveblocks/react";
import Header from "@/components/Header";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {Editor} from "@/components/editor/Editor";
import React from "react";

const CollaborativeRoom = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
               <div className={"collaborative-room"}>
                   <Header>
                       <div className={"flex w-fit items-center justify-center gap-2"}>
                           <p className={"document-title"}>This is a fake.</p>
                       </div>
                       <SignedOut>
                           <SignInButton />
                       </SignedOut>
                       <SignedIn>
                           <UserButton />
                       </SignedIn>
                   </Header>
                   <Editor/>
               </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}
export default CollaborativeRoom
