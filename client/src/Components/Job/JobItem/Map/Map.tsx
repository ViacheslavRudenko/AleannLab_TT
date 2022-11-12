import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { JobItemType } from "../types";
import { mapTheme } from "./Theme";

const containerStyle = {
  window: "100%",
  height: "200px",
};

const API_KEY: string = "AIzaSyCJQ3J7laAQ4G2RfsMXW9KAf8P0Aa-fPUs";

const defaultOptions = {
  zoomContol: false,
  isFractionalZoomEnabled: false,
  streetViewControl: false,
  mapTypeControl: false,
  scaleControl: false,
  rotateContol: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: mapTheme,
  disableDefaultUI: true,
};

const Map = ({ jobItem }: JobItemType) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const { location } = jobItem;

  const center = { lat: location.lat, lng: location.long };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={defaultOptions}
    >
      <></>
    </GoogleMap>
  ) : (
    <p>Loading...</p>
  );
};
export default Map;
