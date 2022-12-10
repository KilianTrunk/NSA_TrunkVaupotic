import styles from "../../CSS/style.css";
import Button from 'react-bootstrap/Button';
import TipsCarousel from "../Carousel";

export default function BuyingTipsSection() {
  return (
    <div className="buyingTipsContainer">
        <div className="buyingTipsMainText">Naši top nasveti za nakup</div>
        <div className="buyingTipsSecondaryText">Poskrbite, da boste pri nakupu avtomobila naredili pravo izbiro</div>
        <TipsCarousel />
    </div>
  );
}