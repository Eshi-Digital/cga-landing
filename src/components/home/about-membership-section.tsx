import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import { fetchAdAsync } from "@/store/features/event/event.slice";

const AnoutMembershipSection = () => {
  const dispatch = useDispatch<any>();

  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const { fetchAdLoading, fetchAdSuccess, fetchAdError, ad } = useSelector(
    (state: any) => state.event
  );

  useEffect(() => {
    dispatch(fetchAdAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="px-2 flex flex-col md:flex-row items-start py-4 max-w-7xl mx-auto mb-20">
      <div className="w-full md:w-1/2">
        <Image
          src="/static/images/father.png"
          alt="membership"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="font-PoiretOne-Regular text-4xl">
          {t("about_membership")}
        </div>
        <div>{t("by_laws")}</div>
        <div className="text-justify text-gray-600">{t("about_sub")}</div>
        {/* <div className="flex gap-8 items-center">
          <div className="hidden sm:flex rounded-full w-20 h-20 bg-red-100"></div>
          <div className="flex flex-col gap-2">
            <div className="text-md">By laws association of CGA</div>
            <div className="text-blue-400">Download here</div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="hidden sm:flex rounded-full w-20 h-20 bg-red-100"></div>
          <div className="flex flex-col gap-2">
            <div className="text-md">By laws association of CGA</div>
            <div className="text-blue-400">Download here</div>
          </div>
        </div> */}
        <div className="flex-col md:flex-row flex gap-8">
          <div
            className="bg-primary rounded-full px-12 py-3 text-white cursor-pointer hover:bg-gray-400 transition duration-300 ease-in-out"
            onClick={() => {
              router.push("/about");
            }}
          >
            {t("learn_more")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnoutMembershipSection;
