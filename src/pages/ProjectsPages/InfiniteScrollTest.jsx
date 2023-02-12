import { useEffect, Fragment, useState, useRef } from "react";
import { createApi } from "unsplash-js";
import "./InfiniteScrollTest.css";


function InfiniteScrollTest() {
  const api = createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_KEY,
  });
  const pageNumber = useRef(1);
  const [loading, setLoading] = useState(false);
  const griditems = [];
  const griditemsCSS = [];
  
  useEffect(() => {
      const obsCallBack = (entries) => {
        pageNumber.current = pageNumber.current+1
        

      }
      const infOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 1
      }
      let infObserver = new IntersectionObserver(obsCallBack,infOptions)
      let obs = document.querySelector(".observed") 
      infObserver.observe(obs)
      console.log("observer loaded")

      return () => infObserver.unobserve(obs)

  },[])
  useEffect(() => {
    for (let i = 0; i <= 30; i++) {
      griditems[i] = Math.floor(Math.random() * 9 + 1);
      switch (griditems[i]) {
        case 1:
          griditemsCSS[i] = "i1x1";
          break;
        case 2:
          griditemsCSS[i] = "i1x2";
          break;
        case 3:
          griditemsCSS[i] = "i1x3";
          break;
        case 4:
          griditemsCSS[i] = "i2x1";
          break;
        case 5:
          griditemsCSS[i] = "i2x2";
          break;
        case 6:
          griditemsCSS[i] = "i2x3";
          break;
        case 7:
          griditemsCSS[i] = "i3x2";
          break;
        case 8:
          griditemsCSS[i] = "i3x2";
          break;
        case 9:
          griditemsCSS[i] = "i3x3";
          break;
      }
    }
    
  }, []);

  const GridMap = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      api.search
        .getPhotos({ query: "nature", page: 1, perPage: 30 })
        .then((response) => {
          setData(response);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    if (data == null) {
      return <div>Loading...</div>;
    } else
      return (
        <Fragment>
          <ul>
            {data.response.results.map((photo, index) => (
              <li key={photo.id} className={`griditem ${griditemsCSS[index]}`}>
                <img src={photo.urls.regular} alt="" srcset="" />
              </li>
            ))}
          </ul>
        </Fragment>
      );
  };

  return (
    <Fragment>
      <div id="infobox">
        Scrollaaminen on teoriassa "loputon", mutta Unsplash API:n vuoksi kuvien
        määrää on rajoitettu
      </div>
      <div className="InfiniteScrollGrid">
        <GridMap />
        <div className="observed"></div>
      </div>
    </Fragment>
  );
}

export default InfiniteScrollTest;
