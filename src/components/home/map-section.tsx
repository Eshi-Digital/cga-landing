import GoogleMapReact from "google-map-react";
import { MdPin } from "react-icons/md";

const MapSection = ({ location, zoomLevel }: any) => {
  return (
    <div className="w-full h-[600px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
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
