import React from "react"


const Profile = props => {
  const profile = props.info;
	return (
		<>
		  <h4>Profile</h4>
      <ul className="about__info-list">
        <li>
          <strong>Name:</strong>
          <span>{profile.name}</span>
        </li>
        <li>
          <strong>Job:</strong>
          <span>{profile.jobPosition}</span>
        </li>
        <li>
          <strong>Website:</strong>
          <span>{profile.website}</span>
        </li>
      </ul>
	  </>
	)
}

export default Profile
