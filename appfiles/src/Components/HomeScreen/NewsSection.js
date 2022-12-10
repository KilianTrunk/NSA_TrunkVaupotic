import styles from "../../CSS/style.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewsSection() {
    return (
        <div className="newsContainer">
            <div className="newsMainText">
                Nikoli ne zamudite najnovejših novic
            </div>
            <div className="newsSecondaryText">
                S prijavo na našo elektronsko oglaševanje dobite tedenske novice glede avtomobilov.
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" placeholder="Vnesite vaš elektronski naslov" />
                </Form.Group>
                <Button variant="light" type="submit">
                    Prijava na oglaševanje
                </Button>
            </Form>
        </div>
    );
}