// import GoogleMapReact from "google-map-react";
import { MdPin } from "react-icons/md";

const MapSection = ({ location, zoomLevel }: any) => {
  return (
    <div className="w-full h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7150086474926!2d38.765913175397976!3d8.99834999106179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ad5e171dcf%3A0xb53e60dfefb83c6f!2zQ29tbWVyY2UgR3JhZHVhdGVzIEFzc29jaWF0aW9uIHzhiJjhiLXhiYDhiI0g4Y2N4YiL4YuI4Yit!5e0!3m2!1sen!2set!4v1696164916535!5m2!1sen!2set"
        height="600"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const LocationPin = ({ text }: any) => (
  <div className="pin">
    <MdPin />
    <p className="pin-text">{text}</p>
  </div>
);

export default MapSection;
