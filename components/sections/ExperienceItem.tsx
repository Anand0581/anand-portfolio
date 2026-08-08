type ExperienceItemProps = {
    role: string;
    company: string;
    duration: string;
    description: string;
};

export default function ExperienceItem({
    role,
    company,
    duration,
    description,
}: ExperienceItemProps) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-zinc-100">
                {role}
            </h3>

            <p className="text-base font-medium text-zinc-300">
                {company}
            </p>

            <p className="text-sm text-zinc-400">
                {duration}
            </p>

            <p className="text-base text-zinc-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}