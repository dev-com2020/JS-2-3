# Dzień 2: Plan Szkolenia

zaczynamy 9:00
kończymy max 17:00

przerwy: 
- 2x 15min (ok. 10:45, ok. 15:00)
- 1x 60min (ok. 13:00)

W drugim dniu naszego szkolenia skupimy się na kluczowych aspektach asynchronicznego programowania w Node.js. Zrozumienie tych koncepcji jest niezbędne do budowania wydajnych i skalowalnych aplikacji. Program szkolenia obejmuje:

## 1. Podstawy Asynchronicznego Programowania w Node

Asynchroniczność jest jedną z fundamentalnych cech Node.js, pozwalającą na nioblokujące operacje wejścia/wyjścia (I/O), co znacząco wpływa na wydajność aplikacji. W tej sekcji uczestnicy poznają:

- Czym jest asynchroniczne programowanie i jakie problemy rozwiązuje.
- Różnice między kodem synchronicznym a asynchronicznym.
- Jak Node.js obsługuje operacje asynchroniczne za pomocą pętli zdarzeń (Event Loop).

## 2. Callbacks

Callbacki to funkcje, które są przekazywane jako argumenty do innych funkcji i wywoływane po zakończeniu operacji asynchronicznej. Są one podstawowym mechanizmem obsługi asynchroniczności w JavaScript i Node.js. W tej części kursu omówione zostaną:

- Definicja i zastosowanie callbacków.
- Typowe wzorce użycia callbacków w Node.js.
- Problemy związane z callbackami, takie jak "callback hell", i sposoby ich rozwiązania.

## 3. Promises

Promises (obietnice) to abstrakcja, która ułatwia pracę z asynchronicznymi operacjami, stanowiąc alternatywę dla callbacków. Są one bardziej elastyczne i pozwalają na lepsze zarządzanie kodem asynchronicznym. Ten moduł zawiera:

- Wprowadzenie do promises: tworzenie i używanie obietnic.
- Łańcuchowanie obietnic (chaining) dla sekwencyjnego wykonania asynchronicznych operacji.
- Obsługa błędów przy użyciu `catch`.
- Użycie `async/await` dla czytelniejszego kodu asynchronicznego.

---