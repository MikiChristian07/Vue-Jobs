/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50k");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
      image,
    };

    addJobSubmit(newJob);
    toast.success("Job added successfully!");
    navigate("/");
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Add New Job</h2>
      <form onSubmit={submitForm}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-green-700 font-bold mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="location" className="block text-green-700 font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Job Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block text-green-700 font-bold mb-2">
              Job Type
            </label>
            <select
              id="type"
              name="type"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-green-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            placeholder="Add any job duties, expectations, requirements, etc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="salary" className="block text-green-700 font-bold mb-2">
            Salary
          </label>
          <select
            id="salary"
            name="salary"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          >
            <option value="Under $50k">Under $50k</option>
            <option value="$50k - $60k">$50k - $60k</option>
            <option value="$60k - $70k">$60k - $70k</option>
            <option value="$70k - $80k">$70k - $80k</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="companyName" className="block text-green-700 font-bold mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="companyDescription" className="block text-green-700 font-bold mb-2">
            Company Description
          </label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            placeholder="Describe the company"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="contactEmail" className="block text-green-700 font-bold mb-2">
              Contact Email
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Contact Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactPhone" className="block text-green-700 font-bold mb-2">
              Contact Phone
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Contact Phone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-green-700 font-bold mb-2">
            Company Logo
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add Job
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddJobPage;