import React from 'react'
import {Editor} from "@/components/editor/Editor";
import Header from "@/components/Header";

const Document = () => {
    return (
        <div>
            <Header>
                <div className={"flex w-fit items-center justify-center gap-2"}>
                    <p className={"document-title"}>This is a fake.</p>
                </div>
            </Header>
            <Editor/>
        </div>
    )
}
export default Document
