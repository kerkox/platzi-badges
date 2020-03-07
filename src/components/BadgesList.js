import React from 'react';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

class BadgesList extends React.Component {

  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No encotramos ningún badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }


    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }


}

function BadgesListItem(props) {

  return (
    <div className="BadgesListItem">
      <Gravatar
        email={props.badge.email}
        className="BadgesListItem__avatar"
      />
      <p>{props.badge.firstName} {props.badge.lastName}<br />
        @{props.badge.twitter}<br />
        {props.badge.jobTitle}</p>

    </div>
  );

}

export default BadgesList;
