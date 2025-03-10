import React from "react"
import classnames from "classnames"

export default function Banner({ children, className, line, variant, ...rest }) {
    let lineClass = line && `banner-${line}`
    let variantClass = variant && `banner-${variant}`
    const allClasses = classnames(variantClass, lineClass, className)

    return (
        <div className={allClasses} {...rest}>
            {variant && <img src={`../../public/icons/${variant}.png`} alt={`${variant}-icon`} className="banner-icon"/>}
            {children}
        </div>
    )
}