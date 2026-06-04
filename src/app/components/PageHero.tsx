import { Reveal } from "./PageTransition";
import { Label } from "./Label";

export function PageHero({
  title,
  text,
  compact = false,
}: {
  title: string;
  text: string;
  compact?: boolean;
}) {
  return (
    <section className="bg-[#f4eddf] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-12 lg:pt-36">
      <Reveal className="mx-auto max-w-7xl">
        <Label>Amethiya Construction</Label>
        <h1 className={`mt-4 max-w-4xl font-black uppercase leading-tight text-[#bd4f1f] ${compact ? "text-2xl sm:text-4xl lg:text-5xl" : "text-3xl sm:text-5xl lg:text-7xl"}`}>
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#655c53] sm:mt-6 sm:text-base sm:leading-8">{text}</p>
      </Reveal>
    </section>
  );
}
