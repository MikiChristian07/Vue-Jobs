import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Fix for default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-4">Contact Us</h2>
      <p className="text-center text-gray-600 mb-12">
        ${`We'd`} love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 sticky top-20">
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="h-64 rounded-lg shadow-lg mb-6">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                Our Office Location
              </Popup>
            </Marker>
          </MapContainer>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Company Information</h3>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-green-700 mr-3" />
              <span>1234 Street Name, City, Country</span>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-green-700 mr-3" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-green-700 mr-3" />
              <span>info@company.com</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-green-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-green-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-green-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="8"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;