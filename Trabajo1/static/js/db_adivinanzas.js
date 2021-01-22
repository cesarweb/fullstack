
let adivinanzas= `De rojo me cubro sin ser amapola, mi abuela y el lobo completan la historia.

Respuesta: Caperucita roja.

Calzado con unas botas, un gato muy avispado, dijo unas cuantas mentiras para ayudar a su amo.

Respuesta: el Gato con botas.

Me pinché con una rueca y cien años me dormí, hasta que un beso del príncipe hizo que volviese en mí.

Respuesta: La Bella Durmiente.

Cama, camota y camita; plato, platito y platote; aunque soy solo una niña, me dieron un buen sustote.

Respuesta: Ricitos de Oro.

Duerme bien en su cunita y, a veces, es un llorón, pero también me sonríe mientras toma el biberón.

Respuesta: un bebé.

De tus tíos es la hermana, y de tus abuelos hija, y quizá tú no lo sabes, pero es quién más a ti te quiere.

Respuesta: tu madre.

¿Cuál es la criatura que en la mañana camina en cuatro patas, al medio día en dos y en la noche en tres?

Respuesta: el hombre.

Todas las palabras sé, y aunque todas las explique nunca las pronunciaré.

Respuesta: el diccionario.

Soy redonda y no tengo pies. ¡Y cuánto me cuesta dejar de rodar!

Respuesta: la pelota.

Una dama blanca por un campo negro anda que te anda… y el campo en su andar se llena de blancas pisadas.

Respuesta: la tiza y la pizarra.

Es lisa como una tabla, es negra, como el carbón, pero se llena de blanco para darnos la lección.

Respuesta: la pizarra, ¡otra vez!

Aunque se saca a la mesa, no es de comer ni beber, pero se corta y se sirve. ¿Sabes decirme qué es?

Respuesta: una baraja de cartas.

Con solo tres colores ordeno a cada uno. Si todos me respetan, no habrá accidente alguno.

Respuesta: el semáforo.

Soy igualada, pero respetuosa, imparcial señorita que vive en la llanura.

Respuesta: la igualdad.

La señora Cardinal, en derecho y equidad, a razón y verdad, paga a cada cual.

Respuesta: la justicia.

Soy una dama con mucha gracia, señor Cortés si ha demostrado delicadeza, educación y respeto, diga quién soy señor Cortés y compañía.

Respuesta: la cortesía.

Soy un caballero desinteresado, siempre ayudo al prójimo, amor sin distinción reparto, a todos doy y para todos tengo.

Respuesta: el altruismo.

Vivo como pienso, y tú lo verás, si mi conducta así observas, la razón me darás.

Respuesta: la honestidad.

Es fácil detectar en la vida de alguien capaz, y siempre por su sentido del deber lo harás.

Respuesta: la responsabilidad.

Sumo y multiplico el esfuerzo, el fin común persigo; solo existo en la unión, y nunca en la división.

Respuesta: la cooperación.

Con blancas o grises plumas, soy símbolo de la paz, y desde tiempos antiguos, soy mensajera eficaz.

Respuesta: la paloma.

Soy el lazo más unido y el eslabón más potente, mi lenguaje es el afecto y hago más noble a la gente.

Respuesta: la amistad.

A ver si sabe acertar alguno de los presentes, en la calle de la “A”, yo me encontré con la “M” y me dijo que la “O” era amiga de la “R”. ¿Quién soy?

Respuesta: el amor.

Nadie lo ve, todos lo necesitan, pero muchos lo sienten y pocos lo conocen. ¿Qué es?

Respuesta: el respeto.`;


function aleatorio(a,b) {
         return Math.round(Math.random()*(b-a)+parseInt(a));
         }

function genAdivinanza() {
	const regexp = /(.*)\n\nRespuesta:\s(.*)./mg;
		var listOfAdivinanzas = [];
		var listOfPR = [];
		let match = regexp.exec(adivinanzas);
		do {
			listOfPR.push(match[1]);
			listOfPR.push(match[2]);
			listOfAdivinanzas.push(listOfPR);
			listOfPR = [];
		} while((match = regexp.exec(adivinanzas)) !== null);
		return listOfAdivinanzas[aleatorio(1, listOfAdivinanzas.length)];
	};


function getPregunta(adivinanza) {
	return adivinanza[0];
}

function getRespuesta(adivinanza) {
	return adivinanza[1];
}

function getPista(adivinanza, intento) {
	var pista = "";
	var res = getRespuesta(adivinanza);
	if (intento == 3)
		pista = convertirA_(res);
	else if (intento == 4)
		pista = ultimaPista(convertirA_(res) , res);
	return pista;
}

function convertirA_(respuesta) {
	const regex = /[A-Za-z]/gi;
	return respuesta.replace(regex, '_');
}

function ultimaPista(pista, respuesta){
	var res = pista.split(" ");
	var resO = respuesta.split(" ");
	for (var i = res.length - 1; i >= 0; i--) {
		res[i] = resO[i][0] + res[i].substring(1);;
		console.log(res[i][0] + " - " + resO[i][0]);
		console.log(res + " - " + resO);
	}
	console.log(res);
	return res.join(" ");
}