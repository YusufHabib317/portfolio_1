import grainImg from '@/assets/images/grain.jpg';

export function GrainBg() {
  return (
    <div
      className="absolute inset-0 -z-30 opacity-10"
      style={{ backgroundImage: `url(${grainImg.src})` }}
    />
  );
}
