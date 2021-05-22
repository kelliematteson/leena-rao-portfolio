import React from "react"
import { StaticImage } from "gatsby-plugin-image"


export default function Logo() {
    return (
        <StaticImage
        src="../images/leenaRao.png"
        width={200}
        height={200}
        alt="Profile picture"
        placeholder="blurred"
        layout="fixed"
      />
    )
}
