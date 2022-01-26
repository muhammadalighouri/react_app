import React from "react";

const Navigation = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="nav_container">
            <div className="logo">logo</div>
            <nav>
              <ul className="nav_list">
                <li>
                  <a className="nav_links" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav_links" href="/">
                    Documents
                  </a>
                </li>
                <li>
                  <a className="nav_links" href="/">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="nav_links" href="/">
                    My Account
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
