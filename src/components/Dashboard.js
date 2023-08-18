import React from "react";
import Card from "./Card";

function Dashboard() {
  let data = [
    {
      title: "Earnings (Monthly)",
      value: "$5000",
      colour: "primary",
      icon: "calendar",
      progress: true,
    },
    {
      title: "Earnings (Annual)",
      value: "$60000",
      colour: "success",
      icon: "dollar-sign",
      progress: true,
    },
    {
      title: "Task",
      value: "50",
      colour: "info",
      icon: "clipboard-list",
      progress: false,
    },
    {
      title: "Pending Request",
      value: "18",
      colour: "warning",
      icon: "comments",
      progress: true,
    },
  ];

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="javascript(void)"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
              {
                data.map((e,i)=> <Card key={i} value={e} />
    
                )
              }
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --> */}
      </div>
    </>
  );
}

export default Dashboard;
