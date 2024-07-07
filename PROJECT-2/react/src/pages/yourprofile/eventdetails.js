import React, { useEffect, useState } from "react";
import Header from "../../Components/header";
import "./event.css";

const UserList = () => {
  const defaultProfilePic =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load events from local storage during initialization
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
  }, []); // Empty dependency array means this effect will only run once after the initial render

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: localStorage.getItem("name") || "NA",
      email: localStorage.getItem("email") || "NA",
      gender: localStorage.getItem("gender") || "NA",
      terms: localStorage.getItem("terms") ? "YES" : "No",
      img: localStorage.getItem("img") || defaultProfilePic, // Add img URL to the event
    };

    // Update events array with new event
    setEvents((prevEvents) => [...prevEvents, newEvent]);

    // Save updated events array to local storage
    localStorage.setItem("events", JSON.stringify(events));

    // Clear local storage for individual event data
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("gender");
    localStorage.removeItem("terms");
    localStorage.removeItem("img"); // Remove the stored image URL after adding to events
  };

  return (
    <div>
      <Header />
      <div className="ha">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">Welcome To Events</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center ">
                <img
                  src={
                    localStorage.getItem("img") || defaultProfilePic // Display the current profile picture
                  }
                  alt="profile_pic"
                  className="img-thumbnail"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>Event Name : {localStorage.getItem("name") || "NA"}</h4>
                <h4>Event Email : {localStorage.getItem("email") || "NA"}</h4>
                <h4>Gender : {localStorage.getItem("gender") || "NA"}</h4>
                <p>
                  Accepted Terms And Conditions :{" "}
                  {localStorage.getItem("terms") ? "YES" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Event</button>
      </form>

      <div>
        <h2>Previous Events:</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h4>Name: {event.name}</h4>
              <h4>Email: {event.email}</h4>
              <h4>Gender: {event.gender}</h4>
              <p>Accepted Terms And Conditions: {event.terms}</p>
              <img
                src={event.img} // Display the profile picture associated with the event
                alt="profile_pic"
                className="img-thumbnail"
                height={200}
                width={200}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
