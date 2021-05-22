import React from "react"
import { StaticImage } from "gatsby-plugin-image"


export default function Logo() {
    return (
        <StaticImage
        src="../images/leenaRao.png"
        width={100}
        height={100}
        alt="Profile picture"
        placeholder="blurred"
        layout="fixed"
      />
    )
}
