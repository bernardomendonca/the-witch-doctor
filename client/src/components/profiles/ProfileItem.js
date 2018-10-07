import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    var cardStyle = {
      width: "300px"
    };

    return (
      <div className="card" style={cardStyle}>
        <img className="card-img-top" src={profile.user.avatar} alt="" />
        <div className="card-body">
          <h4 className="card-title">{profile.user.name}</h4>
          <p className="card-text">{profile.status}</p>
          <p>
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </p>
          <p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
