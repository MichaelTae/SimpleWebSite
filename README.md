Commits:
Commits ska vara små för att öka läslighet. 
Bara det som tillhör en commit ska läggas in i samma commit.  

Git-flow:
Merga endast in nya features i Dev branchen. 
Alla nya features ska använda dev som default/base. 
Merga bara in i Main vid release/när projektet börjar bli klart. 
Varje ny Feature ska ha sin egna branch. 


Varje branch ska ha vad det är för typ av branch som prefix, följt av bindestreck - samt att mellanslag ska bytas ut mot bindestreck i namnet
exempelvis kan det se ut så här: 
feature-add-footer
hotfix-console-logs-not-removed
bugfix-wrong-font-on-button

feature prefixet ska bara användas när det är något nytt som skapas och ska pushas. Exempelvis en footer
hotfix prefixet ska bara användas när det är en bugg/fel i main som måste åtgärdas direkt.
bugfix prefixet används på samma sätt som hotfix dock så används den när felet bara ligger i dev och inte existerar på main. 

Pullrequests:
Vi ska ha minst en codereview vid PR innan merge.
