import { portfolioProjects } from '@/data';
import { Project, SectionHead } from '../ui';

export function Projects() {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHead
          subTitle="Real-World Results"
          title="Featured Projects"
          sectionDescription="See how I transform concepts into engaging digital experience"
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((p, i) => <Project key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
