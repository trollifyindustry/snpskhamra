/* ================================
   GLOBAL SERVER ERROR CONTROLLER
   Author: Prem Janghela
================================ */

(function () {

  // 🔴 ON / OFF CONTROL
  const SERVER_ERROR_ENABLED = true; 
  // true  = page lock
  // false = normal page

  if (!SERVER_ERROR_ENABLED) return;

  // Disable scroll
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "serverErrorOverlay";

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = "999999";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";

  // Popup box
  const box = document.createElement("div");
  box.style.background = "#0f0f0f";
  box.style.color = "#fff";
  box.style.padding = "30px 40px";
  box.style.borderRadius = "12px";
  box.style.textAlign = "center";
  box.style.maxWidth = "350px";
  box.style.width = "90%";
  box.style.boxShadow = "0 0 30px rgba(255,0,0,0.4)";
  box.style.fontFamily = "Arial, sans-serif";

  box.innerHTML = `
    <h2 style="color:#ff4d4d;margin-bottom:10px;">⚠ Server Error</h2>
    <p style="font-size:14px;opacity:0.9;">
      Please contact your developer
    </p>
  `;

  overlay.appendChild(box);
  document.body.appendChild(overlay);

})();
