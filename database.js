// Importar Firebase y Realtime Database
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// ✅ Configuración completa y corregida
const firebaseConfig = {
  apiKey: "AIzaSyAqOZQ5YFOdhL6dblHI5wIx10m6n4xt2Fg",
  authDomain: "buenosdeseos-twodesign.firebaseapp.com",
  databaseURL: "https://buenosdeseos-twodesign-default-rtdb.firebaseio.com",
  projectId: "buenosdeseos-twodesign",
  storageBucket: "buenosdeseos-twodesign.appspot.com", // ✅ corregido aquí
  messagingSenderId: "577908051871",
  appId: "1:577908051871:web:27fbd4e06b3d18da14b7aa"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log("✅ Firebase conectado correctamente!");

// Función para enviar un buen deseo
window.submitWish = function () {
  const name = document.getElementById("wish-name").value.trim();
  const message = document.getElementById("wish-message").value.trim();

  if (name !== "" && message !== "") {
    push(ref(db, "buenos-deseos/"), {
      nombre: name,
      mensaje: message,
      timestamp: new Date().toISOString()
    })
    .then(() => {
      console.log("✔️ Deseo guardado correctamente en Firebase");
      document.getElementById("wish-name").value = "";
      document.getElementById("wish-message").value = "";
      alert("¡Tu buen deseo ha sido enviado! 🌟");
    })
    .catch((error) => {
      console.error("❌ Error al guardar el deseo:", error);
    });
  } else {
    alert("Por favor, completa ambos campos antes de enviar.");
  }
};

// Cargar y mostrar buenos deseos al abrir la página
window.addEventListener('DOMContentLoaded', () => {
  const wishesDiv = document.getElementById("wishes");
  const wishesRef = ref(db, "buenos-deseos/");

  onValue(wishesRef, (snapshot) => {
    wishesDiv.innerHTML = "";
    snapshot.forEach((childSnapshot) => {
      const wish = childSnapshot.val();
      const wishElement = document.createElement("p");
      wishElement.innerHTML = `<strong>${wish.nombre}:</strong> ${wish.mensaje}`;
      wishesDiv.appendChild(wishElement);
    });
  });
});

// Mostrar/ocultar el formulario
window.toggleWishForm = function () {
  document.getElementById("wish-form").classList.toggle("hidden");
};
