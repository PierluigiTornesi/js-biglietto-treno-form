//Milestone 1
const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function() {

    //Variabile che conterrá il contenuto dell'input dei km
    const kmUserElem = document.getElementById("kmUser");
    //debug
    console.log("kmUserElem", kmUserElem);
    //Variabile che conterrá il contenuto dell'input dell'etá
    const anniUserElem = document.getElementById("anniUser");
    //debug
    console.log("anniUserElem", anniUserElem);

    //Variabile che conterrá il valore dell'input dei km
    const numKm = kmUserElem.value;
    //debug
    console.log("numKm", numKm);
    //Variabile che conterrá il valore dell'input dei km
    const etaPass = anniUserElem.value;
    //debug
    console.log("etaPass", etaPass);

    //Variabile che conterrá il messaggio del risultato finale
    let message = "";
    //creo una costante per il costo al km del biglietto
    const costoKm = 0.21;
    //credo una variabile per il costo del biglietto
    let costoBiglietto = 0;


    //verifico se i km sono validi
    if(numKm >= 0){
        //calcolo il costo del biglietto
        costoBiglietto = numKm * costoKm ;
        //debug costoBiglietto
        console.log(costoBiglietto, typeof costoBiglietto, "costo biglietto senza sconto");
        //verifico se posso applicare lo sconto
        if(etaPass > 65){
            //creo una costante per lo sconto se é over 65
            const scontoOver = costoBiglietto * 0.40;
            //debug sconto
            console.log(scontoOver, typeof scontoOver , "totale sconto da applicare");
            //applico lo sconto al costo del biglietto
            costoBiglietto = costoBiglietto - scontoOver;
            //debug costoBiglietto
            console.log(costoBiglietto, typeof costoBiglietto, "prezzo del biglietto dopo aver applicato lo sconto");

            //modifico il messaggio e invio il costo del biglietto con lo sconto over 65
            message = `
                <h2>Ciao passeggero </h2> 
                <p> Questo é il costo del tuo biglietto , ${costoBiglietto.toFixed(2)} euro. </p>
                <p> Al biglietto é stato applicato uno sconto del 40% , ovvero é stato detratto questo valore ${scontoOver.toFixed(2)} essendo lei di etá over 65, dato che ha ${etaPass} anni. </p> `;


        }else if((etaPass < 18)&&(etaPass>= 0)){
            //creo una costante per lo sconto se é minorenne
            const scontoOver = costoBiglietto * 0.20;
            //debug sconto
            console.log(scontoOver, typeof scontoOver, "totale sconto da applicare");
            //applico lo sconto al costo del biglietto
            costoBiglietto = costoBiglietto - scontoOver;
            //debug costoBiglietto
            console.log(costoBiglietto, typeof costoBiglietto, "prezzo del biglietto dopo aver applicato lo sconto");

            //modifico il messaggio e invio il costo del biglietto con lo sconto per i minorenni
            message = `
                <h2>Ciao passeggero </h2> 
                <p> Questo é il costo del tuo biglietto , ${costoBiglietto.toFixed(2)} euro. </p>
                <p> Al biglietto é stato applicato uno sconto del 20% , ovvero é stato detratto questo valore ${scontoOver.toFixed(2)} essendo lei un minorenne, dato che ha ${etaPass} anni. </p> `;
        }else if(etaPass < 0){
            //non applico nessuno sconto e invio un messaggio di errore
            message = `
                <h2> Ciao passeggero </h2>
                <p> La sua etá non risulta conforme , probabilmente ha sbagliato a digitare, la preghiamo di ricaricare la pagina e di inserire nuovamente i dati, grazie.</p>
            `
            costoBiglietto = 0;
        }else{
            //non applico nessuno sconto e invio il messaggio con il costo
            message = `
            <h2> Ciao passeggero </h2>
            <p>Il prezzo del suo biglietto é di ${costoBiglietto.toFixed(2)} euro , a cui non é stato applicato nessuno sconto avendo lei ${etaPass} anni. </p>
            <p>Gli sconti possibili sono del 20% per i minorenni e del 40% per gli over 65.</p>
            `
        }
    }else{
        //invio un messaggio di errore essendo sbagliati i km
        message = `
        <h2> Ciao passeggero </h2>
        <p>Il numero di km da lei inserito non risulta conforme, probabilmente ha sbagliato a digitare, la preghiamo di ricaricare la pagina e di inserire nuovamente i dati, grazie. </p>
        `
    }

    //restituisco il messaggio
    document.getElementById("message").innerHTML = message;
    
});



//Milestone2
const generaBtn = document.getElementById("genera");
generaBtn.addEventListener("click", function() {

    //Variabile che conterrá il contenuto dell'input dei km
    const kmUserElem = document.getElementById("kmDaPercorrere");
    //debug
    console.log("kmUserElem", kmUserElem);
    //Variabile che conterrá il contenuto dell'input dell'etá
    const anniUserElem = document.getElementById("fasciaEta");
    //debug
    console.log("anniUserElem", anniUserElem);

    //Variabile che conterrá il valore dell'input dei km
    const numKm = kmUserElem.value;
    //debug
    console.log("numKm", numKm);
    //Variabile che conterrá il valore dell'input dei km
    const etaPass = anniUserElem.value;
    //debug
    console.log("etaPass", etaPass);
    //variabile per il messaggio di errore
    let message = "";
    //creo una costante per il costo al km del biglietto
    const costoKm = 0.21;
    //credo una variabile per il costo del biglietto
    let costoBiglietto = 0;
    //creo una variabile per il nome e il cognome del passeggero
    const nomeCognomeUser = document.getElementById("nomeCognome");
    const nomeCognome = nomeCognomeUser.value;
    //debug nome e cognome
    console.log("nome e cognome", nomeCognome)
    //verifico se i km sono validi
    if(numKm >= 0){

        //calcolo il costo del biglietto
        costoBiglietto = numKm * costoKm ;
        //debug costoBiglietto
        console.log(costoBiglietto, typeof costoBiglietto, "costo biglietto senza sconto");
        //verifico se posso applicare uno sconto
        if(etaPass == "Over 65"){
            //creo una costante per lo sconto se é over 65
            const scontoOver = costoBiglietto * 0.40;
            //debug sconto
            console.log(scontoOver, typeof scontoOver , "totale sconto da applicare");
            //applico lo sconto al costo del biglietto
            costoBiglietto = costoBiglietto - scontoOver;
            //debug costoBiglietto
            console.log(costoBiglietto, typeof costoBiglietto, "prezzo del biglietto dopo aver applicato lo sconto");
            //restituisco il nome e cognome nel biglietto
            document.getElementById("nomeBiglietto").innerHTML = nomeCognome;
            //restituisco l'offerta nel biglietto
            document.getElementById("offertaBiglietto").innerHTML = "Offerta Over 65";
            //restituisco il costo nel biglietto
            document.getElementById("costoBiglietto").innerHTML = costoBiglietto.toFixed(2);
            //restituisco un numero casuale di carrozza
            const carrozza = Math.floor(Math.random() * 9) + 1;
            document.getElementById("carrozza").innerHTML = carrozza; 
            //restituisco un numero casuale di codice cp
            const codiceCP = Math.floor(Math.random() * 90000) + 1;
            document.getElementById("codiceCP").innerHTML = codiceCP; 
        }else if(etaPass == "minorenne"){
            //creo una costante per lo sconto se é minorenne
            const scontoOver = costoBiglietto * 0.20;
            //debug sconto
            console.log(scontoOver, typeof scontoOver, "totale sconto da applicare");
            //applico lo sconto al costo del biglietto
            costoBiglietto = costoBiglietto - scontoOver;
            //debug costoBiglietto
            console.log(costoBiglietto, typeof costoBiglietto, "prezzo del biglietto dopo aver applicato lo sconto");
            //restituisco il nome e cognome nel biglietto
            document.getElementById("nomeBiglietto").innerHTML = nomeCognome;
            //restituisco l'offerta nel biglietto
            document.getElementById("offertaBiglietto").innerHTML = "Offerta Minorenne";
            //restituisco il costo nel biglietto
            document.getElementById("costoBiglietto").innerHTML = costoBiglietto.toFixed(2);
            //restituisco un numero casuale di carrozza
            const carrozza = Math.floor(Math.random() * 9) + 1;
            document.getElementById("carrozza").innerHTML = carrozza; 
            //restituisco un numero casuale di codice cp
            const codiceCP = Math.floor(Math.random() * 90000) + 1;
            document.getElementById("codiceCP").innerHTML = codiceCP; 
        }else if(etaPass == "maggiorenne"){
            //non applico nessuno sconto e invio i dati
            //restituisco il nome e cognome nel biglietto
            document.getElementById("nomeBiglietto").innerHTML = nomeCognome;
            //restituisco l'offerta nel biglietto
            document.getElementById("offertaBiglietto").innerHTML = "Offerta Standard";
            //restituisco il costo nel biglietto
            document.getElementById("costoBiglietto").innerHTML = costoBiglietto.toFixed(2);
            //restituisco un numero casuale di carrozza
            const carrozza = Math.floor(Math.random() * 9) + 1;
            document.getElementById("carrozza").innerHTML = carrozza; 
            //restituisco un numero casuale di codice cp
            const codiceCP = Math.floor(Math.random() * 90000) + 1;
            document.getElementById("codiceCP").innerHTML = codiceCP; 
        }else if(etaPass == "nulla"){
            //invio un messaggio di errore e chiedo di inserire la fascia d'etá
            message = `
                <h5> La fascia d'etá da lei inserita non risulta conforme, probabilmente ha sbagliato a digitare, la preghiamo di cliccare sul tasto annulla e di inserire nuovamente i dati, grazie.
            `
            //restituisco il messaggio
            document.getElementById("messageMil2").innerHTML = message;
        }
    }else{
        //invio un messaggio di errore e chiedo di riscrivere i km
        message = `
            <h5> Il numero di km da lei inserito non risulta conforme, probabilmente ha sbagliato a digitare, la preghiamo di cliccare sul tasto annulla e di inserire nuovamente i dati, grazie.
        `
        //restituisco il messaggio
        document.getElementById("messageMil2").innerHTML = message;
    
    }
})


//bottone annulla per poter togliere i dati inseriti e ricominciare da capo
const annullaBtn = document.getElementById("annulla");
annullaBtn.addEventListener("click", function() {
    //svuoto il contenuto del nome e cognome
    const nomeCognome = document.getElementById("nomeCognome");
    nomeCognome.value = "";
    //svuoto il contenuto del numero dei km
    const numKm = document.getElementById("kmDaPercorrere");
    numKm.value = "";
    //svuto il contenuto della fascia d'etá
    const fasciaEta = document.getElementById("fasciaEta");
    fasciaEta.value = "";
    //svuoto il messaggio di errore
    const message = "";
    //restituisco il messaggio
    document.getElementById("messageMil2").innerHTML = message; 
    //svuoto il costo del biglietto
    const costoBiglietto = "";
    document.getElementById("costoBiglietto").innerHTML = costoBiglietto; 
    //svuoto l'offerta del biglietto
    const offertaBiglietto = "";
    document.getElementById("offertaBiglietto").innerHTML = offertaBiglietto; 
    //svuoto il nome sul biglietto
    const nomeBiglietto = "";
    //restituisco il messaggio
    document.getElementById("nomeBiglietto").innerHTML = nomeBiglietto; 
    //svuoto il numero della carrozza sul biglietto
    const carrozza = "";
    //restituisco il messaggio
    document.getElementById("carrozza").innerHTML = carrozza; 
    //svuoto il codice cp sul biglietto
    const codiceCP = "";
    //restituisco il messaggio
    document.getElementById("codiceCP").innerHTML = codiceCP; 
})
