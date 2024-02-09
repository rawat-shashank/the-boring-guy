"use client"
import { MDXRemote } from "next-mdx-remote"

const components = {}
export const MDXWrapper = ({source}) => {
    return (
        <MDXRemote {...source} components={components}/>
    )
}