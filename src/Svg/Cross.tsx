import { memo } from "react"

const Cross = () => {
    return(
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1L1 15M15 15L1 1L15 15Z" stroke="#BF2626" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
}
export default memo(Cross)