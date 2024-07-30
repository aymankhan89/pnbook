import ArticleRow from "./ArticleRow";
import HeadingDescription from "./HeadingDescription";

// Define the content data
const content = [
  {
    type: "heading",
    text: "Our Latest Articles",
  },
  {
    type: "highlightedWords",
    words: ["Articles"],
  },
  {
    type: "description",
    text: "Unlock your business's potential with our expert accounting services. Our dedicated team ensures.",
  },
];

const articles = [
  { id: 1, image: "/placeholder-image@2x.png" },
  { id: 2, image: "/placeholder-image-1@2x.png" },
  { id: 3, image: "/placeholder-image-2@2x.png" },
];

const Article = ({ className = "" }) => {
  const heading = content.find((item) => item.type === "heading")?.text;
  const highlightedWords = content.find(
    (item) => item.type === "highlightedWords"
  )?.words;
  const description = content.find((item) => item.type === "description")?.text;

  return (
    <div className="w-full flex justify-center">
      <div
        className={`flex flex-col items-start justify-center pt-[100px] pb-[0.875rem] px-[1.312rem] max-w-full text-left text-[2rem] text-gray-400 font-text-regular-normal ${className}`}
      >
        <div className="flex flex-col gap-[3.75rem] max-w-full w-full md:gap-[1.875rem]">
          <div className="flex flex-col md:flex-row items-start justify-between gap-[1.25rem] flex-wrap">
            <div className="flex flex-col gap-[1.25rem] max-w-full">
              <HeadingDescription
                heading={heading}
                description={description}
                highlightedWords={highlightedWords}
              />
            </div>
            <button className="cursor-pointer py-[0.625rem] px-[1.062rem] bg-transparent w-[5.938rem] rounded-mini border-[1px] border-solid border-darkslategray-100 hover:bg-slategray-200 hover:border-slategray-100"></button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-[1.25rem] text-[0.875rem] text-text-primary flex-wrap">
            {articles.map((article) => (
              <ArticleRow key={article.id} placeholderImage={article.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
