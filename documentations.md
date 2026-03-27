# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Maciej Kubas i Dominika Szymczak
**Klasa:** 3 Technikum
**Data:** 20.03.2026r.

---
## 1. Analiza wymagań klienta
(Opisz własnymi słowami, jakie funkcjonalności musiały znaleźć się w aplikacji na podstawie e-maila od klienta).
* Lista rozwijalna do wyboru środka wodnego transportu
* Walidacja pola wyboru żaglówki ,,Omega" i wyświetlenie ostrzeżenia
* Pole tekstowe do wpisania imienia przez klienta
* Interaktywny suwak do wyboru ilości godzin
* Dynamiczny kalkulator ceny
* Dodatkowe opcje do zaznaczenia zależnie od preferencji klienta
* Wybór metody płatności
* Akceptacja regulaminu
* Podsumowanie kosztów

---
## 2. Architektura rozwiązania
(Wyjaśnij, dlaczego zdecydowaliście się na jeden komponent App.ts i
jak podzieliliście w nim kod na sekcje).
Ponieważ pracowanie na jednym pliku jest szybsze - nie trzeba martwić się o przekazywanie danych między dwoma oddzielnymi plikami ani przeskakiwać po zakładkach w edytorze, co pozwala na szybkie wprowadzanie poprawek. Podzieliliśmy kod na 2 sekcje, pierwszą, odpowiadającą za logikę biznesową (backend) który znajduje się między funkcją App i return, oraz drugą, odpowiadającą za interfejs użytkownika (frontend) i znajduje się pod return.

---
## 3. Zarządzanie stanem (`useState`)
(Wypełnij poniższą tabelę wszystkimi hookami useState, których użyliście w kodzie).

| Nazwa zmiennej stanu | Typ danych | Za co odpowiada? |
| :--- | :--- | :--- |
| name | string | Przechowuje imię klienta |
| boatPrice | number | Przechowuje cenę wybranej łodzi |
| hours | number | Deklaruje określoną przez klienta ilość godzin wypożyczenia łodzi  |
| isKapok | boolean | Sprawdza czy w zamówieniu klienta doliczany jest kapok |
| isInstructor | boolean | Sprawdza czy klient w swoim zamówieniu uwzględnił instruktora |
| hasAgreed | boolean | Weryfikuje czy klient zaakceptował regulamin |
| paymentMethod | string | Określa formę płatności |
| isSubmitted | boolean | Kontroluje czy formularz został przesłany |

---
## 4. Algorytm obliczania ceny
(Opisz krok po kroku, w jaki sposób Twoja aplikacja wylicza cenę końcową.
Możesz użyć pseudokodu lub wzoru matematycznego).

* **Cena bazowa:** (jak jest ustalana?)
  JEŚLI wybrano "Kajak" TO cena = 20
  W PRZECIWNYM RAZIE JEŚLI wybrano "Rower wodny" TO cena = 35
  W PRZECIWNYM RAZIE cena = 150
  calkowity_koszt = cena * liczba_godzin

* **Wpływ godzin:** (jak suwak zmienia cenę?)
  Aplikacja wykorzystuje suwak, który pozwala wybrać liczbę godzin. Wartość ta jest przechowywana w zmiennej h. Całkowity koszt rośnie proporcjonalnie do wybranego czasu.

* **Opcje dodatkowe:** (jak doliczacie kapoki i instruktora?)
  JEŚLI instruktor_zaznaczony TO
  suma = suma + (50 * liczba_godzin)
  JEŚLI kapoki_zaznaczone TO
  suma = suma + 5
---
## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. `display:` - (Aktywuje model Flexbox dla kentenera, zamieniając jego dzieci w elastyczne elementy )
2. `---` - (-)
3. `---` - (-)
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?** Stworzenie funkcji zatwierdzania strony
* **Czego nowego się nauczyliście?** dokumentacji kodu...
* **Co byście zmienili, gdybyście mieli więcej czasu?** nic, ponieważ nasza mazurska przystań jest doskonała :D
---
## 7. Checklisty (Zaznacz [x])
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.