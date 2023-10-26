import React from "react";
import { HeadTitle } from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";

// Create a Card component
const Card = ({ profile }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px", // Increase padding
    margin: "20px", // Increase margin
    borderRadius: "10px", // Increase border radius
    width: "400px", // Set a fixed width
  };

  return (
    <div style={cardStyle}>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
};

const Profile = () => {
  // Create a profile object
  const profile = {
    name: "John Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
  };

  return (
    <div>
      <NavbarHead />
      <HeadTitle style={{ marginTop: "130px" }}>
        Profile page
      </HeadTitle>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card profile={profile} />
      </div>
      <FooterBottom />
    </div>
  );
};

export default Profile;
