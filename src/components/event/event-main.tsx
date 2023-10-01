import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import EventCard from "./event-card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventsAsync } from "@/store/features/event/event.slice";

const EventMainSecton = () => {
  /**
   * states
   */
  const [event, setEvent] = useState<any>(null);
  const [images, setImages] = useState<any[]>([]);

  /**
   * hooks
   */
  const dispatch = useDispatch<any>();

  /**
   * selectors
   */
  const { fetchEventsLoading, fetchEventsSuccess, fetchEventsError, events } =
    useSelector((state: any) => state.event);

  /**
   * functions
   */

  /**
   * yup validation schema
   */

  /**
   * formik
   */

  /**
   * effects
   */
  useEffect(() => {
    dispatch(fetchEventsAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (event) {
      const images = event.images.map((image: any) => ({
        original: `${process.env.NEXT_PUBLIC_IMG_URL}/images/events/${image}`,
        thumbnail: `${process.env.NEXT_PUBLIC_IMG_URL}/images/events/${image}`,
      }));
      setImages(images);
      return;
    }
    if (events.length > 0) {
      setEvent(events[0]);
      const images = events[0].images.map((image: any) => ({
        original: `${process.env.NEXT_PUBLIC_IMG_URL}/images/events/${image}`,
        thumbnail: `${process.env.NEXT_PUBLIC_IMG_URL}/images/events/${image}`,
      }));
      setImages(images);
    }
  }, [fetchEventsSuccess, event]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * variables
   */

  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-16">
        <p className="text-center text-3xl font-poppins-bold text-primary">
          Events
        </p>
        <p className="pt-4 text-center text-gray-400">
          Select the events and meetings listed below to see the detail.
        </p>
        <div className="mt-16 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-10 py-4 md:py-0">
          {event &&
            events.map((e: any) => {
              return (
                <div
                  key={e.id}
                  className={`${
                    event.id == e.id && "border-2 border-dashed border-primary"
                  } cursor-pointer`}
                  onClick={() => {
                    setEvent(e);
                  }}
                >
                  <EventCard
                    description={e.description}
                    location={e.location}
                    startDate={e.startDate}
                    endDate={e.endDate}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 py-16">
        <div className="md:w-1/2">
          <ImageGallery items={images} />
        </div>
        <div
          className="md:w-1/2 flex-wrap"
          dangerouslySetInnerHTML={{
            __html: event ? event.description : "",
          }}
        />
      </div>
    </div>
  );
};

export default EventMainSecton;
