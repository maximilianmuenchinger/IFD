window.addEventListener("load", function eins() {

    

    var artyom = new Artyom();
    let artyom2 = new Artyom();
    let artyom3 = new Artyom();
    let artyom4 = new Artyom();
    
  artyom.say("",{
     onStart:function(){
        console.log("The text is being read");
        }
   });


    artyom.addCommands({
        
        
        indexes: ["Starten","Ja","Nein","zurück","weiter"],
        //smart: true,
        action: function (i) {
            if(i == 0){

                document.getElementById(1)?.setAttribute("style", "display: flex");
                    document.getElementById(2)?.setAttribute("style", "display: none");
                    document.getElementById(3)?.setAttribute("style", "display: none");
                    document.getElementById(4)?.setAttribute("style", "display: none");  


            artyom.say("Die Anwendung wird ausgeführt");
            artyom.say("Der Titel der Anwendung ist. Die Nutzung von Elektroautos in Deutschland ");
            artyom.say("Die Anwendung zeigt auf, bei welchen Personen Elektroautos sich schon gut verkaufen,was Gründe für einen Kauf sein können und bei welchen Personen ein Elektroauto noch keine Alternative ist.");



           artyom.say("Möchtest du eine kurze Einführung in die Navigation mit dem Sprachassistent?");
           startContinuousArtyom();
            }
            if(i == 1){

                document.getElementById(1)?.setAttribute("style", "display: flex");
                document.getElementById(2)?.setAttribute("style", "display: none");
                document.getElementById(3)?.setAttribute("style", "display: none");
                document.getElementById(4)?.setAttribute("style", "display: none");  

                artyom.dontObey();
                artyom.say("Folgende Befehle kannst du benutzen um in der Anwendung zu Navigieren");
                artyom.say("Sage weiter um zum nächsten Punkt zu kommen");
                artyom.say("Sage zurück um den letzten Punkt zu wiederholen");
                artyom.say("Die Anwendung wird dich fragen, ob du die abgebildeten Information, auch auditiv beschrieben haben willst");
                artyom.say("Bist du bereit? Dann sage weiter");
                artyom.say("Falls du die Einführung nochmal hören willst sage zurück");


                        setTimeout(function(){
                            artyom.obey();
               
                startContinuousArtyom();
            }, 26000);
               
                }
                if(i == 2){

                    document.getElementById(1)?.setAttribute("style", "display: flex");
                    document.getElementById(2)?.setAttribute("style", "display: none");
                    document.getElementById(3)?.setAttribute("style", "display: none");
                    document.getElementById(4)?.setAttribute("style", "display: none");

                    artyom2.dontObey();
                    artyom.say("Kategorie 1 wird gestartet");
                    artyom.say("In der ersten Kategorie wird dargestellt welche Personen ein Elektroauto besitzen");
                    artyom.say("Falls du mehr Informationen zu dieser Kategorie möchtest sage. Starten");
                    artyom.say("Falls du diese Kategorie überspringen möchtest sage. überspringen");
                    setTimeout(function(){
                        artyom2.obey();
           
            startContinuousArtyom2();
        }, 20000);
                   ;
                    }
                    if(i == 3){
                       
                    artyom.say("Möchtest du eine kurze Einführung?");
                        
                    document.getElementById(1)?.setAttribute("style", "display: flex");
                    document.getElementById(2)?.setAttribute("style", "display: none");
                    document.getElementById(3)?.setAttribute("style", "display: none");
                    document.getElementById(4)?.setAttribute("style", "display: none");  
                        
                        
                        
                       
                        }
                        if(i == 4){

                            document.getElementById(1)?.setAttribute("style", "display: flex");
                    document.getElementById(2)?.setAttribute("style", "display: none");
                    document.getElementById(3)?.setAttribute("style", "display: none");
                    document.getElementById(4)?.setAttribute("style", "display: none");


                            artyom2.dontObey();
                            artyom.say("Kategorie 1 wird gestartet");
                            artyom.say("In der ersten Kategorie wird dargestellt welche Personen ein Elektroauto besitzen");
                            artyom.say("Falls du mehr Informationen zu dieser Kategorie möchtest sage. Starten");
                            artyom.say("Falls du diese Kategorie überspringen möchtest sage. überspringen");

                            setTimeout(function(){
                                artyom2.obey();
                   
                    startContinuousArtyom2();
                }, 20000);
                            
                           ;
                            }
        },

        
    
    });

    



//2

    artyom2.addCommands({
        indexes: ["Starten","Ja","Nein","überspringen","weiter", "zurück"],
       
        action: function (i) {
            if(i == 0){

                document.getElementById(1)?.setAttribute("style", "display: none");
                document.getElementById(2)?.setAttribute("style", "display: flex");
                document.getElementById(3)?.setAttribute("style", "display: none");
                document.getElementById(4)?.setAttribute("style", "display: none");


            artyom.say("Möchtest du, dass ich die Inhalte auf dem Bildschirm beschreibe?");
           
           startContinuousArtyom2();
            }

            if(i == 1){
                artyom.say("Auf dem Bildschirm sind drei Kreisdiagramme abgebildet.");
                artyom.say("")
                artyom.say("Das erste Diagramm zeigt, dass 75 Prozent der Personen, die ein Elektroauto besitzen, ein überdurchschnittliches Einkommen erhalten.");
                artyom.say("")
                artyom.say("Das zweite Diagramm zeigt, dass 69 Prozent der Personen, die ein Elektroauto besitzen, unterdurchschnittlich alt sind .");
                artyom.say("")
                artyom.say("Das dritte Diagramm zeigt, dass 61 Prozent der Personen, die ein Elektroauto besitzen, in einer ländlichen Region wohnen.");

               startContinuousArtyom2();
                }
            
                
                if(i == 2){
                    startContinuousArtyom2();
                }
                
                
                if(i == 3){

                    document.getElementById(1)?.setAttribute("style", "display: none");
                    document.getElementById(2)?.setAttribute("style", "display: flex");
                    document.getElementById(3)?.setAttribute("style", "display: none");
                    document.getElementById(4)?.setAttribute("style", "display: none");

                    artyom3.dontObey();
                    artyom.say("Kategorie 2 wird gestartet");
                    artyom.say("In der zweiten Kategorie wird dargestellt welche vor und Nachteile ein Elektroauto mitsich bringt");
                    artyom.say("Falls du mehr Informationen zu dieser Kategorie möchtest sage. Starten");
                    artyom.say("Falls du diese Kategorie überspringen möchtest sage. überspringen");
                    setTimeout(function(){
                        artyom3.obey();
           
            startContinuousArtyom3();
        }, 20000);
                   
                    }

                    if(i == 4){

                        document.getElementById(1)?.setAttribute("style", "display: none");
                    document.getElementById(2)?.setAttribute("style", "display: flex");
                    document.getElementById(3)?.setAttribute("style", "display: none");
                    document.getElementById(4)?.setAttribute("style", "display: none");

                        artyom3.dontObey();
                        artyom.say("Kategorie 2 wird gestartet");
                        artyom.say("In der zweiten Kategorie wird dargestellt welche vor und Nachteile ein Elektroauto mitsich bringt");
                    artyom.say("Falls du mehr Informationen zu dieser Kategorie möchtest sage. Starten");
                    artyom.say("Falls du diese Kategorie überspringen möchtest sage. überspringen");

                    setTimeout(function(){
                        artyom3.obey();
           
            startContinuousArtyom3();
        }, 20000);
                       
                       
                        }

                        if(i == 5){

                            document.getElementById(1)?.setAttribute("style", "display: flex");
                    document.getElementById(2)?.setAttribute("style", "display: none");
                    document.getElementById(3)?.setAttribute("style", "display: none");
                    document.getElementById(4)?.setAttribute("style", "display: none");  

                            artyom.say("Die Anwendung wird ausgeführt");
                            artyom.say("Der Titel der Anwendung ist. Die Nutzung von Elektroautos in Deutschland ");    
                            artyom.say("Möchtest du eine kurze Einführung in die Navigation mit dem Sprachassistent?");
                            startContinuousArtyom();
                           
                            }

            
        }



    });








    //3


    artyom3.addCommands({
        indexes: ["Starten","Ja","Nein","überspringen","weiter", "zurück"],
       
        action: function (i) {
            if(i == 0){

                document.getElementById(1)?.setAttribute("style", "display: none");
                    document.getElementById(2)?.setAttribute("style", "display: none");
                    document.getElementById(3)?.setAttribute("style", "display: flex");
                    document.getElementById(4)?.setAttribute("style", "display: none");

            artyom.say("Möchtest du, dass ich die Inhalte auf dem Bildschirm beschreibe?");
           
           startContinuousArtyom3();
            }

            if(i == 1){
                artyom.say("Auf dem Bildschirm sind vor und Nachteile von Elektroautos zu sehen");
                artyom.say("Die Vorteile beinhalten. Umweldfreundlichkeit. Geringere Betriebskosten. Leiser.")
                artyom.say("");
                artyom.say("Die Nachteile beinhalten. Hohe Anschaffungskosten. Zu wenig Ladestationen. Reichweite zu gering")
                
                

               startContinuousArtyom3();
                }
            

                if(i == 2){ startContinuousArtyom3();}


                if(i == 3){

                    document.getElementById(1)?.setAttribute("style", "display: none");
                        document.getElementById(2)?.setAttribute("style", "display: none");
                        document.getElementById(3)?.setAttribute("style", "display: flex");
                        document.getElementById(4)?.setAttribute("style", "display: none");

                    artyom4.dontObey();
                    artyom.say("Kategorie 3 wird gestartet");
                    artyom.say("In der dritten Kategorie werden aktuellen Zahlen zu Elektroautos in Deutschland präsentiert.");
                    artyom.say("Falls du mehr Informationen zu dieser Kategorie möchtest sage. Starten");
                    setTimeout(function(){
                        artyom4.obey();
           
            startContinuousArtyom4();
        }, 15000);
                    
                   
                    }

                    if(i == 4){
                        document.getElementById(1)?.setAttribute("style", "display: none");
                        document.getElementById(2)?.setAttribute("style", "display: none");
                        document.getElementById(3)?.setAttribute("style", "display: flex");
                        document.getElementById(4)?.setAttribute("style", "display: none");

                        artyom4.dontObey();
                        artyom.say("Kategorie 3 wird gestartet");
                        artyom.say("In der dritten Kategorie werden aktuellen Zahlen zu Elektroautos in Deutschland präsentiert.");
                        artyom.say("Falls du mehr Informationen zu dieser Kategorie möchtest sage. Starten");
                        setTimeout(function(){
                            artyom4.obey();
               
                startContinuousArtyom4();
            }, 15000);
                       
                        }

                        if(i == 5){
                            document.getElementById(1)?.setAttribute("style", "display: none");
                        document.getElementById(2)?.setAttribute("style", "display: flex");
                        document.getElementById(3)?.setAttribute("style", "display: none");
                        document.getElementById(4)?.setAttribute("style", "display: none");

                            artyom2.dontObey();
                            artyom.say("Kategorie 1 wird gestartet");
                            artyom.say("In der ersten Kategorie wird dargestellt welche Personen ein Elektroauto besitzen");
                            artyom.say("Falls du mehr Informationen zu dieser Kategorie möchtest sage. Starten");
                            artyom.say("Falls du diese Kategorie überspringen möchtest sage. überspringen");
                        

                            setTimeout(function(){
                                artyom2.obey();
                   
                    startContinuousArtyom2();
                }, 20000);
                           
                            }

            
        }



    });






     //4


     artyom4.addCommands({
        indexes: ["Starten","Ja","Nein","überspringen","weiter", "zurück"],
       
        action: function (i) {
            if(i == 0){
                document.getElementById(1)?.setAttribute("style", "display: none");
                        document.getElementById(2)?.setAttribute("style", "display: none");
                        document.getElementById(3)?.setAttribute("style", "display: none");
                        document.getElementById(4)?.setAttribute("style", "display: flex");

            artyom.say("Möchtest du, dass ich die Inhalte auf dem Bildschirm beschreibe?");
           
           startContinuousArtyom4();
            }

            if(i == 1){
                artyom.say("Auf dem Bildschirm sind drei Balken Diagramme zu sehen");
                artyom.say("");
                artyom.say("Das erste Diagramm zeigt die Anzahl an Elektroautos in Deutschland im Jahr 2021. Sie beträgt 439 Tausend");
                artyom.say("");
                artyom.say("Das zweite Diagramm zeigt den Verlauf der Neuzulassungen von 2018 bis 2021. Im Jahr 2018 wurden 36 Tausend Elektroautos zugelassen und im Jahr 2021 wurden 267 Tausend Elektroautos zugelassen. Ab 2019 ist ein starker Anstieg der Zulassungen zu erkennen.");
                artyom.say("");
                artyom.say("Das dritte Diagramm zeigt die Anzahl der Ladepunkte in Deutschland im Jahr 2021. Die Anzahl liegt bei 39538.");
                

               startContinuousArtyom4();
                }
            
                
                if(i == 2){ startContinuousArtyom4();}


                    

                        if(i == 5){
                            document.getElementById(1)?.setAttribute("style", "display: none");
                        document.getElementById(2)?.setAttribute("style", "display: none");
                        document.getElementById(3)?.setAttribute("style", "display: flex");
                        document.getElementById(4)?.setAttribute("style", "display: none");

                            artyom3.dontObey();
                            artyom.say("Kategorie 2 wird gestartet");
                            artyom.say("In der zweiten Kategorie wird dargestellt welche vor und Nachteile ein Elektroauto mitsich bringt");
                            artyom.say("Falls du mehr Informationen zu dieser Kategorie möchtest sage. Starten");
                            artyom.say("Falls du diese Kategorie überspringen möchtest sage. überspringen");
                           
                            setTimeout(function(){
                                artyom3.obey();
                   
                    startContinuousArtyom3();
                }, 20000);
                           
                            }

            
        }



    });


    


    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: false,
                listen: true,
                interimResults: true,
                debug: true
                
            }).then(function () {
                
                console.log("ReadyEinsZwei!");
                
                
                
            });
        }, 250);
    }
    startContinuousArtyom();



    function startContinuousArtyom2() {
        artyom2.fatality();
        setTimeout(function () {
            artyom2.initialize({
                lang: "de-DE",
                continuous: false,
                listen: true,
                interimResults: true,
                debug: true
                
            }).then(function () {
                
                console.log("ReadyEinsZwei!");
                
                
                
            });
        }, 250);
    }
    


    function startContinuousArtyom3() {
        artyom3.fatality();
        setTimeout(function () {
            artyom3.initialize({
                lang: "de-DE",
                continuous: false,
                listen: true,
                interimResults: true,
                debug: true
                
            }).then(function () {
                
                console.log("ReadyEinsZwei!");
                
                
                
            });
        }, 250);
    }
    
    function startContinuousArtyom4() {
        artyom4.fatality();
        setTimeout(function () {
            artyom4.initialize({
                lang: "de-DE",
                continuous: false,
                listen: true,
                interimResults: true,
                debug: true
                
            }).then(function () {
                
                console.log("ReadyEinsZwei!");
                
                
                
            });
        }, 250);
    }
   
    



    

    
   
    


});
//# sourceMappingURL=playgroud-artyom-script.js.map