## En lista med Postman-kommandon

| Syntax | Beskrivning |
| --- | --- |
| .to.be.a('string') | Kontrollerar att ett värde är en sträng. |
|.to.be.an('object') |	Bekräftar att ett värde är ett objekt. |
| .to.be.a('number') |	Verifierar att ett värde är ett nummer. |
| .to.be.an('array') | Kontrollerar att ett värde är en array.
| .to.equal(value) | Jämför värdet strikt med det angivna värdet.
| .to.deep.equal(value) | Används för djup jämförelse av objekt eller arrays.
| .to.not.equal(value) | Verifierar att ett värde inte är lika med det angivna värdet.
| .to.have.property('name') | Kontrollerar att ett objekt har en specifik egenskap.
| .to.have.property('name', value) | Verifierar att ett objekt har en specifik egenskap med ett visst värde.
| .to.have.any.keys('key1', 'key2') | Kontrollerar att objektet har någon av de angivna nycklarna.
| .to.have.all.keys('key1', 'key2') | Verifierar att ett objekt har alla de angivna nycklarna. |
| .to.contain(value) | Kontrollerar om en array eller sträng innehåller ett specifikt värde. |
| .to.match(/regex/) | Används för att matcha ett värde mot ett reguljärt uttryck. |
| .to.be.true | Kontrollerar att ett uttryck är sant. |
| .to.be.false | Kontrollerar att ett uttryck är falskt. |
| .to.be.null | Verifierar att ett värde är null. |
| .to.be.undefined | Kontrollerar att ett värde är undefined. |
| .to.exist | Verifierar att ett värde existerar (inte null eller undefined). |
| .to.have.lengthOf(value) | Kontrollerar längden på en array eller sträng. |
| .to.have.members([value1, value2]) | Verifierar att en array innehåller exakt de angivna medlemmarna. |
| .to.include.members([value1, value2]) | Kontrollerar att en array inkluderar alla angivna medlemmar. |