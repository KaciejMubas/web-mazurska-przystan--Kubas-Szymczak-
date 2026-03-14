import './App.css'

function App() {


  return (
<>
  <h1>Rezerwacja: Mazurska Przystań</h1>
  <div id={'container'}>
    <form>
      <label>Imie: <input type="text" name="name" placeholder="Imię" /></label><br/>
      <label>Wybierz łódź: </label>
      <select>
        <option value="kajak">Kajak (20 zł/h)</option>
        <option value="rower">Rower wodny (35 zł/h)</option>
        <option value="omega">Jacht Omega (150 zł/h)</option>
      </select><br/>
      <label>Liczba godzin: </label>
      <input type="range" min="1" max="8" /><br/>
      <label className="checkbox">
        <input type="checkbox" />
        Kapoki (+5 zł)
      </label><br/>
      <label className="checkbox">
        <input type="checkbox" />
        Instruktor (+50 zł za godzinę)
      </label>
      <h3>Wybierz rodzaj płatności:</h3>
      <label>
        <img src="/karta.png" alt="karta" style={{ width: '30px',}} />Karta<input type="radio" name="payment" value="card"/><br/>
        <img src="/blik.png" alt="blik" style={{ width: '40px',}} />BLIK<input type="radio" name="payment" value="blik"/><br/>
      </label><br/>
      <button type="submit" className="submit-button">Rezerwuję</button>
    </form>
  </div>
</>
  )

  }
export default App
