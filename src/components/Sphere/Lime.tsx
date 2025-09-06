interface Sphere {
  className?: string;
}

const LimeSphere: React.FC<Sphere> = ({ className }) => {
  return (
    <svg
      width="717"
      height="1080"
      viewBox="0 0 717 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <circle
        opacity="0.6"
        cx="716.5"
        cy="585.5"
        r="716.5"
        fill="url(#paint0_radial_2273_4686)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2273_4686"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(716.5 585.5) rotate(90) scale(716.5)"
        >
          <stop stop-color="#6FFF00" />
          <stop offset="1" stop-color="#6FFF00" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default LimeSphere;
