import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import styles from './styles.css';
import messages from './messages';
import logo from '../../../../assets/template/logo.jpg';

const renderSecondSubMenu = () => (
  <div className="second-sub-menu-container">
    <div>
      <Link to="/monitoringBundle">
        <span className="second-sub-menu-item">
          <FormattedMessage {...messages.monitoringBundle} />
        </span>
      </Link>
    </div>
    <div>
      <Link to="/paBundles">
        <span className="second-sub-menu-item">
          <FormattedMessage {...messages.paBundles} />
        </span>
      </Link>
    </div>
    <div>
      <Link to="/powerack">
        <span className="second-sub-menu-item">
          <FormattedMessage {...messages.powerack} />
        </span>
      </Link>
    </div>
    <div>
      <a download href={process.env.PUBLIC_URL + '/GeneralCatalogue.pdf'}>
        <span className="second-sub-menu-item">
          <FormattedMessage {...messages.downloadCatalogue} />
        </span>
      </a>
    </div>
  </div>
);

const Navigation = () => {
  // eslint-disable-next-line
  const [clicked, setClicked] = useState(false);
  const [isShownSecondSubMenu, setIsShownSecondSubMenu] = useState(false);
  const [isShownSubMenu, setIsShownSubMenu] = useState(false);
  const renderSubMenu = () => (
    <div className="sub-menu-container">
      <div
        className="sub-menu-soundSystems"
        onMouseEnter={() => setIsShownSecondSubMenu(true)}
        onMouseLeave={() => setIsShownSecondSubMenu(false)}
      >
        <div>
          <Link to="#">
            <span className="sub-menu-item" style={{ borderBottom: isShownSecondSubMenu && '1px solid white' }}>
              <FormattedMessage {...messages.soundSystems} />
            </span>
          </Link>
        </div>
        <div>{isShownSecondSubMenu && renderSecondSubMenu()}</div>
      </div>
      <div>
        <Link to="/laser">
          <span className="sub-menu-item bordered">
            <FormattedMessage {...messages.laser} />
          </span>
        </Link>
      </div>
    </div>
  );
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo-container">
          <img className="nav-logo" src={logo} alt="loud and clear logo" />
          <span className="span-logo">Loud And Clear</span>
        </div>
        <div className={'navbarLinks ' + (clicked ? null : 'collapse')}>
          <ul>
            <li>
              <Link to="/">
                <span className="menu-item">
                  <FormattedMessage {...messages.home} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span className="menu-item">
                  <FormattedMessage {...messages.service} />
                </span>
              </Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setIsShownSubMenu(true)}
              onMouseLeave={() => setIsShownSubMenu(false)}
            >
              <Link to="#">
                <span className="menu-item">
                  <FormattedMessage {...messages.rental} />
                </span>
              </Link>
              {isShownSubMenu && renderSubMenu()}
            </li>
            <li>
              <Link to="/showroom">
                <span className="menu-item">
                  <FormattedMessage {...messages.showroom} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/event">
                <span className="menu-item">
                  <FormattedMessage {...messages.event} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="menu-item">
                  <FormattedMessage {...messages.contact} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="space"></div>
    </nav>
  );
};

export default Navigation;
