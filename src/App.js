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
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={ImgAlexa}
                description="Alexa was created by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={ImgCortana}
                description="Cortana was a voice assistant created by Microsoft."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={ImgSiri}
                description="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
