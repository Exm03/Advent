const calendar = document.querySelector('.calendarBox')

calendar.onclick = function(e){
    let now = new Date();
   let localDate = now.toLocaleDateString('en-CA');
    let numb = e.target.id
    let dateAtCalendar = '2024-12-' + numb
    console.log(dateAtCalendar, localDate)
    if (localDate == dateAtCalendar || localDate > dateAtCalendar) {
        render(numb)

    } if (dateAtCalendar > localDate) {
        alert(`Еще рано, приходи когда наступит ${numb + '.12.2024 или позже'}`)
    }
};

function checkLocalTime() {
    let now = new Date();
   let localDate = now.toLocaleDateString();
    return localDate
}

function render(numb) {
    let body = document.querySelector('.body')
    body.classList.remove('bodyBack')
    if (numb == 1) {
        body.innerHTML = `    <header>
        <div class="buttonBoxFirst">
            <a href="./index.html"><p  class="headerLink">STRONA GŁÓWNA</p></a>
            <a href="./kontakt"><p class="headerLink hide">KONTAKT</p></a>
            
        </div>
    </header>
    <section class=" mainFirst">
        <div class="dayIamge"><img class="imageFirst" src="./image/1Day.png" alt=""></div>
        <div><h1 class="titleFirst textCentr">KTÓRY   DZIŚ   JEST?</h1>
            <p class="textCentr">1 grudnia — pierwszy grudnia</p>
            <br>
            <br>
            <h2 class="nameMounth nameMounthFirst">HISTORIA    KALENDARZA  ADWENTOWEGO</h2>
            <br>
            <p>Dawno temu, w XIX wieku, w Niemczech, pewien chłopiec o imieniu Gerhard codziennie pytał swoją mamę: „Kiedy w końcu będzie Boże Narodzenie?”. Mama, zmęczona jego pytaniami, wpadła na pomysł, aby stworzyć coś specjalnego. Wzięła karton i podzieliła go na 24 części. Każdego dnia, od 1 grudnia, dawała synowi mały kawałek czekolady, który ukrywała w jednym z okienek kartonu.
                <br>
                <br>
            Ten pomysł tak się spodobał, że wkrótce w Niemczech zaczęto produkować pierwsze adwentowe kalendarze z obrazkami i czekoladkami. Z czasem kalendarze stały się popularne w całej Europie i na świecie. Dziś są nie tylko dla dzieci, ale również dla dorosłych —  wypełnione kawą, kosmetykami czy małymi prezentami.
            <br>
            <br>
            <br>
            Sprawdzić rozumienie tekstu można <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfkAAnjLyYg2IhYoumnC4M035j6KVqkAmc2NEdOZVSTUyoWrA/viewform">tutaj</a>,<br> 
            a nauczyć się nowych słów <a class="link" href="https://quizlet.com/ch/977935497/112-historia-kalendarza-adwentowego-flash-cards/">tutaj</a>.</p></div>
        
    </section>
        `
    } if (numb == 2) {
        body.innerHTML= `<header>
        <div class="buttonBoxFirst">
            <a href="./index.html"><p  class="headerLink">STRONA GŁÓWNA</p></a>
            <a href="./kontakt"><p class="headerLink hide">KONTAKT</p></a>
            
        </div>
    </header>
    <section class=" mainFirst">
        
        <div><h1 class="titleFirst textCentr">KTÓRY   DZIŚ   JEST?</h1>
            <p class="textCentr">2 grudnia —  drugi grudnia</p>
            <br>
            <br>
            <h2 class="nameMounth nameMounthFirst">ZIMOWE PRZESĄDY I WIERZENIA</h2>
            <br>
            <p>Zima w polskiej tradycji ludowej jest czasem pełnym magii i wierzeń. Wiele dawnych przesądów związanych z zimą dotyczyło przewidywania pogody, obfitości plonów czy pomyślności w nadchodzącym roku. Na przykład obserwowanie pogody w dzień Wigilii miało wskazywać, jaka będzie pogoda w nowym roku. Uważano także, że gdy podczas Bożego Narodzenia pada śnieg, rok będzie obfity w plony. Innym popularnym wierzeniem było to, że wiatr w Nowy Rok zwiastuje kierunek, z którego przyjdą zmiany w życiu.
                <br>
                <br>
                Zimowe przesądy miały również wymiar ochronny – wierzono, że aby uniknąć nieszczęścia, należy np. unikać wchodzenia do domu z pustymi rękami w Nowy Rok lub upewnić się, że pierwszy gość w tym dniu to mężczyzna.
                <br>
                <br>
            Sprawdzić rozumienie tekstu można <a class="link" href="https://docs.google.com/forms/d/17tK_3dQMdvqvVdv70NmI6KOPyRxbXemObUwN2DZpgJY/edit?usp=drivesdk">tutaj</a>,<br> 
            a nauczyć się nowych słów <a class="link" href="https://quizlet.com/978234267/212-flash-cards/?x=1jqU&i=235rwg">tutaj</a>.</p></div>
        <div class="dayIamge"><img class="imageFirst" src="./image/2Day.png" alt=""></div>
    </section>`
    } if (numb == 3) {
        body.innerHTML= `<header>
        <div class="buttonBoxFirst">
            <a href="./index.html"><p  class="headerLink">STRONA GŁÓWNA</p></a>
            <a href="./kontakt"><p class="headerLink hide">KONTAKT</p></a>
            
        </div>
    </header>
    <section class=" mainFirst">
        
        <div><h1 class="titleFirst textCentr">KTÓRY   DZIŚ   JEST?</h1>
            <p class="textCentr">3 grudnia — trzeci grudnia</p>
            <br>
            <br>
            <h2 class="nameMounth nameMounthFirst">ZIMA W POLSCE: MROŹNE PIĘKNO NATURY</h2>
            <br>
            <p>Pogoda w Polsce różni się w zależności od regionu.
                <br>
                <br>
                Nad morzem zimy są łagodniejsze – temperatury rzadko spadają poniżej zera, częste są deszcze i silne wiatry. W centralnej i wschodniej Polsce zima jest mroźniejsza, z temperaturami do -15°C i częstymi opadami śniegu, które utrudniają komunikację.
                <br>
                <br>
                W górach panują idealne warunki do sportów zimowych – gruba warstwa śniegu i niskie temperatury utrzymują się przez kilka miesięcy.
                <br>
                <br>
                Częste zjawiska to śnieg, mgła, gołoledź i mroźne wiatry, które potęgują uczucie zimna. Mimo trudnych warunków zima w Polsce ma swój urok dzięki ośnieżonym krajobrazom i świątecznej atmosferze.
                <br>
                <br>
            Sprawdzić rozumienie tekstu można <a class="link" href="https://docs.google.com/forms/d/1bztVkEWeQyMmAW5CrSj02vCp7DvGEYhLBnhSPMq_lZc/edit">tutaj</a>,<br> 
            a nauczyć się nowych słów <a class="link" href="https://quizlet.com/978712898/312-flash-cards/?i=235rwg&x=1qqt">tutaj</a>.</p></div>
        <div class="dayIamge"><img class="imageFirst" src="./image/3Day.png" alt=""></div>
    </section>`
    }
    
    
}
