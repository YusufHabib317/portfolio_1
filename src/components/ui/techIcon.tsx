type TechIconProps = {
  Icon: React.ElementType;
}
export function TechIcon(props:TechIconProps) {
  const { Icon } = props;

  return (
    <>
      <Icon className="size-10 fill-[url(#lg)]" />
      <svg className="size-0 absolute">
        <linearGradient id="lg">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
}
