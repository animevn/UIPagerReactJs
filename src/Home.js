import React, {useEffect, useState} from "react";
import $ from "jquery";
import "bootstrap/js/dist/tab"
import "bootstrap/js/dist/carousel";
import {HomeContent, ContactContent, ProfileContent} from "./data";

function Home() {

  const [tab, setTab] = useState({tab1: true, tab2: false, tab3: false});

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/babel";
    script.src = (
      <script>
        {
          $('#carousel').on('slid.bs.carousel', function (event) {
            event.preventDefault();
            const id = event.relatedTarget.id;
            switch (id) {
              case "pills-home":
                setTab({tab1: true, tab2: false, tab3: false});
                break;
              case "pills-profile":
                setTab({tab1: false, tab2: true, tab3: false});
                break;
              case "pills-contact":
                setTab({tab1: false, tab2: false, tab3: true});
                break;
              default:
                break;
          }
        })
        }
      </script>
    );
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  function onHomeClick(event) {
    event.preventDefault();
    setTab({tab1: true, tab2: false, tab3: false});
  }

  function onProfileClick(event) {
    event.preventDefault();
    setTab({tab1: false, tab2: true, tab3: false});
  }

  function onContactClick(event) {
    event.preventDefault();
    setTab({tab1: false, tab2: false, tab3: true});
  }

  return (
    <div className="container mt-3 px-0">

      <div id="carousel" className="carousel slide tab-content"
           data-interval="false">


        <ul className="nav nav-pills mb-3">
          <li className="nav-item">
            <a className={"nav-link " + (tab.tab1 ? "active" : "")}
               data-toggle="pill" href="#pills-home" onClick={onHomeClick}>
              Home
            </a>
          </li>
          <li className="nav-item ">
            <a className={"nav-link " + (tab.tab2 ? "active" : "")}
               data-toggle="pill" href="#pills-profile" onClick={onProfileClick}>
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className={"nav-link " + (tab.tab3 ? "active" : "")}
               data-toggle="pill" href="#pills-contact" onClick={onContactClick}>
              Contact
            </a>
          </li>
        </ul>

        <div className="carousel-inner">

          <div className="carousel-item tab-pane active" id="pills-home">
            {HomeContent}
          </div>

          <div className="carousel-item tab-pane" id="pills-profile">
            {ContactContent}
          </div>
          
          <div className="carousel-item tab-pane" id="pills-contact">
            {ProfileContent}
          </div>

          <a className="carousel-control-prev" href="#carousel" role="button"
             data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel" role="button"
             data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>

        </div>

      </div>


    </div>
  )
}

export default Home;