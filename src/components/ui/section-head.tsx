type SectionHeadProps = {
   title:string;
   subTitle:string;
   sectionDescription:string;
}
export function SectionHead(props:SectionHeadProps) {
  const { title, subTitle, sectionDescription } = props;
  return (
    <div className="max-w-lg mx-auto">
      <div className="flex justify-center items-center">
        <p className="subtitle-gradient text-xl">
          {subTitle}
        </p>
      </div>
      <h2 className="text-3xl md:text-5xl font-serif text-center mt-6">{title}</h2>
      <p className="text-white/60 text-center mt-4 md:text-lg lg:text-xl max-w-md mx-auto">{sectionDescription}</p>
    </div>
  );
}
