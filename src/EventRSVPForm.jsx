import React, { useState } from 'react';
import './index.css'; 

export function EventRSVPForm() {
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("");
  const [dietary, setDietary] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: inputName,
      email: email,
    attendees: attendees,
        dietary: dietary,
        additionalGuests: additionalGuests,
    }

    setSubmittedData(data);
    setShowSummary(true);   

    setInputName("");
    setEmail("");
    setAttendees("");
    setDietary("");
    setAdditionalGuests(false);
  };

  return (
    <div className="container">
        <h1>Event RSVP Form</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input
                type="text"
                id="name-input"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Your Name"
                className="name-input"
                required
            />
            </label>

            <label>
            Email:
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
            />
            </label>

            <label>
            Number of Attendees:
            <input
                type="number"
                id="attendees"
                min="1"
                required
                placeholder="Number of Attendees"
                value={attendees}
                onChange={(e) => setAttendees(Number(e.target.value))}
            />
            </label>

            <label>
            Dietary Preferences:
            <input
                type="text"
                id="dietary"
                value={dietary}
                className="dietary"
                onChange={(e) => setDietary(e.target.value)}
                placeholder="Dietary Preferences (Optional)"
            />
            </label>

            <label>
            Bringing Additional Guests?
            <input
                type="checkbox"
                id="additional-guests"
                className="additional-guests"
                checked={additionalGuests}
                onChange={(e) => setAdditionalGuests(e.target.checked)}
            />
            </label>

            <button type="submit" className="submit-button">Submit RSVP</button>
        </form>
        
        {showSummary && submittedData && (
            <div className="summary">
                <h2>RSVP Submitted!</h2>
                <p><strong>Name:</strong> {submittedData.name}</p>
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>Number of Attendees:</strong> {submittedData.attendees}</p>
                <p><strong>Dietary Preferences:</strong> {submittedData.dietary || "None"}</p>
                <p>
                <strong>Bringing Additional Guests:</strong>{" "}
                {submittedData.additionalGuests ? "Yes" : "No"}
                </p>
            </div>
        )}  

    </div>
    );
}
