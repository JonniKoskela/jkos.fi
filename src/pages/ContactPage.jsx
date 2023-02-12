import "./pages.css";
import AniKuva from "../img/Näyttökuva 2023-02-02 023807.png";

function ContactPage() {
  return (
    <div id="ContactPageContainer">
      <div className="ContactCard 1">
        <p>Email: jonni.koskela@gmail.com</p>
        <p>0445019189</p>
        <p></p>
      </div>
      <div className="ContactCard 2">
        <h2 style={{textShadow: '1px 1px 2px rgba(30,30,40,0.99)'}}>Minusta</h2>
        <p> Olen 24-vuotias tietojenkäsittelytieteen opiskelija Oulusta. Aloitin webkehittämisen itseopiskelun syyskuussa 2022 siitä lähtien tavoitteeni on ollut pyrkiä opettelemaan
          ja tekemään jotain uutta joka päivä. Vaikka webkehittäminen on "tutuin" osa-alue, olen innokas opettelemaan asioita muuhunkin sovelluskehittämiseen liittyen.

        </p>
        <img src={AniKuva} id="ani"></img>
      </div>
    </div>
  );
}

export default ContactPage;
