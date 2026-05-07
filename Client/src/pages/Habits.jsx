import React, { useState, useCallback } from "react";

const styles = `
.habit-page {
  min-height: 100vh;
  padding: 24px;
  background: var(--bg-primary);
  color: var(--text-primary);
}

.habit-layout {
  width: 100%;
  max-width: 1500px;
  height: 92vh;
  margin: auto;
  display: flex;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid var(--border-color);
  background: var(--glass-bg);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow-lg);
}

.analytics-panel {
  width: 38%;
  overflow-y: auto;
  border-right: 1px solid var(--border-color);
}

.chat-panel {
  width: 62%;
  display: flex;
  flex-direction: column;
}

.panel-header {
  padding: 28px;
  border-bottom: 1px solid var(--border-color);
}

.panel-title {
  font-size: 2rem;
  font-weight: 700;
}

.panel-subtitle {
  color: var(--text-secondary);
  margin-top: 6px;
}

.analytics-content,
.chat-messages {
  padding: 24px;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.analytics-card {
  padding: 20px;
  border-radius: 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
}

.analytics-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.analytics-value {
  margin-top: 8px;
  font-size: 2rem;
  font-weight: 700;
}

.suggestion-box {
  padding: 16px;
  margin-top: 14px;
  border-radius: 18px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.message-row {
  display: flex;
}

.message-row.user {
  justify-content: flex-end;
}

.message-row.ai {
  justify-content: flex-start;
}

.message-bubble {
  max-width: 75%;
  padding: 18px 20px;
  border-radius: 24px;
}

.message-bubble.user {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
}

.message-bubble.ai {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
}

.chat-input-area {
  padding: 20px;
  display: flex;
  gap: 14px;
  border-top: 1px solid var(--border-color);
}

.chat-input {
  flex: 1;
  padding: 16px;
  border-radius: 18px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--text-primary);
  outline: none;
}

.chat-input:focus {
  border-color: var(--accent-primary);
}

.send-btn {
  padding: 16px 24px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 900px) {
  .habit-layout {
    flex-direction: column;
    height: auto;
  }

  .analytics-panel,
  .chat-panel {
    width: 100%;
  }
}
`;

const analytics = [
    { id: 1, title: "Completed", value: 97 },
    { id: 2, title: "Pending", value: 31 },
    { id: 3, title: "Score", value: "76%" },
    { id: 4, title: "Focus", value: "42h" },
];

const recommendations = [
    "Practice debugging challenges regularly.",
    "Break assignments into smaller goals.",
    "Keep a fixed revision session every night.",
];

export default function Habits() {
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            type: "ai",
            text: "Welcome back, Abraham. Your productivity score increased this week.",
        },
    ]);

    const sendMessage = useCallback(() => {
        if (!input.trim()) return;

        const userMessage = {
            id: Date.now(),
            type: "user",
            text: input,
        };

        const aiMessage = {
            id: Date.now() + 1,
            type: "ai",
            text: "AI Analysis: Consistency and focused work sessions will improve your productivity.",
        };

        setMessages((prev) => [...prev, userMessage, aiMessage]);
        setInput("");
    }, [input]);

    return (
        <div className="habit-page">
            <style>{styles}</style>

            <div className="habit-layout">
                {/* Analytics */}
                <div className="analytics-panel">
                    <div className="panel-header">
                        <h1 className="panel-title">AI Analytics</h1>
                        <p className="panel-subtitle">Productivity insights and habit tracking</p>
                    </div>

                    <div className="analytics-content">
                        <h2>Task Analytics</h2>

                        <div className="analytics-grid">
                            {analytics.map((item) => (
                                <AnalyticsCard key={item.id} item={item} />
                            ))}
                        </div>

                        <div style={{ marginTop: 32 }}>
                            <h2>Improvement Suggestions</h2>

                            {recommendations.map((text, i) => (
                                <div key={i} className="suggestion-box">
                                    • {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chat */}
                <div className="chat-panel">
                    <div className="panel-header">
                        <h1 className="panel-title">AI Chat Assistant</h1>
                        <p className="panel-subtitle">
                            Ask questions about your productivity and habits
                        </p>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message-row ${msg.type}`}>
                                <div className={`message-bubble ${msg.type}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="chat-input-area">
                        <input
                            className="chat-input"
                            value={input}
                            placeholder="Ask AI about your productivity..."
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />

                        <button className="send-btn" onClick={sendMessage}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AnalyticsCard({ item }) {
    return (
        <div className="analytics-card">
            <p className="analytics-label">{item.title}</p>
            <h2 className="analytics-value">{item.value}</h2>
        </div>
    );
}