import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LinkButton = ({ onClick }) => {
  const { user } = useSelector((state) => state.auth);
  const defaultImage = "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"; // Default profile image URL

  return (
    <button onClick={onClick} className="flex items-center space-x-2 focus:outline-none">
      {user ? (
        <img
          src={user.profileImage || defaultImage} // Use user profile image or default
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      ) : (
        <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.6em" }} />
      )}
    </button>
  );
};

export default LinkButton;
