type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, description, center = false }: SectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-[#dba14a] uppercase">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-[#241b13] md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[rgba(36,27,19,0.68)] md:text-lg">{description}</p>
    </div>
  );
}
