import './App.css'
import {type ChangeEvent, useState} from "react";

function App() {

  const [name, setName] = useState<string>("");
  const [boatPrice, setBoatPrice] = useState<number>(20);
  const [hours, setHours] = useState<number>(1);
  const [isKapok, setIsKapok] = useState<boolean>(false);
  const [isInstructor, setIsInstructor] = useState<boolean>(false);
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("card");

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    console.log(`Imię klienta: ${event.target.value}`);
  }

  function handleBoatChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const price = Number(event.target.value);
    setBoatPrice(price);
    console.log(`Wybrano łódź o cenie: ${price} zł/h`);
  }

  function handleHoursChange(event: ChangeEvent<HTMLInputElement>) {
    const h = Number(event.target.value);
    setHours(h);
    console.log(`Godziny zmienione na: ${h}`);
  }

  function handlePaymentChange(event: ChangeEvent<HTMLInputElement>) {
    setPaymentMethod(event.target.value);
    console.log(`Wybrana płatność: ${event.target.value}`);
  }

  function handleKapokChange(event: ChangeEvent<HTMLInputElement>) {
    setIsKapok(event.target.checked);
    console.log(`Kapok: ${event.target.checked}`);
  }

  function handleInstructorChange(event: ChangeEvent<HTMLInputElement>) {
    setIsInstructor(event.target.checked);
    console.log(`Instruktor: ${event.target.checked}`);
  }

  function handleAgreementChange(event: ChangeEvent<HTMLInputElement>) {
    setHasAgreed(event.target.checked);
    console.log(`Regulamin: ${event.target.checked}`);
  }
  
  return (
<>
  <h1>Rezerwacja: Mazurska Przystań</h1>
  <div id={'container'}>
    <form>
      <label>Imie: <input type="text" name="name" placeholder="Imię" value={name} onChange={handleNameChange}/></label><br/>
      <label>Wybierz łódź: </label>
      <select value={boatPrice} onChange={handleBoatChange}>
        <option value="20">Kajak (20 zł/h)</option>
        <option value="35">Rower wodny (35 zł/h)</option>
        <option value="150">Jacht Omega (150 zł/h)</option>
      </select><br/>
      <label>Liczba godzin: </label>
      <input type="range" min="1" max="8" value={hours} onChange={handleHoursChange} /><br/>
      <label className="checkbox">
        <input type="checkbox" name="kapok" checked={isKapok} onChange={handleKapokChange}/>
        Kapoki (+5 zł)
      </label><br/>
      <label className="checkbox">
        <input type="checkbox" name="instructor" checked={isInstructor} onChange={handleInstructorChange}/>
        Instruktor (+50 zł za godzinę)
      </label>
      <h3>Wybierz rodzaj płatności:</h3>
      <label>
        <img src="/karta.png" alt="karta" style={{ width: '30px',}} />Karta<input type="radio" name="payment" value="card" checked={paymentMethod === "card"} onChange={handlePaymentChange}/><br/>
        <img src="/blik.png" alt="blik" style={{ width: '40px',}} />BLIK<input type="radio" name="payment" value="blik" checked={paymentMethod === "blik"} onChange={handlePaymentChange}/><br/>
      </label><br/>
      <label className="checkbox">
        Akceptuję regulamin
        <input type="checkbox" name="agreement" checked={hasAgreed} onChange={handleAgreementChange}/>
      </label><br/>
      <button type="submit" className="submit-button">Rezerwuję</button>
    </form>
  </div>
</>
  )

  }
export default App
