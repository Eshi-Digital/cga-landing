import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";

const MembershipTypeAndCriteriaSection = () => {
    const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
  return (
    <div className="py-5">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mb-10 text-2xl uppercase">
         {localized.membership_criteria}
        </h1>
        <p className="text-md font-poppins-light text-gray-500 max-w-4xl mx-auto mb-8">
        {localized.membership_1}
        </p>
        <p className="text-md font-poppins-light text-gray-500 max-w-4xl mx-auto mb-8">
         {localized.membership_2}
        </p>
        <p className="text-md font-poppins-light text-gray-500 max-w-4xl mx-auto mb-8">
        {localized.membership_3}
        </p>
      </div>
    </div>
  );
};

export default MembershipTypeAndCriteriaSection;
