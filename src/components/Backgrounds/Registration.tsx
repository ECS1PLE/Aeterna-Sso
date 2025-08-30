interface Background {
    className?:string;
}

const RegistrationBackgound:React.FC<Background> = ({className}) => {
    return (
        <svg width="100%" height="100%" 
        className={`${className}`}
        viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice">
            <g clip-path="url(#clip0_2309_268)">
            <rect width="1920" height="1080" fill="black"/>
            <rect width="1920" height="1080" fill="url(#paint0_linear_2309_268)"/>
            <g filter="url(#filter0_di_2309_268)">
            <path d="M1967 980L1890 770L1620.5 560V770L1967 980Z" fill="white"/>
            <path d="M1547 -133L1757 -133L1253 1127L1043 1127L1547 -133Z" fill="white"/>
            <path d="M1462.5 865.76L1620.5 770V560L1573.38 588.56L1462.5 865.76Z" fill="white"/>
            <path d="M1620.5 77L1988 1127H2198L1757 -133L1620.5 77Z" fill="white"/>
            </g>
            <rect width="960" height="1080" fill="#0A0A0A"/>
            </g>
            <defs>
            <filter id="filter0_di_2309_268" x="833.899" y="-266.294" width="1573.2" height="1678.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="75.807"/>
            <feGaussianBlur stdDeviation="104.55"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2309_268"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2309_268" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-24.8861"/>
            <feGaussianBlur stdDeviation="28.7148"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.717403 0 0 0 0 0.740296 0 0 0 0 0.992112 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2309_268"/>
            </filter>
            <linearGradient id="paint0_linear_2309_268" x1="960" y1="0" x2="960" y2="1080" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6874F5"/>
            <stop offset="1" stop-color="#3F4DEA"/>
            </linearGradient>
            <clipPath id="clip0_2309_268">
            <rect width="1920" height="1080" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default RegistrationBackgound;