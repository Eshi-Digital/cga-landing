import { MdRampRight } from "react-icons/md";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import { useRouter } from "next/router";

const MembershipFee = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <div className="max-w-7xl mx-auto text-center flex flex-col items-start gap-4 py-20">
      <h1 className="pb-4 text-2xl uppercase w-full text-center">
        {t("membership_fee")}
      </h1>
      <p className="flex items-start gap-4 justify-center text-left">
        <span>
          <MdRampRight size={20} />
        </span>{" "}
        {t("fee1")}
      </p>
      <p className="flex items-start gap-4 justify-center text-left">
        <span>
          <MdRampRight size={20} />
        </span>{" "}
        {t("fee2")}
      </p>
      <p className="flex items-start gap-4 justify-center text-left">
        <span>
          <MdRampRight size={20} />
        </span>{" "}
        {t("fee3")}
      </p>
    </div>
  );
};

export default MembershipFee;
