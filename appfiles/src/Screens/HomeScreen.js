import Container from "react-bootstrap/esm/Container";
import styles from "../CSS/style.css";
import Button from 'react-bootstrap/Button';
export default function HomeScreen() {
  return (
    <div className="landingContainer">
      <div className="landingTextContainer">
        <div className="landingTitle">RoKilianCars</div>
        <div className="landingText">Vaša najljubša prodajna spletna stran za iskanje osebnih vozil</div>
        <Button size="lg" variant="light">Začni z iskanjem osebnih vozil</Button>
      </div>
    </div>
  );
}