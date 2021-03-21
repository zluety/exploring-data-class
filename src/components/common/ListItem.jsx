import * as React from "react"
import { CalendarIcon, MarkGithubIcon } from '@primer/octicons-react'

export default function ListItem({ props }) {
    return (
        <div class="shadow-md bg-white rounded-lg w-8/12 m-2">
            <div className="text-lg text-white font-bold bg-gradient-to-br from-pink-500 to-red-500 mb-0.5 rounded-t-lg">
                <h2 className="ml-1">{props.title}</h2>

            </div>
            <p className="text-sm font-medium text-gray-500 m-2">
                {props.description}
            </p>
            <div className="text-sm text-black m-2">
                <CalendarIcon size={16} />
                {props.date}
            </div>
            <div className="text-sm text-black m-2">
                <MarkGithubIcon size={16} />
                <a href={props.link}>Resources</a>
            </div>
        </div>
    )
}

