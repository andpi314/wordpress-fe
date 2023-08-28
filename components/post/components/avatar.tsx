import Image from "next/image";

export default function Avatar({ author }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    <div className="inline-flex items-center border-2 border-[#5fa8d3]  bg-[#cae9ff] pl-[4px] pr-[12px] py-[4px] rounded-[25px]">
      <div className="w-10 h-10 relative mr-2">
        <Image
          src={author.node.avatar.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-md font-bold text-[#1b4965]">{name}</div>
    </div>
  );
}
