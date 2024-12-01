const calendar = document.querySelector('.calendarBox')

calendar.onclick = function(e){
    let now = new Date();
   let localDate = now.toLocaleDateString('en-CA');
    let numb = e.target.id
    let dateAtCalendar = '2024-12-' + numb
    console.log(dateAtCalendar, localDate)
    if (localDate == dateAtCalendar || localDate > dateAtCalendar) {
        render()

    } if (dateAtCalendar > localDate) {
        alert(`Еще рано, приходи когда наступит ${numb + '.12.2024 или позже'}`)
    }
};

function checkLocalTime() {
    let now = new Date();
   let localDate = now.toLocaleDateString();
    return localDate
}

function render() {
    let body = document.querySelector('.body')
    body.classList.remove('bodyBack')
    body.innerHTML = `    <header>
        <div class="buttonBoxFirst">
            <a href="./index.html"><p  class="headerLink">STRONA GŁÓWNA</p></a>
            <a href="./kontakt"><p class="headerLink hide">KONTAKT</p></a>
            
        </div>
    </header>
    <section class=" mainFirst">
        <div><img class="imageFirst" src="./image/1Day.png" alt=""></div>
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
}
