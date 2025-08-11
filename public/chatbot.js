let ngenData = null;

async function fetchNgenData() {
  try {
    const response = await fetch("https://ngen-chatbot-data.s3.us-west-2.amazonaws.com/ngen-info.json");
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
        content: `You are an assistant for the NextGen In A Box (NGIAB) project.
    
    Rules:
    1. Answer only with concise, accurate information strictly based on the loaded JSON below.
    2. If you include links, always return them as HTML anchor tags (e.g., <a href="URL">link text</a>) — never plain URLs.
    3. If the user greets you (e.g., "hi", "hello", "hey", "good morning"), respond with a short, friendly greeting such as:
    "Hello! How can I help you with NGIAB today?"
    4. If the user asks something unrelated to the loaded dataset, respond exactly with:
    "Sorry, I cant Answer that as i am not trained for that"
    
    Dataset:
    ${JSON.stringify(ngenData, null, 2)}`
      },
      {
        role: "user",
        content: msgText
      }
    ];

    chatInput.value = '';

    fetch("https://rfh4nztbkj.execute-api.us-west-2.amazonaws.com/chat", {
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
v
