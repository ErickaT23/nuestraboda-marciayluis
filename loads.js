const guests = [
  { id: "1", name: "Cesar López y Esposa", passes: 2 },
  { id: "2", name: "Josseline López", passes: 1 },
  { id: "3", name: "Pablo López", passes: 1 },
  { id: "4", name: "Nieves López", passes: 1 },
  { id: "5", name: "Mariel Martínez", passes: 1 },
  { id: "6", name: "Juan Daniel Martínez y Esposa", passes: 2 },
  { id: "7", name: "David Martínez", passes: 1 },
  { id: "8", name: "Marcela Martínez", passes: 1 },
  { id: "9", name: "Aracely Martínez", passes: 1 },
  { id: "10", name: "Maria Argentina Salguero", passes: 1 },
  { id: "11", name: "Kimberly Salguero", passes: 1 },
  { id: "12", name: "Maria del Carmen Martínez", passes: 1 },
  { id: "13", name: "Stiben Monteflores y Esposa", passes: 2 },
  { id: "14", name: "Noe González y Familia", passes: 3 },
  { id: "15", name: "Mynor Elvira y Esposa", passes: 2 },
  { id: "16", name: "Orfa Elvira", passes: 1 },
  { id: "17", name: "Gamaliel Elvira", passes: 1 },
  { id: "18", name: "Gerson Elvira", passes: 1 },
  { id: "19", name: "Susy Elvira", passes: 1 },
  { id: "20", name: "Gloria Ramírez Castañeda y Familia", passes: 3 },
  { id: "21", name: "Clarisa Elvira e Hijas", passes: 3 },
  { id: "22", name: "Ana Luisa Ávila y Familia", passes: 4 },
  { id: "23", name: "Maria Nieves Martínez", passes: 1 },
  { id: "24", name: "Raymundo Ramírez y Esposa", passes: 2 },
  { id: "25", name: "Paola Domínguez de Elvira e Hijas", passes: 3 },
  { id: "26", name: "Joel Ordóñez", passes: 1 },
  { id: "27", name: "Mario Yes", passes: 1 },
  { id: "28", name: "Bryan Yes", passes: 1 },
  { id: "29", name: "Josué Yes", passes: 1 },
  { id: "30", name: "Hanna Yes", passes: 1 },
  { id: "31", name: "Junior Tobar", passes: 1 },
  { id: "32", name: "Erick Zabaleta", passes: 1 },
  { id: "33", name: "Kevin García", passes: 1 },
  { id: "34", name: "Lizzie Arévalo", passes: 1 },
  { id: "35", name: "Sofía Cruz", passes: 1 },
  { id: "36", name: "Vanesa Castillo", passes: 1 },
  { id: "37", name: "Luis Juárez y Sra de Juárez", passes: 2 },
  { id: "38", name: "Hermanos Guevara", passes: 3 },
  { id: "39", name: "Emilio Aguilar y Esposa", passes: 2 },
  { id: "40", name: "Gustavo Cifuentes", passes: 1 },
  { id: "41", name: "Jeffry Contreras y Esposa", passes: 2 },
  { id: "42", name: "Ashley Martínez", passes: 1 },
  { id: "43", name: "Wanda Ramírez", passes: 1 },
  { id: "44", name: "Julia Chang", passes: 1 },
  { id: "45", name: "Otto Elías y Esposa", passes: 2 },
  { id: "46", name: "Otto Rubén Elías Pereira", passes: 1 },
  { id: "47", name: "Pablo Elías Pereira", passes: 1 },
  { id: "48", name: "Andrea Elías Pereira", passes: 1 },
  { id: "49", name: "Oswaldo Pereira Martínez", passes: 1 },
  { id: "50", name: "Farah Pereira y Pareja", passes: 2 },
  { id: "51", name: "Laura Dardón Pereira", passes: 1 },
  { id: "52", name: "Luis Fernando Dardón", passes: 1 },
  { id: "53", name: "Mirna Pereira y Esposo", passes: 2 },
  { id: "54", name: "Mariana Figueroa", passes: 1 },
  { id: "55", name: "Javier Figueroa", passes: 1 },
  { id: "56", name: "José Oswaldo Pereira y Esposa", passes: 2 },
  { id: "57", name: "Rubidia Pereira y Esposo", passes: 2 },
  { id: "58", name: "Maria José Velásquez e Hija", passes: 2 },
  { id: "59", name: "Maria Lidia Velásquez", passes: 1 },
  { id: "60", name: "Jose Luis Velásquez", passes: 1 },
  { id: "61", name: "Deny Elías y Esposa", passes: 2 },
  { id: "62", name: "Deny Elías Castellanos y Esposa", passes: 2 },
  { id: "63", name: "Melissa Elías", passes: 1 },
  { id: "64", name: "Rubén Elías y Esposa", passes: 2 },
  { id: "65", name: "Bruno Elías y Familia", passes: 2 },
  { id: "66", name: "Rubén Elías Turcios", passes: 1 },
  { id: "67", name: "Sonia Elías", passes: 1 },
  { id: "68", name: "Daniel Elías y Esposa", passes: 2 },
  { id: "69", name: "Minely Elías", passes: 1 },
  { id: "70", name: "Luz Herminia Vigil", passes: 1 },
  { id: "71", name: "Rafael Ordoñez y Esposa", passes: 2 },
  { id: "72", name: "Melany Zamora", passes: 1 },
  { id: "73", name: "Hugo Sarceño", passes: 1 },
  { id: "74", name: "Erick Juárez", passes: 1 },
  { id: "75", name: "Ivette Chinchilla", passes: 1 },
  { id: "76", name: "Emilia Sandoval", passes: 1 },
  { id: "77", name: "Karen Contreras", passes: 1 },
  { id: "78", name: "Rodrigo Escobar y Esposa", passes: 2 },
  { id: "79", name: "Pablo Leiva y Esposa", passes: 2 },
  { id: "80", name: "Erick Amaya y Esposa", passes: 2 },
  { id: "81", name: "Becker Monzón y Esposa", passes: 2 },
  { id: "82", name: "Daniel Folgar y Esposa", passes: 2 },
  { id: "83", name: "Esmeralda Romero", passes: 1 },
  { id: "84", name: "Elisa Orellana de Rosales", passes: 1 },
  { id: "85", name: "Moises González", passes: 1 },
  { id: "86", name: "Gonzalo González", passes: 1 },
  { id: "87", name: "Alex Lima", passes: 1 },
  { id: "88", name: "Asael Samayoa", passes: 1 },
  { id: "89", name: "Sahily Loaiza", passes: 1 },
  { id: "90", name: "Mirna Castillo y Esposo", passes: 2 },
  { id: "91", name: "Alicia Martínez", passes: 1 },
  { id: "92", name: "Katerine Arana", passes: 1 },
  { id: "93", name: "Victor Salguero", passes: 1 },
  { id: "94", name: "Gabriela Portillo", passes: 1 },
  { id: "95", name: "Ivette Vega", passes: 1 },
  { id: "96", name: "Abraham Aguilar y Esposa", passes: 2 },
  { id: "97", name: "Ximena Fuentes", passes: 1 },
  { id: "98", name: "René Hernández y Esposa", passes: 2 },
  { id: "99", name: "Astrid Gasparico", passes: 1 },
  { id: "100", name: "⁠Miguel Ríos y Esposa", passes: 2 },
  { id: "101", name: "Shuenfeld López", passes: 1},
  { id: "102", name: "⁠Julissa y David Florian", passes: 2},
  { id: "103", name: "Alan Elías y Esposa", passes: 2},
  { id: "104", name: "Fredy Burgos y Esposa", passes: 2},
  { id: "105", name: "Juan Monterroso ", passes: 1},
  { id: "106", name: "Manuel Ordoñez", passes: 1},
  { id: "107", name: "Lourdes Valladares ", passes: 1},
  { id: "108", name: "Ivonne Gómez", passes: 1},
  { id: "109", name: "Leticia Fajardo", passes: 1},
  { id: "110", name: "Karla Chinchilla ", passes: 1},
  { id: "111", name: "Gimena López", passes: 1},
  { id: "112", name: "Yanci Ramírez", passes: 1},
  { id: "113", name: "Melany Asencio", passes: 1}

];


document.addEventListener("DOMContentLoaded", function() {
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, " "));
    }
    return params;
  }

  const queryParams = getQueryParams();
  const guestId = queryParams.id;
  const guest = guests.find(g => g.id === guestId);
  const confirmButton = document.getElementById("confirm-button");

  if (guest) {
    // Detección aproximada de género por nombre
    const nameLower = guest.name.toLowerCase();
    const likelyFemale =
      nameLower.includes("maria") ||
      nameLower.includes("ana") ||
      nameLower.includes("ella") ||
      nameLower.includes("josseline") ||
      nameLower.includes("marcela") ||
      nameLower.includes("aracely") ||
      nameLower.includes("susy") ||
      nameLower.includes("gloria") ||
      nameLower.includes("clarisa") ||
      nameLower.includes("paola") ||
      nameLower.includes("ivette") ||
      nameLower.includes("emilia") ||
      nameLower.includes("karen") ||
      nameLower.includes("melany") ||
      nameLower.includes("alicia") ||
      nameLower.includes("sofia") ||
      nameLower.includes("vanesa") ||
      nameLower.includes("ashley") ||
      nameLower.includes("mirna") ||
      nameLower.includes("elisa") ||
      nameLower.includes("esmeralda") ||
      nameLower.includes("minely") ||
      nameLower.includes("luz") ||
      nameLower.includes("sonia") ||
      nameLower.includes("sahily") ||
      nameLower.includes("Julia") ||
      nameLower.includes("gabriela") ||
      nameLower.includes("ivette") ||
      nameLower.includes("ximena") ||
      nameLower.includes("astrid") ||
      nameLower.includes("karla") ||
      nameLower.includes("lourdes") ||
      nameLower.includes("ivonne") ||
      nameLower.includes("leticia") ||
      nameLower.includes("gimena") ||
      nameLower.includes("yanci") ||
      nameLower.includes("melany") ||
      nameLower.includes("katerine");

    // Texto dinámico según género y cantidad de pases
    const invitacionTexto =
      guest.passes > 1
        ? "están invitados"
        : likelyFemale
        ? "estás invitada"
        : "estás invitado";

    // Mostrar datos
    document.getElementById("guest-name").textContent = `¡${guest.name}, ${invitacionTexto}!`;
    document.getElementById("passes").textContent = `${guest.passes} ${guest.passes === 1 ? "pase" : "pases"}`;

    // Construir link dinámico del Google Form
    const baseFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfPPRxK8SrwJycR4DCh9LJgQLGa9OX8vX3uA1xm7f0AAJM2lg/viewform?usp=pp_url";
    const formUrl = `${baseFormUrl}&entry.42292443=${encodeURIComponent(guest.name)}&entry.800985369=${guest.passes}`;

    confirmButton.addEventListener("click", function() {
      window.open(formUrl, "_blank");
    });
  } else {
    document.getElementById("guest-name").textContent = `¡Invitado no encontrado!`;
    document.querySelector(".invitation-info-section").style.display = "none";
    confirmButton.style.display = "none";
  }
});