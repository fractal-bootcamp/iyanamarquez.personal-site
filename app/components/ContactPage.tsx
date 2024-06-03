import BackButton from "~/components/BackButton";

export default function ContactPage() {
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-black text-center">
        Contact page
      </h2>
      <div className="p-4 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 ">
        Contact me via email
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Your email
        </label>
        <input
          type="email"
          className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="name@youremail.com"
        />
        <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">
          Button
        </button>
      </div>
    </div>
  );
}
