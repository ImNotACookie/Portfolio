import "./ContactMeSection.css";
import Card from "./Card";

function ContactMeSection() {
  return (
    <section className="page contact-me">
      <div className="container">
        <Card
          icon="./imgs/Upwork.svg"
          platform="Upwork"
          link="https://www.upwork.com/freelancers/~0151d2497b7ce5ef09?viewMode=1"
        />
        <Card
          icon="./imgs/Facebook.svg"
          platform="Facebook"
          link="https://www.facebook.com/profile.php?id=100038344272381"
        />
        <Card
          icon="./imgs/Instagram.svg"
          platform="Instagram"
          link="https://www.instagram.com/mahmoud_mohamed_232/"
        />
      </div>
    </section>
  );
}

export default ContactMeSection;
