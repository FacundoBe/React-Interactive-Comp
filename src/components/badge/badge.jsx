/* eslint-disable react/prop-types */

export default function Badge({ color = "gray", border = "square", children }) {
    const colors = { gray: ["#F3F4F6", "#1F2937"], red: ["#FEE2E2", "#991B1B"] }
    !(color in colors) && (color = "gray");
    const radius = border === "pill" ? "12px" : "4px"

    return (

        <div className="badge"
            style={{ backgroundColor: colors[color][0], color: colors[color][1], borderRadius: radius }
            }>
            {children}
        </div>
    )
}

