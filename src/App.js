import "bulma/css/bulma.css";

import ImgAlexa from "./images/alexa.png";
import ImgCortana from "./images/cortana.png";
import ImgSiri from "./images/siri.png";
import ProfileCard from "./ProfileCard";

// console.log(ImgAlexa);
// console.log(ImgCortana);
// console.log(ImgSiri);

function App() {
  return (
    <div>
      <div>
        <h1>Personal Digital Assistants</h1>
      </div>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard title="Alexa" handle="@alexa99" image={ImgAlexa} />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={ImgCortana}
              />
            </div>
            <div className="column is-3">
              <ProfileCard title="Siri" handle="@siri01" image={ImgSiri} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
