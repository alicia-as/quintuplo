import Link from "next/link";

const Archive = () => {
  return (
    <div className="flex flex-col text-start justify-start">
      <h1 className="mb-4">Arkiv</h1>
      <MonthSection month="September" link="/2022/september" />
      <MonthSection month="Oktober" link="/2022/oktober" />
    </div>
  );
};

const MonthSection = ({ month, link }: { month: string; link: string }) => {
  return (
    <div className="flex flex-col w-screen cursor-pointer hover:text-blue-200 active:text-blue-400">
      <Link href={link}>
        <h2>{month}</h2>
      </Link>
    </div>
  );
};

export default Archive;
