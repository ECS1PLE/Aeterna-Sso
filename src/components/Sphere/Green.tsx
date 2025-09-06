interface Sphere {
  className?: string;
}

const GreenSphere: React.FC<Sphere> = ({ className }) => {
  return (
    <svg
      width="1433"
      height="734"
      viewBox="0 0 1433 734"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.6"
        cx="716.5"
        cy="716.5"
        r="716.5"
        fill="url(#paint0_radial_2238_1219)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2238_1219"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(716.5 716.5) rotate(90) scale(716.5)"
        >
          <stop stop-color="#00FFD4" />
          <stop offset="1" stop-color="#00FFD4" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default GreenSphere;
