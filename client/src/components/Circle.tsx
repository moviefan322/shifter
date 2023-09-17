interface CircleProps {
  initials: string;
}

const Circle = ({ initials }: CircleProps) => {
  return (
    <span className="circle">
      <p>{initials}</p>
    </span>
  );
};

export default Circle;
