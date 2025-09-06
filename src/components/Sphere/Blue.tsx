interface Sphere {
  className?: string;
}

const BlueSphere: React.FC<Sphere> = ({ className }) => {
  return (
    <svg
      width="1908"
      height="978"
      viewBox="0 0 1908 978"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <circle
        opacity="0.6"
        cx="1016.5"
        cy="-38.5"
        r="1016.5"
        fill="url(#paint0_radial_2320_330)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2320_330"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1016.5 -38.5) rotate(90) scale(1016.5)"
        >
          <stop stop-color="#1892EA" />
          <stop offset="1" stop-color="#1892EA" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default BlueSphere;
