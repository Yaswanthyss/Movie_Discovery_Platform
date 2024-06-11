import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./homestyle.css";
import prof1 from "./avatar.png";
import bell from "./bell.png";
import pen from "./pen.png";
import bellicon from "./notification.png";
import tick from "./checklist.png";
import set from "./setting.png";
import man from "./man.png";
import help from "./question.png";
import back from "./backdrop.jpg";
import movie1 from "./kungfupanda4.jpg";
import movie from "./kpanda.jpg";
import movie2 from "./stthings.avif";
import movie3 from "./heist.jpeg";
import home from "./home.png";
import smile from "./laughing.png";
import hot from "./hot-sale.png";
import down from "./downloading.png";
import Card from "./card.jsx";
import MyList from "./mylist.jsx";
import Card2 from "./card2.jsx";

function Home({ addToList }) {
  const tvShows = [
    {
      imageUrl:
        "https://www.tamildhool.net/wp-content/uploads/2024/02/pss2.jpg",
      title: "Pandian Stores 2",
      description: "Family Drama ",
      Ott: "Disney+Hotstar",
      youtubeUrl:"https://youtu.be/jiCvQ4h9SVA?si=bBGrJYAFSrHWoL1Q",
    },
    {
      imageUrl:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1228/1491228-h-830a0d73826e",
      title: "Aaha Kalyanam",
      description: "Wedding Drama",
      Ott: "Disney+Hotstar",
    },
    {
      imageUrl: "https://www.tamildhool.net/wp-content/uploads/2023/01/mut.jpg",
      title: "Muthazhagu",
      description: " Inspirational Drama",
      Ott: "Disney+Hotstar",
    },
    {
      imageUrl: "https://www.tamildhool.net/wp-content/uploads/2023/03/tam.jpg",
      title: "Tamilum Sarasvathiyum",
      description: "Romantic Drama",
      Ott: "Disney+Hotstar",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/SeethaRaman.jpg/330px-SeethaRaman.jpg",
      title: "Seetha Raman",
      description: "Mythological Romance",
      Ott: "Zee Studio",
    },
    {
      imageUrl:
        "https://indiantvinfo.com/media/2022/08/Meenakshi-Ponnunga-300x169.jpg",
      title: "Meenakshi Ponnunga",
      description: "Sister Bonding",
      Ott: "Zee Studio",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGanOyYkju_uhiM2yqTm7jv77nh0Tdazh5A&s",
      title: "Anna",
      description: "Brother's Love",
      Ott: "Zee Studio",
    },
    {
      imageUrl: "https://www.sunnetwork.in/HomepageBanner/singamain.jpg",
      title: "Singapenne",
      description: "Motivational drama",
      Ott: "Sunnxt",
    },
    // Add more tv shows here
  ];

  const Popular = [
    {
      imageUrl:"https://www.koimoi.com/wp-content/new-galleries/2023/07/kanguva-poster-suriya-turns-into-a-mighty-warrior-as-he-surprises-fans-with-his-first-look-on-his-48th-birthday.jpg",
      title: "Kanguva",
      description: "Fiction /Thriller",
      Ott:"Amazon prime"
    },
    {
      imageUrl: "https://i.ytimg.com/vi/x6oUuu6vA7w/maxresdefault.jpg",
      title: "Thunivu",
      description: "Action/Thriller",
      Ott:"Netflix"
    },
    {
      imageUrl: "https://pbs.twimg.com/media/E4e44b1VoAA09Iv.jpg",
      title: "Beast",
      description: "Action /Thriller",
      Ott:"Netflix"
    },
    {
      imageUrl: "https://images.indianexpress.com/2024/01/goat-01012024.jpg",
      title: "Greatest of all Time",
      description: "Sci-fi/ Time travel",
      Ott:"Sunnxt"
    },
  ];

  const cardsData = [
    {
      imageUrl:
        "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUDo2_NFq7TY-PvbtlylT91NFEp36vmQ3_rN2Ih3gM47LpCQX-RBA4Sba7HYTepPI_icMiV-TlEpMU4yrlkOQ3pByV2gzUOHdk4.jpg?r=8da",
      title: "The Minions",
      description: "Comedy/ Sci-fi",
      Ott:"Sony Liv"
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8LXAawEKgGSU7prAphhtq39U89FI8F825QHSYUh6FtkbWM1cGR7XFJxQEIG2JzPA2_0&usqp=CAU",
      title: "Boss Baby",
      description: "Sci-fi / Thriller",
      Ott:"Amazon Prime"
    },
    {
      imageUrl:
        "https://pic-bstarstatic.akamaized.net/ugc/4b651c8875a8f860a68360fa421cc0ee.jpg@960w_540h_1e_1c_1f.webp",
      title: "Sea Beast",
      description: "Thriller",
      Ott:"Netflix"
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tmIWYL33l-HqXpj0jysBqd-gSDPq4Cr3mHh0GhgWEA&s",
      title: "The Bad guys",
      description: "Comedy /Action",
      Ott:"Sony Liv"
    },
    {
      imageUrl:
        "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX-xVqFdzU19bexpaZno17dFXuLEu8l8zLW-vxxpkJ9EVGRqdBS-SbAWxYWKiWtYzBVSpY_rOzcNt__PrRIr1H7SOrZTWFzqgBs.jpg?r=f20",
      title: "Hotel Translvania",
      description: "Action/Thriller",
      Ott:"Zee5"
    },
    // Add more card data as needed
  ];

  const serials=[
    {
      imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5729/445729-h",
      title: "Yenkita Mothathe",
      description: "Comedy Game",
      Ott:"Disney+Hotstar"
    },
    {
      imageUrl: "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/6627/386627-h",
      title: "Athu Ithu Yethu ",
      description: "Family Drama",
      Ott:"Disney+Hotstar"
    },
    {
      imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/1888/541888-h",
      title: "Start Music",
      description: "Musical Game",
      Ott:"Disney+Hotstar"
    },
    {
      imageUrl: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_640/sources/r1/cms/prod/6363/1714177996363-h",
      title: "Cooku with Comali",
      description: "Comedy cooking show",
      Ott:"Disney+Hotstar"
    },
    {
      imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4948/1711573984948-h",
      title: "Andagagasam",
      description: "Family fun game",
      Ott:"Disney+Hotstar"
    },
    {
      imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/141/1640141-h-24444d47acea",
      title: "Super Singer",
      description: "Singing + Fun",
      Ott:"Disney+Hotstar"
    },
    
  ];

  const series=[
    {
      imageUrl: "https://www.koimoi.com/wp-content/new-galleries/2022/06/suzhal-the-vortex-review-001.jpg",
      title: "Suzhal",
      description: "Investigative drama",
      Ott:"Amazon Prime"
    },
    {
      imageUrl: "https://pbs.twimg.com/media/GJ8FYT6bAAEKD9t.png",
      title: "Inspector Rishi",
      description: "Horror / Thriller",
      Ott:"Netflix"
    },
    {
      imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ACE773BDC4F7EB75139F3F00C0CB1B2590AF7E064AF9DE0C2F1F7DDD8C3EC01A/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
      title: "Loki Series",
      description: "Marvel - Action drama",
      Ott:"Netflix"
    },
    {
      imageUrl: "https://www.movieherald.com/wp-content/uploads/2022/08/TamilRockerz_Review.jpg",
      title: "Tamil Rockers",
      description: "Fictional Story",
      Ott:"Sony Liv"
    },
    {
      imageUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/04/stranger-things-cartoon.jpg",
      title: "Stranger Things",
      description: "Horror -Season 4",
      Ott:"Netflix"
    },
  ];

  const [modalData, setModalData] = useState(null);
  const [myList, setMyList] = useState([]);

  const handleCardClick = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const handleWatchNow = () => {
    if (modalData && modalData.youtubeUrl) {
      window.open(modalData.youtubeUrl, '_blank');
    }
  };


  const addToMyList = () => {
    addToList(modalData);
    closeModal();
  };
  return (
    <div className="top">
      <div className="box1">
        <div className="profile">
          <ul>
            <li>
              <div>
                <img src={prof1} alt="" className="prof" />
              </div>
            </li>
            <li>
              <div>
                <img src={prof1} alt="" className="prof" />
              </div>
            </li>
            <li>
              <div>
                <img src={prof1} alt="" className="prof" />
              </div>
            </li>
          </ul>
          <div>
            <img src={pen} alt="" className="manicon" />
          </div>
        </div>
        <h3 className="manprof">Manage Profiles</h3>
        <div className="droplist">
          <table>
            <tr>
              <td>
                <img src={bellicon} alt="" />
              </td>
              <td>
                <h3>Notification</h3>
              </td>
            </tr>
            <tr>
              <td>
                <img src={tick} alt="" />
              </td>
              <td>
                <h3>
                  <Link to="/mylist">My List</Link>
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <img src={set} alt="" />
              </td>
              <td>
                <h3>App Settings</h3>
              </td>
            </tr>
            <tr>
              <td>
                <img src={man} alt="" />
              </td>
              <td>
                <h3>
                  <Link to="/login">Account</Link>
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <img src={help} alt="" />
              </td>
              <td>
                <h3>Help</h3>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div></div>
      <div className="box2">
        <ul className="fcolor">
          <li>
            <h3>Home</h3>
          </li>
          <li>
          <a href="#tvshow"><h3>Serials</h3></a>
          </li>
          <li>
          <a href="#serials"><h3>Tv Shows</h3></a>
          </li>
          <li>
          <a href="#popular"><h3>New & Popular</h3></a>
          </li>
          <li>
          <a href="#series"><h3>Series</h3></a>
          </li>
        </ul>
        <div>
          <img src={bell} alt="" className="bell" />
        </div>
        <div className="carousel">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={movie} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={movie2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={movie3} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img
                  src={"https://pbs.twimg.com/media/E4e44b1VoAA09Iv.jpg"}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={"https://i.ytimg.com/vi/x6oUuu6vA7w/maxresdefault.jpg"}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={
                    "https://www.koimoi.com/wp-content/new-galleries/2023/07/kanguva-poster-suriya-turns-into-a-mighty-warrior-as-he-surprises-fans-with-his-first-look-on-his-48th-birthday.jpg"
                  }
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="new">
          <h3>Watch Now the latest Movies and Series !</h3>
        </div>
        <h3 className="tv">Serials &gt; </h3>
        <div className="tvshows" id="tvshow">
          <div className="scrolling-wrapper">
            {tvShows.map((show, index) => (
              <Card
                key={index}
                imageUrl={show.imageUrl}
                title={show.title}
                description={show.description}
                Ott={show.Ott}
                youtubeUrl={show.youtubeUrl}
                onClick={() => handleCardClick(show)}
              />
            ))}
            {modalData && (
              <div className="modal" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={modalData.imageUrl}
                    alt={modalData.title}
                    className="modal-image"
                  />
                  <div className="modal-details">
                    <h3>{modalData.title}</h3>
                    <p>{modalData.description}</p>
                    <h3>{modalData.Ott}</h3>
                  </div>
                  <div className="modal-actions">
                    <button className="addtolist" onClick={addToMyList}>
                      <h2>Add to List</h2>
                    </button>
                    <button className="watchnow" onClick={handleWatchNow}>
                      <h2>Watch Now</h2>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ===============================TV SHOWS============================= */}
        <h3 className="ser">Tv Shows &gt; </h3>
        <div className="serials" id="serials">
          <div className="scrolling-wrapper">
            {serials.map((show, index) => (
              <Card
                key={index}
                imageUrl={show.imageUrl}
                title={show.title}
                description={show.description}
                Ott={show.Ott}
                onClick={() => handleCardClick(show)}
              />
            ))}
            {modalData && (
              <div className="modal" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={modalData.imageUrl}
                    alt={modalData.title}
                    className="modal-image"
                  />
                  <div className="modal-details">
                    <h3>{modalData.title}</h3>
                    <p>{modalData.description}</p>
                    <h3>{modalData.Ott}</h3>
                  </div>
                  <div className="modal-actions">
                    <button className="addtolist" onClick={addToMyList}>
                      <h2>Add to List</h2>
                    </button>
                    <button className="watchnow">
                      <h2>Watch Now</h2>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==================================Popular movies============================================ */}
        <h3 className="pop">Popular &gt; </h3>
        <div className="popular" id="popular">
          <div className="scrolling-wrapper">
            {Popular.map((show, index) => (
              <Card
                key={index}
                imageUrl={show.imageUrl}
                title={show.title}
                description={show.description}
                Ott={show.Ott}
                onClick={() => handleCardClick(show)}
              />
            ))}
            {modalData && (
              <div className="modal" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={modalData.imageUrl}
                    alt={modalData.title}
                    className="modal-image"
                  />
                  <div className="modal-details">
                    <h3>{modalData.title}</h3>
                    <p>{modalData.description}</p>
                    <h3>{modalData.Ott}</h3>
                  </div>
                  <div className="modal-actions">
                    <button className="addtolist" onClick={addToMyList}>
                      <h2>Add to List</h2>
                    </button>
                    <button className="watchnow">
                      <h2>Watch Now</h2>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <h3 className="series">Series &gt; </h3>
        <div className="movseries" id="series">
          <div className="scrolling-wrapper">
            {series.map((show, index) => (
              <Card
                key={index}
                imageUrl={show.imageUrl}
                title={show.title}
                description={show.description}
                Ott={show.Ott}
                onClick={() => handleCardClick(show)}
              />
            ))}
            {modalData && (
              <div className="modal" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={modalData.imageUrl}
                    alt={modalData.title}
                    className="modal-image"
                  />
                  <div className="modal-details">
                    <h3>{modalData.title}</h3>
                    <p>{modalData.description}</p>
                    <h3>{modalData.Ott}</h3>
                  </div>
                  <div className="modal-actions">
                    <button className="addtolist" onClick={addToMyList}>
                      <h2>Add to List</h2>
                    </button>
                    <button className="watchnow">
                      <h2>Watch Now</h2>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="box3">
        <div className="search">
          <div className="input-group">
            <div className="form-outline" data-mdb-input-init>
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="scroll-wrapper">
          <div className="scroll-content">
            <div className="card-container">
              {cardsData.map((card, index) => (
                <Card2
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  onClick={() => handleCardClick(card)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="floating">
        <ul>
          <li>
            <img src={home} alt="" />
            <h3>Home Page</h3>
          </li>
          <li>
            <img src={hot} alt="" />
            <h3>New & Hot</h3>
          </li>
          <li>
            <img src={smile} alt="" />
            <h3>Fast Laughs</h3>
          </li>
          <li>
            <img src={down} alt="" />
            <h3>Downloads</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
