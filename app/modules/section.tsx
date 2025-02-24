import { ReactNode } from "react"

interface Props {
    children: ReactNode
    heading?: string
    className?: string
}

export default function Section({children, heading="", className=""}: Props) {
    return (
        <section className={`mt-4 ${className}`}>
            <h6 className="text-lg font-semibold text-green-500">{heading}</h6>
            {children}
        </section>
    )
}