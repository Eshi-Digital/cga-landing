import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import EventCard from "./event-card";
import { useState } from "react";

interface EventCardProp {
  id: string;
  description: string;
}

const EventMainSecton = () => {
  const events = [
    {
      id: "1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eius facere! Tempora, quis recusandae. Laborum ea perspiciatis ipsum culpa et aut dolores! Magnam vero nisi accusamus dolores neque, at aperiam unde officiis facilis animi voluptatibus sed, architecto adipisci excepturi obcaecati iure cumque",
    },
    {
      id: "2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eius facere! Tempora, quis recusandae. Laborum ea perspiciatis ipsum culpa et aut dolores! Magnam vero nisi accusamus dolores neque, at aperiam unde officiis facilis animi voluptatibus sed, architecto adipisci excepturi obcaecati iure cumque",
    },
    {
      id: "3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eius facere! Tempora, quis recusandae. Laborum ea perspiciatis ipsum culpa et aut dolores! Magnam vero nisi accusamus dolores neque, at aperiam unde officiis facilis animi voluptatibus sed, architecto adipisci excepturi obcaecati iure cumque",
    },
  ];

  const [event, setEvent] = useState<EventCardProp>(events[0]);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 py-16">
        <div className="md:w-1/2">
          <ImageGallery items={images} />
        </div>
        <div className="md:w-1/2 flex-wrap">
          {event ? event.description : ""}
        </div>
      </div>
      <div className="my-16">
        <p className="text-center text-3xl font-poppins-bold text-primary">
          Events
        </p>
        <p className="pt-4 text-center text-gray-400">
          Select the events and meetings listed below to see the detail.
        </p>
        <div className="mt-16 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-10 py-4 md:py-0">
          {events.map((e) => {
            return (
              <div
                className={`${
                  event.id == e.id && "border-2 border-dashed border-primary"
                } cursor-pointer`}
                onClick={() => {
                  setEvent(e);
                }}
              >
                <EventCard />;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventMainSecton;
