import ResourceCard from "./resource-card";
import { useRouter } from "next/router";
import { getLocaleContent } from "../../utils/localeUtil";

const ResourcesSection = () => {
    const router = useRouter();
    const localized = getLocaleContent(router.locale as string);
  const publications = [
    {
      name: "Delegation A God Ordained Principle.pdf",
      size: "57.78 KB",
    },
    {
      name: "My School Year Reminiscensces.pdf",
      size: "44.59 KB",
    },
    {
      name: "Questionnaire.pdf ",
      size: "119.95 KB",
    },
    {
      name: "The Accountant named ሂሳብ ሰራተኛ.pdf ",
      size: "42 KB",
    },
    {
      name: "What is Behind Its Sustenance Over 65 years.pdf",
      size: "171.76 KB",
    },
    {
      name: "Why Worry About Service Improvement.pdf",
      size: "79.97 KB",
    },
    {
      name: "መተዳደሪያ ደንብ.pdf",
      size: "174.57 KB",
    },
    {
      name: "ስለ ንግድ ስራ ትቤት አጭር መግለጫ.pdf",
      size: "96.96 KB",
    },
    {
      name: "ሹመት ሽልማትና የማዕረግ መጠሪያዎች.pdf",
      size: "207.94 KB",
    },
    {
      name: "ኮሜርስ ክበቤ.pdf",
      size: "77.19 KB",
    },
    {
      name: "ዕቅድ ለትርፋማነት.pdf",
      size: "165.34 KB",
    },
    {
      name: "የንግድ መስታወቂያዎች ልዩ ገፅታ.pdf",
      size: "140.57 KB",
    },
    {
      name: "የጉዞ ማስታወሻ.pdf",
      size: "168.12 KB",
    },
    {
      name: "ግርማዊ ጃንሆይ የማኅበሩን ሕንጻ ሲጐበኙ ያደረጉት ንግግር.pdf",
      size: "95.88 KB",
    },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto text-center">
      <p className="mb-10">
       {localized.research_content}
      </p>
      <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:my-0">
        {publications.map((e) => {
          return <ResourceCard name={e.name} size={e.size} />;
        })}
      </div>
    </div>
  );
};

export default ResourcesSection;
