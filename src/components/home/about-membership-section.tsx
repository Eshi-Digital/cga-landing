import Image from "next/image";
import { useRouter } from "next/router";
import { getLocaleContent } from "../../utils/localeUtil";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdAsync } from "@/store/features/event/event.slice";

const AnoutMembershipSection = () => {
  const dispatch = useDispatch<any>();

  const router = useRouter();
  const localized = getLocaleContent(router.locale as string);

  const { fetchAdLoading, fetchAdSuccess, fetchAdError, ad } = useSelector(
    (state: any) => state.event
  );

  useEffect(() => {
    dispatch(fetchAdAsync());
  }, []);

  return (
    <div className="px-2 flex flex-col md:flex-row items-start py-4 max-w-7xl mx-auto ">
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
          {localized.about_membership}
        </div>
        <div>{localized.by_laws}</div>
        <div className="text-sm mb-8">{localized.about_sub}</div>
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
            className="bg-primary rounded-full px-12 py-3 text-white cursor-pointer"
            onClick={() => {
              router.push("/about");
            }}
          >
            {localized.learn_more}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnoutMembershipSection;
