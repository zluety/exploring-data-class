import * as React from "react"

export default function List({ children }) {
    return (
      <ul className="grid grid-cols-1 gap-2 place-items-center">
        {children}
      </ul>
    )
  }