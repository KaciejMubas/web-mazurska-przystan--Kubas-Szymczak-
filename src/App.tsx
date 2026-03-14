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
        Karta <input type="radio" name="payment" value="card"/><br/>
        BLIK <input type="radio" name="payment" value="blik"/><br/>
        Gotówka (przy kasie) <input type="radio" name="payment" value="cash"/><br/>
      </label>
      <button type="submit" className="submit-btn">Rezerwuję</button>
    </form>
  </div>
</>
  )

  }
export default App
