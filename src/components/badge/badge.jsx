/* eslint-disable react/prop-types */
import './Badge.css'

export default function Badge({ color = "gray", border = "square", children }) {
    const colors = {
        gray: ["#F3F4F6", "#1F2937"], red: ["#FEE2E2", "#991B1B"], yellow: ["#FEF3C7", "#92400E"],
        green:["#D1FAE5","#065F46"],  blue:["#DBEAFE", "#1E40AF"], indigo:["#E0E7FF","#3730A3"],
        purple:["#EDE9FE","#5B21B6"], pink:["#FCE7F3","#9D174D"]    }
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


