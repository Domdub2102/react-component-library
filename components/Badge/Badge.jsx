import React from "react"
import classnames from "classnames"

export default function Badge({ children, className, shape, color, ...rest }) {
    let variantClass = shape && `badge-${shape}`
    let colorClass = color && `badge-${color}`
    const allClasses = classnames(variantClass, colorClass, className)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}