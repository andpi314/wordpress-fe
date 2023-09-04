export default function Tags({ tags }) {
  return (
    <div className="max-w-2xl m-auto text-center text-white">
      <p className="mt-8 text-lg font-bold">
        {tags.edges.map((tag, index) => (
          <span
            key={index}
            className="ml-4 font-normal text-neon-red uppercase font-vcr"
          >
            {"#"}
            {tag.node.name}
          </span>
        ))}
      </p>
    </div>
  );
}
