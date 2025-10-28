import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Welcome to the Corporate Cab Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-blue-600 text-lg font-semibold mb-2">Book a Ride</h2>
          <p className="text-gray-600 mb-4">Schedule a new cab for your employee or client with just a few clicks.</p>
          <button onClick={() => navigate('/book')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Book Now</button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-green-600 text-lg font-semibold mb-2">My Bookings</h2>
          <p className="text-gray-600 mb-4">Check the list of your previous and upcoming rides.</p>
          <button onClick={() => navigate('/bookings')} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">View Bookings</button>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-orange-600 text-lg font-semibold mb-2">AddDriver</h2>
          <p className="text-gray-600 mb-4">View available drivers and their assigned trips.</p>
          <button onClick={() => navigate('/add-driver')} className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg">Manage Drivers</button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-purple-600 text-lg font-semibold mb-2">ViewDriver</h2>
          <p className="text-gray-600 mb-4">View available drivers and their assigned trips.</p>
          <button onClick={() => navigate('/viewdrivers')} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">Manage Drivers</button>
        </div>
      </div>
    </div>
  );
}
