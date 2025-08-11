let ngenData = null;

async function fetchNgenData() {
  try {
    const response = await fetch("https://ngen-chatbot-data-ua.s3.us-west-2.amazonaws.com/ngen-info.json.json");
 // Local file in the same directory
    if (!response.ok) throw new Error("Network response was not ok");
    ngenData = await response.json();
  } catch (error) {
    console.error("Failed to load NGEN data:", error);
    ngenData = null;
  }
}



window.addEventListener("DOMContentLoaded", async () => {
  const toggle = document.getElementById("chat-toggle");
  const widget = document.getElementById("chat-widget");
  const close = document.getElementById("chat-close");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");

  if (toggle) toggle.style.display = "block";
  if (widget) widget.style.display = "none";

  if (toggle && widget) {
    toggle.addEventListener("click", () => {
      widget.style.display = "flex";
      toggle.style.display = "none";
    });
  }

  if (close && toggle && widget) {
    close.addEventListener("click", () => {
      widget.style.display = "none";
      toggle.style.display = "block";
    });
  }

  await fetchNgenData(); // Fetch data from S3 before interaction

  function sendMessage(msgText) {
    if (!msgText) return;
    chatBody.innerHTML += `<div class="user-msg"><strong>You:</strong> ${msgText}</div>`;

    if (!ngenData) {
      chatBody.innerHTML += `<div class="bot-msg" style="color:red;"> Error: Could not load NGEN data.</div>`;
      return;
    }


    const messages = [
      {
        role: "system",
        content: `You are a helpful assistant for the NextGen In A Box (NGIAB) project, designed to provide information to users of all ages.

    Your guidelines:
    - Answer concisely and accurately using only information from this data: ${JSON.stringify(ngenData, null, 2)}
    - For URLs, format them as clickable HTML links: <a href="URL" target="_blank" style="text-decoration: underline;">descriptive text</a>
    - For questions outside the provided data scope, respond: "I can only help with NGIAB-related questions based on my available data. Is there something specific about the NextGen In A Box project I can help you with?"
    - Use age-appropriate, clear language suitable for all users including those under 18
    - Be welcoming and helpful while staying focused on NGIAB topics`
      },
      {
        role: "user", 
        content: msgText
      }
    ];


    chatInput.value = '';

    fetch("https://3yo38opf42.execute-api.us-west-2.amazonaws.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages })
    })
      .then(res => res.json())
      .then(data => {
        chatBody.innerHTML += `<div class="bot-msg"><strong>Bot:</strong> ${data.reply}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
      })
      .catch(() => {
        chatBody.innerHTML += `<div class="bot-msg" style="color:red;">Failed to fetch response.</div>`;
      });
  }

  if (chatInput) {
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && chatInput.value.trim()) {
        sendMessage(chatInput.value.trim());
      }
    });
  }
});
