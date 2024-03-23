import Image from "next/image";

interface BreadcrumbsProps {
  data: { label: string }[];
}
const Index: React.FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
  const { data } = props;
  return (
    <ul className="flex items-center gap-2">
      {data?.map((d, idx) => {
        const exceptLast = idx !== data.length - 1;

        return (
          <li
            key={d.label}
            className={`flex items-center gap-2 text-sm font-semibold ${
              exceptLast ? "text-primary" : "text-[#999999]"
            }`}
          >
            <span className="cursor-pointer">{d.label}</span>
            {exceptLast && (
              <Image
                src="assets/icons/arrow-right-ic.svg"
                width={24}
                height={24}
                alt="arrow-right"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Index;
