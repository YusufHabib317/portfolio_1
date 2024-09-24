type HeroOrbitProps = {
   children: React.ReactNode;
   size: number;
   rotation?: number;
}

export function HeroOrbit(props:HeroOrbitProps) {
  const { children, size, rotation = 0 } = props;

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div className="animate-spin [animation-duration:50s]">
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div className="animate-spin [animation-duration:20s]">
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HeroOrbit.defaultProps = {
  rotation: 0,
};
