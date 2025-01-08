const HomeContact = () => {
    return (
      <div className="flex flex-col justify-center items-center p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6 text-center">We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
        <form className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone:</label>
            <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject:</label>
            <input type="text" id="subject" name="subject" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea id="message" name="message" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">Submit</button>
        </form>
      </div>
    );
  }
  
  export default HomeContact;