import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(" ")[0];

    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card border-dark mx-auto">
            <div className="card-header">
              {firstName}
              's Bio
            </div>
            <div className="card-body text-dark">
              <p className="card-text">
                {isEmpty(profile.bio) ? (
                  <span>{firstName} does not have a bio</span>
                ) : (
                  <span>{profile.bio}</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
