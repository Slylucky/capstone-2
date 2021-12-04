import { useState } from "react";

export default function Tours({ tours, cancel }) {
  const Tour = ({ props }) => {
    let { id, image, info, price, name } = props;
    const summaryLength = 300;
    const [summaryInfo, setSummaryInfo] = useState(
      info.substr(0, summaryLength) + `...`
    );

    const toggleSummary = (evt) => {
      let toggleSummaryBtn = evt.target.innerText.toLowerCase();
      if (toggleSummaryBtn.indexOf("less") !== -1) {
        evt.target.innerText = "show more";
        setSummaryInfo(info.substr(0, summaryLength));
      } else {
        evt.target.innerText = "show less";
        setSummaryInfo(info);
      }
    };

    return (
      <div className="single-tour">
        <img src={image} alt="" />
        <div className="tour-content">
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <div>
            <p>
              <span> {summaryInfo}</span>
              <button onClick={toggleSummary}>show more</button>
            </p>
          </div>
          <footer>
            <div
              className="delete-btn"
              onClick={() => {
                cancel(id);
              }}
            >
              Not interested
            </div>
          </footer>
        </div>
      </div>
    );
  };

  return (
    <div>
      {tours.map((indt) => (
        <Tour key={indt.id} props={indt} />
      ))}
    </div>
  );
}
