import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../AppBar/messages';
import { Link } from 'react-router-dom';
import useComponentVisible from './hooks';

import { Menu } from 'antd';

const { SubMenu } = Menu;

const ResponsiveAppBar = ({ toggleBurger }) => {
  const { ref, isComponentVisible } = useComponentVisible(true, toggleBurger);
  return (
    <div ref={ref}>
      {isComponentVisible && (
        <Menu
          style={{
            borderRight: '1px solid white',
            backgroundColor: 'black',
            width: '300px',
            position: 'absolute',
            zIndex: 100,
          }}
          mode="inline"
          toggleBurger
          theme="dark"
        >
          <Menu.Item key="1" onClick={() => toggleBurger(false)}>
            <Link to="/">
              <span className="menu-item">
                <FormattedMessage {...messages.home} />
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => toggleBurger(false)}>
            <Link to="/services">
              <span className="menu-item">
                <FormattedMessage {...messages.service} />
              </span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" className="menu-item" title={<FormattedMessage {...messages.rental} />}>
            <SubMenu key="sub2" className="menu-item" title={<FormattedMessage {...messages.soundSystems} />}>
              <Menu.Item key="7" onClick={() => toggleBurger(false)}>
                <Link to="/monitoringBundle">
                  <span className="menu-item" style={{ fontSize: '1vh' }}>
                    <FormattedMessage {...messages.monitoringBundle} />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="8" onClick={() => toggleBurger(false)}>
                <Link to="/paBundles">
                  <span className="menu-item" style={{ fontSize: '1vh' }}>
                    <FormattedMessage {...messages.paBundles} />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="9" onClick={() => toggleBurger(false)}>
                <Link to="/powerack">
                  <span className="menu-item" style={{ fontSize: '1vh' }}>
                    <FormattedMessage {...messages.powerack} />
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="10" onClick={() => toggleBurger(false)}>
                <a download href={process.env.PUBLIC_URL + '/GeneralCatalogue.pdf'}>
                  <span className="menu-item" style={{ fontSize: '1vh' }}>
                    <FormattedMessage {...messages.downloadCatalogue} />
                  </span>
                </a>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="6" onClick={() => toggleBurger(false)}>
              <Link to="/laser">
                <span className="menu-item">
                  <FormattedMessage {...messages.laser} />
                </span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="3" onClick={() => toggleBurger(false)}>
            <Link to="/showroom">
              <span className="menu-item">
                <FormattedMessage {...messages.showroom} />
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" onClick={() => toggleBurger(false)}>
            <Link to="/event">
              <span className="menu-item">
                <FormattedMessage {...messages.event} />
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5" onClick={() => toggleBurger(false)}>
            <Link to="/contact">
              <span className="menu-item">
                <FormattedMessage {...messages.contact} />
              </span>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};
export default ResponsiveAppBar;
