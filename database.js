// Importar Firebase y Realtime Database
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfkC9f1yaTH2PN7Bik2Ep6pJglYm07xgY",
  authDomain: "marcia-y-luis.firebaseapp.com",
  projectId: "marcia-y-luis",
  storageBucket: "marcia-y-luis.firebasestorage.app",
  messagingSenderId: "923846631262",
  appId: "1:923846631262:web:b0d10a812fd767417d39cf",
  measurementId: "G-QBL8DV8CH3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log("✅ Firebase conectado correctamente!");

// Enviar buen deseo
window.submitWish = function () {
  const nameInput = document.getElementById("wish-name");
  const msgInput  = document.getElementById("wish-message");
  const name = nameInput.value.trim();
  const message = msgInput.value.trim();

  if (name !== "" && message !== "") {
    // (Opcional) deshabilitar botón momentáneamente para evitar dobles envíos
    const sendBtn = document.querySelector('#wish-form button[onclick="submitWish()"]');
    if (sendBtn) sendBtn.disabled = true;

    push(ref(db, "buenos-deseos/"), {
      nombre: name,
      mensaje: message,
      timestamp: new Date().toISOString()
    })
    .then(() => {
      console.log("✔️ Deseo guardado correctamente en Firebase");
      // limpiar
      nameInput.value = "";
      msgInput.value = "";
      alert("¡Tu buen deseo ha sido enviado! 🌟");

      // ocultar formulario
      const form = document.getElementById("wish-form");
      form.classList.add("hidden");

      // restaurar texto del botón principal (opcional)
      const toggleBtn = document.querySelector('.wishes-section button[onclick="toggleWishForm()"]');
      if (toggleBtn) toggleBtn.textContent = "ENVIAR BUENOS DESEOS";

      // (Opcional) asegurar que la lista de deseos esté visible para ver el nuevo mensaje
      const wishesDiv = document.getElementById("wishes");
      if (wishesDiv.classList.contains("hidden")) wishesDiv.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("❌ Error al guardar el deseo:", error);
      alert("Ocurrió un problema al enviar tu deseo. Inténtalo nuevamente.");
    })
    .finally(() => {
      if (sendBtn) sendBtn.disabled = false;
    });
  } else {
    alert("Por favor, completa ambos campos antes de enviar.");
  }
};

// Cargar y mostrar buenos deseos en vivo
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

// Exponer toggle (si también lo manejas aquí)
// --- Elimina o comenta este bloque en database.js ---
// window.toggleWishForm = function () {
//   const form = document.getElementById("wish-form");
//   const btn = document.querySelector('.wishes-section button[onclick="toggleWishForm()"]');
//   const isHidden = form.classList.toggle("hidden");
//   if (btn) btn.textContent = isHidden ? "ENVIAR BUENOS DESEOS" : "OCULTAR FORMULARIO";
// };


