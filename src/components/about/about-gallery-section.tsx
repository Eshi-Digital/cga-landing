import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { fetchGalleryAsync } from "@/store/features/event/event.slice";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const AboutGallerySection = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const {
    gallery,
    fetchGalleryLoading,
    fetchGallerySuccess,
    fetchGalleryError,
  } = useSelector((state: any) => state.event);

  useEffect(() => {
    dispatch(fetchGalleryAsync());
  }, []);

  if (fetchGalleryLoading) {
    return (
      <div className="py-20 max-w-7xl mx-auto text-center">Loading...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center my-8">
        <p className="text-3xl uppercase">{t("cgas_gallery")}</p>
        {gallery.map((item: any) => {
          return (
            <>
              <div className="flex flex-row px-5 py-2 lg:px-32 lg:pt-12">
                {item.images.map((image: any, idx: any) => {
                  return (
                    <div className="md:m-1 w-full" key={idx}>
                      <Image
                        alt="gallery"
                        className=" w-full rounded-lg object-cover object-center p-2"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/gallery/${image}`}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="text-2xl font-bold text-center lg:text-left lg:pt-12 lg:pl-12">
                {item.title}
              </p>
              <p
                className="text-lg text-center lg:text-left"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AboutGallerySection;
