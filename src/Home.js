import React, {useEffect, useState} from "react";
import $ from "jquery";
import "bootstrap/js/dist/tab"
import "bootstrap/js/dist/carousel";

const imgList = [
  "/images/image1.webp", "/images/image2.webp", "/images/image3.webp", "/images/image4.webp",
  "/images/image5.webp", "/images/image6.webp", "/images/image7.webp", "/images/image8.webp",
  "/images/image9.webp"
];

const initialTab = Object.fromEntries(new Map(
  imgList.map((value, index) => [`i${index}`, false])
));

function Home() {

  const [tab, setTab] = useState({...initialTab, i0: true});
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/babel";
    script.src = (
      <script>
        {
          $('#carousel').on('slid.bs.carousel', function (event) {
            event.preventDefault();
            const id = event.relatedTarget.id;
            setTab({...initialTab, [id]:true});
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

  function onTabClick(event) {
    event.preventDefault();
    const id = event.target.id.substring(1);
    setTab({...initialTab, [id]:true});
  }

  const imgBox = (
    <div className="carousel-inner mt-4">
      {
        imgList.map((value, index) => {
          if (index === 0){
            return (
              <div key={index} id={`i${index}`}
                   className="carousel-item active tab-pane text-center">
                <img style={{"height":"60vh"}} src={value} alt={`i${index}`}/>
              </div>
            )
          }else {
            return (
              <div key={index}  id={`i${index}`}
                   className="carousel-item tab-pane text-center">
                <img style={{"height":"60vh"}} src={value} alt={`i${index}`}/>
              </div>
            )
          }
        })
      }

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
  );

  const tabBox = (
    <ul className="nav nav-pills mt-4 d-flex flex-row justify-content-center">
      {
        imgList.map((value, index)=>{
          return (
            <li key={index} className="nav-item">
              <a data-toggle="pill" href={"#i" + index} id={"#i" + index}
                 onClick={onTabClick}
                 className={"nav-link " + (tab[`i${index}`] ? "active" : "")}>
                {(index + 1)}
              </a>
            </li>
          )
        })
      }
    </ul>
  );

  return (
    <div className="container mt-3 px-0">

      <div id="carousel" className="carousel slide tab-content"
           data-interval="false" data-ride="carousel">
        {imgBox}
        {tabBox}
      </div>
    </div>
  )
}

export default Home;