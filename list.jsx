import { Fragment } from "react";

function ListGroup() {
  const items = [
    "Single User",
    "50GB Storage",
    "Unlimited projects",
    "Community Access",
  ];
  const items1on1 = [
    "Unlimited Private projects",
    "dediacted support",
    "Free Subdomain",
    "Monthly Status Reports",
  ];
  const items2 = [
    "Single User",
    "50GB Storage",
    "Unlimited projects",
    "Community Access",
    "Unlimited Private projects",
  ];
  const items2on2 = [
    "dediacted support",
    "Free Subdomain",
    "Monthly Status Reports",
  ];
  const items3 = [
    "Single User",
    "50GB Storage",
    "Unlimited Private projects",
    "Community Access",
    "Unlimited projects",
    "dediacted support",
    "Free Subdomain",
    "Monthly Status Reports",
  ];
  const listStyle = {
    textAlign: "left", // Set text alignment to left
  };
  const listStyle2 = {
    textAlign: "left",
  };

  return (
    <Fragment>
      <div className="container">
        <div style={{ background: "blue", padding: "20px" }}>
          <div className="row">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="text-body-secondary">FREE</h6>
                  <h5 className="card-title">$0/month</h5>
                  <ul className="list-group" style={listStyle}>
                    {items.map((item, index) => (
                      <li className="list-group-item" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                
                  <ul className="list-group" style={listStyle2}>
                    {items1on1.map((item, index) => (
                      <li className="list-group-item" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          opacity="50"
                          className="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <br />
                  <a href="#" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="text-body-secondary">PLUS</h6>
                  <h5 className="card-title">$9/month</h5>
                  <ul className="list-group" style={listStyle}>
                    {items2.map((item, index) => (
                      <li className="list-group-item" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="list-group" style={listStyle2}>
                    {items2on2.map((item, index) => (
                      <li className="list-group-item text-muted" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <br />
                  <a href="#" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="text-body-secondary">PRO</h6>
                  <h5 className="card-title">$49/month</h5>
                  <ul className="list-group" style={listStyle}>
                    {items3.map((item, index) => (
                      <li className="list-group-item" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <br />

                  <a href="#" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ListGroup;
