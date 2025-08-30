interface Background {
    className?:string;
}

const LimeBackground:React.FC<Background> = ({className}) => {
    return (
        <svg width="100%" height="100%" 
        className={`${className}`}
        viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice">
            <g clip-path="url(#clip0_2273_2581)">
            <rect width="1920" height="1080" fill="black"/>
            <circle opacity="0.6" cx="1919.5" cy="585.5" r="716.5" fill="url(#paint0_radial_2273_2581)"/>
            <circle opacity="0.6" cx="-330.5" cy="533.5" r="1016.5" fill="url(#paint1_radial_2273_2581)"/>
            <g style={{mixBlendMode: 'luminosity'}} opacity="0.07">
            <path d="M1745.67 964.166L1665.61 745.833L1385.42 527.5V745.833L1745.67 964.166Z" fill="white"/>
            <path d="M1309 -193L1527.33 -193L1003.33 1117L785 1117L1309 -193Z" fill="white"/>
            <path d="M1221.14 845.393L1385.42 745.833V527.5L1336.42 557.193L1221.14 845.393Z" fill="white"/>
            <path d="M1385.42 25.3332L1767.5 1117H1985.83L1527.33 -193L1385.42 25.3332Z" fill="white"/>
            </g>
            </g>
            <defs>
            <radialGradient id="paint0_radial_2273_2581" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1919.5 585.5) rotate(90) scale(716.5)">
            <stop stop-color="#6FFF00"/>
            <stop offset="1" stop-color="#6FFF00" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="paint1_radial_2273_2581" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-330.5 533.5) rotate(90) scale(1016.5)">
            <stop stop-color="#6FFF00"/>
            <stop offset="1" stop-color="#6FFF00" stop-opacity="0"/>
            </radialGradient>
            <clipPath id="clip0_2273_2581">
            <rect width="1920" height="1080" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default LimeBackground;