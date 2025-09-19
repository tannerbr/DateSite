import React, { useState } from "react";
import "../components/Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    option: "",
    instagram: "",
  });

  const [readyToText, setReadyToText] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReadyToText(true);
  };

  const phoneNumber = "+14259199024"; // <-- your number

  const generateSMSLink = () => {
    let message = "";

    // Convert time from "HH:mm" to "h:mm AM/PM"
    const formatTime = (timeStr) => {
      if (!timeStr) return "";
      const [hourStr, minuteStr] = timeStr.split(":");
      let hour = parseInt(hourStr, 10);
      const minute = minuteStr;
      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12 || 12;
      return `${hour}:${minute} ${ampm}`;
    };

    const formattedTime = formatTime(formData.time);

    if (formData.option === "Surprise Me!") {
      message = `Hey Tanner! 🎉 Surprise me with a fun date idea!`;
    } else {
      message = `Hey Tanner! I saw your funny website and booked a ${formData.option} on ${formData.date} at ${formattedTime}. Can't wait! 😎`;
    }

    if (formData.instagram) {
      message += ` My Instagram is @${formData.instagram}`;
    }

    return `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">📅 Schedule a Date</h2>
      <p className="booking-subtitle">Pick your vibe & get ready to text me 😉</p>

      {!readyToText ? (
        <form onSubmit={handleSubmit} className="booking-form">
          {/* Name */}
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          {/* Date */}
          <label>
            Pick a Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          {/* Time */}
          <label>
            Pick a Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>

          {/* Options */}
          <label>
            Activity:
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="Guitar Lesson">🎸 Guitar Lesson</option>
              <option value="Swig & Scenic Drive">🥤 Swig & 🚗 Scenic Drive</option>
              <option value="Ice Cream">🍦 Ice Cream</option>
              <option value="Dinner & Oversharing">🍝 Dinner & 🗣️ Oversharing</option>
              <option value="Walk & Awkward Silence">🚶 Walk & 😅 Awkward Silence</option>
              <option value="Movies & Popcorn">🎬 Movies & 🍿 Popcorn</option>
              <option value="Hiking & Sweating">🥾 Hiking & 💦 Sweating</option>
              <option value="Gym & Protein Shakes">🏋️ Gym & 🥤 Protein Shakes</option>
              <option value="Surprise Me!">🎲 Surprise Me!</option>
            </select>
          </label>

          {/* Instagram */}
          <label>
            Your Instagram Handle:
            <input
              type="text"
              name="instagram"
              placeholder="e.g. tannerbriggs"
              value={formData.instagram}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="booking-button">
            Get Ready to Text Me 📱
          </button>
        </form>
      ) : (
        <div className="booking-text">
          <h3>Almost Done 🎉</h3>
          <p>Click below to open your texting app and send me the details!</p>
          <a href={generateSMSLink()} className="text-button">
            📱 Text Tanner Now
          </a>
          <button
            className="booking-reset"
            onClick={() => setReadyToText(false)}
          >
            Start Over 🔄
          </button>
        </div>
      )}
    </div>
  );
};

export default Booking;