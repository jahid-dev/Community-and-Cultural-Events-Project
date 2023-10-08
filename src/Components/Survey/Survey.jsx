

const Survey = () => {
    return (
        <div>
            <h2 className="mt-10 text-5xl mb-5 font-bold text-center">Survey Section</h2>
              <section className="bg-white p-6 mx-auto md:w-96 rounded-lg mt-10 mb-10">
        <h2 className="text-center text-2xl font-bold mb-4">Event Survey</h2>
        <p className="text-center text-gray-600 text-lg mb-4">
          We are always looking for ways to improve our events, and we need your help! Please take a few minutes to complete this market survey.
        </p>
        <form className="space-y-4">
          <div className="mb-4">
            <label className="block font-semibold">What is your favorite event from the list below?</label>
            <select className="w-full p-2 border border-red-500 rounded">
              <option value="1">Summer Festival Extravaganza</option>
              <option value="2">Cultural Fusion Parade</option>
              <option value="3">Carnival Delights</option>
              <option value="4">Charity Gala Night</option>
              <option value="5">Winter Wonderland Festival</option>
              <option value="6">Harvest Festival</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-semibold">How often do you attend events like these?</label>
            <select className="w-full p-2 border border-red-500 rounded">
              <option>Regularly</option>
              <option>Occasionally</option>
              <option>Rarely</option>
              <option>Never</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-semibold">What is your budget for attending such events?</label>
            <input type="number" className="w-full p-2 border border-red-500 rounded" />
          </div>
  
          <button
            type="submit"
            className="bg-black text-white p-2 px-4 rounded cursor-pointer transition hover:bg-white hover:text-red-500 hover:border hover:border-red-500"
          >
            Submit
          </button>
        </form>
      </section>
        </div>
      
      
    );
};

export default Survey;