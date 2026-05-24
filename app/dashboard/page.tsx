"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [tokens, setTokens] = useState<any[]>([]);
  const [github_username, setGithubUsername] = useState("");
  const [token, setToken] = useState("");
  const [repoOwner, setRepoOwner] = useState("");
  const [repoName, setRepoName] = useState("");
  const [branch, setBranch] = useState("");
  const [showToken, setShowToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState<any[]>([]);
  const [scheduleLoading, setScheduleLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalLang, setModalLang] = useState<"c" | "python">("c");
  const [modalTitle, setModalTitle] = useState("");
  const [activeTab, setActiveTab] = useState<"schedule" | "tokens" | "help">(
    "schedule",
  );
  const [nextPush, setNextPush] = useState("");

  useEffect(() => {
    fetchTokens();
    fetchSchedule();

    // Calculate next 9:00 AM
    const updateCountdown = () => {
      const now = new Date();
      let target = new Date(now);
      target.setHours(9, 0, 0, 0);
      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const diff = target.getTime() - now.getTime();
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setNextPush(`${h}h ${m}m ${s}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchTokens = async () => {
    try {
      const res = await fetch("/api/tokens");
      const data = await res.json();
      if (Array.isArray(data)) setTokens(data);
    } catch (err) {
      console.error("Failed to fetch tokens", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSchedule = async () => {
    setScheduleLoading(true);
    try {
      const res = await fetch("/api/schedule");
      const data = await res.json();
      if (Array.isArray(data)) setSchedule(data);
    } catch (err) {
      console.error("Failed to fetch schedule", err);
    } finally {
      setScheduleLoading(false);
    }
  };

  const getNextScheduledDate = () => {
    const todayStr = new Date().toISOString().split("T")[0];
    const upcoming = schedule.filter((d) => d.date >= todayStr);
    if (upcoming.length > 0) {
      return upcoming[0].date;
    }
    return null;
  };
  const nextScheduledDate = getNextScheduledDate();

  const addToken = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/tokens", {
      method: "POST",
      body: JSON.stringify({
        github_username,
        token,
        repo_owner: repoOwner,
        repo_name: repoName,
        branch,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      setGithubUsername("");
      setToken("");
      fetchTokens();
    } else {
      alert("Failed to add token");
    }
  };

  const deleteToken = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    await fetch(`/api/tokens/${id}`, { method: "DELETE" });
    fetchTokens();
  };

  const triggerPush = async (tokenId: number) => {
    const res = await fetch("/api/tokens/push", {
      method: "POST",
      body: JSON.stringify({ tokenId }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      alert("Push triggered successfully!");
      fetchTokens();
    } else {
      const error = await res.json();
      alert("Failed to trigger push: " + (error.error || "Unknown error"));
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };

  const syncSolutions = async () => {
    const res = await fetch("/api/sync", { method: "POST" });
    if (res.ok) {
      alert("Solutions synced successfully!");
      fetchSchedule();
    } else {
      const error = await res.json();
      alert("Failed to sync solutions: " + (error.error || "Unknown error"));
    }
  };

  const viewSolution = async (
    date: string,
    qno: string,
    lang: "c" | "python",
  ) => {
    try {
      const res = await fetch("/api/solutions/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, qno, lang }),
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err.error || "Failed to load file");
        return;
      }
      const { content } = await res.json();
      setModalContent(content);
      setModalLang(lang);
      setModalTitle(`${qno} — ${date} (${lang})`);
      setModalOpen(true);
    } catch (err) {
      console.error(err);
      alert("Error fetching file");
    }
  };

  function escapeHtml(unsafe: string) {
    return unsafe.replace(/[&<>"'`]/g, function (c) {
      return (
        {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "`": "&#96;",
        } as any
      )[c];
    });
  }

  return (
    <div className="container">
      <div className="flex-header">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <h1>ishicodes Admin</h1>
          <span
            style={{
              fontSize: "0.9rem",
              color: "#64748b",
              background: "#f1f5f9",
              padding: "0.25rem 0.75rem",
              borderRadius: "16px",
            }}
          >
            Next auto-push in: <strong>{nextPush}</strong>
          </span>
        </div>
        <div className="flex-row-wrap">
          <button onClick={handleLogout} style={{ background: "#ef4444" }}>
            Logout
          </button>
          <button onClick={syncSolutions} style={{ background: "#6366f1" }}>
            Sync Solutions
          </button>
        </div>
      </div>

      <div className="tabs">
        <button
          onClick={() => setActiveTab("schedule")}
          style={{
            background: activeTab === "schedule" ? "#334155" : "transparent",
            color: activeTab === "schedule" ? "white" : "#475569",
          }}
        >
          Daily Schedule
        </button>
        <button
          onClick={() => setActiveTab("tokens")}
          style={{
            background: activeTab === "tokens" ? "#334155" : "transparent",
            color: activeTab === "tokens" ? "white" : "#475569",
          }}
        >
          Manage Tokens
        </button>
        <button
          onClick={() => setActiveTab("help")}
          style={{
            background: activeTab === "help" ? "#334155" : "transparent",
            color: activeTab === "help" ? "white" : "#475569",
          }}
        >
          Help / Setup Guide
        </button>
      </div>

      {activeTab === "tokens" && (
        <>
          <form
            onSubmit={addToken}
            style={{
              marginBottom: "2rem",
              padding: "1.5rem",
              background: "#f1f5f9",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Onboard New Token</h3>
            <input
              placeholder="GitHub Username"
              value={github_username}
              onChange={(e) => setGithubUsername(e.target.value)}
              required
            />
            <div className="form-grid">
              <input
                placeholder="Repo Owner"
                value={repoOwner}
                onChange={(e) => setRepoOwner(e.target.value)}
                required
              />
              <input
                placeholder="Repo Name"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                required
              />
              <input
                placeholder="Branch (default: main)"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
            </div>
            <div style={{ position: "relative" }}>
              <input
                placeholder="Personal Access Token"
                type={showToken ? "text" : "password"}
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowToken(!showToken)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  background: "transparent",
                  color: "#64748b",
                  padding: "5px",
                }}
              >
                {showToken ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            <button
              type="submit"
              style={{ width: "100%", marginTop: "0.5rem" }}
            >
              Add Token
            </button>
          </form>

          <h2>Managed GitHub Tokens</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Repo</th>
                    <th>Last Push</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tokens.length === 0 ? (
                    <tr>
                      <td colSpan={4} style={{ textAlign: "center" }}>
                        No tokens found
                      </td>
                    </tr>
                  ) : (
                    tokens.map((t) => (
                      <tr key={t.id}>
                        <td>
                          <strong>{t.github_username}</strong>
                        </td>
                        <td>
                          {t.repo_owner && t.repo_name ? (
                            <span>
                              {t.repo_owner}/{t.repo_name}
                              {t.branch ? ` (${t.branch})` : ""}
                            </span>
                          ) : (
                            <span style={{ color: "#94a3b8" }}>
                              not configured
                            </span>
                          )}
                        </td>
                        <td>
                          {t.last_push
                            ? new Date(t.last_push).toLocaleString()
                            : "Never"}
                        </td>
                        <td>
                          <div className="flex-row-wrap">
                            <button
                              onClick={() => triggerPush(t.id)}
                              style={{
                                background: "#dcfce7",
                                color: "#166534",
                                padding: "0.5rem 1rem",
                              }}
                            >
                              Push Now
                            </button>
                            <button
                              onClick={() => deleteToken(t.id)}
                              style={{
                                background: "#fee2e2",
                                color: "#dc2626",
                                padding: "0.5rem 1rem",
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {activeTab === "schedule" && (
        <>
          <h2>Schedule — Day-wise Questions & Solutions</h2>
          {scheduleLoading ? (
            <p>Loading schedule...</p>
          ) : (
            schedule.map((d) => (
              <div
                key={d.day}
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: "#fff",
                  border: "1px solid #e6eefc",
                  borderRadius: 8,
                }}
              >
                <div className="schedule-header">
                  <div>
                    <strong>Day {d.day}</strong> —{" "}
                    <span style={{ color: "#475569" }}>{d.date}</span>
                    {d.date === nextScheduledDate && (
                      <span
                        style={{
                          marginLeft: "12px",
                          background: "#eab308",
                          color: "#fff",
                          padding: "2px 8px",
                          borderRadius: "12px",
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                        }}
                      >
                        Up Next
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="badge badge-success">
                      {d.questions.length} questions
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: 8 }}>
                  {d.questions.map((q: string) => {
                    const sol = d.solutions?.[q] || {};
                    return (
                      <div key={q} className="schedule-row">
                        <div style={{ flex: 1, paddingRight: "1rem" }}>
                          <strong>{q}</strong>:{" "}
                          <span style={{ color: "#475569" }}>
                            {sol.problem_statement ||
                              "No problem statement available"}
                          </span>
                        </div>
                        <div className="flex-row-wrap">
                          {sol.c ? (
                            <button
                              onClick={() => viewSolution(d.date, q, "c")}
                              style={{
                                background: "#f1f5f9",
                                color: "#0f172a",
                                padding: "0.35rem 0.6rem",
                              }}
                            >
                              View C
                            </button>
                          ) : (
                            <span style={{ color: "#94a3b8" }}>C missing</span>
                          )}
                          {sol.py ? (
                            <button
                              onClick={() => viewSolution(d.date, q, "python")}
                              style={{
                                background: "#f8fafc",
                                color: "#0f172a",
                                padding: "0.35rem 0.6rem",
                              }}
                            >
                              View Py
                            </button>
                          ) : (
                            <span style={{ color: "#94a3b8" }}>Py missing</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </>
      )}

      {activeTab === "help" && (
        <div
          style={{
            background: "#f8fafc",
            padding: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h2>How to configure Tokens</h2>
          <p>
            You will need a GitHub Personal Access Token to automate pushing
            solutions.
          </p>
          <ol>
            <li>
              Go to GitHub Settings &gt; Developer Settings &gt; Personal Access
              Tokens (Classic)
            </li>
            <li>
              Generate a new token with <b>repo</b> scope.
            </li>
            <li>Copy the token and paste it in the "Manage Tokens" tab.</li>
          </ol>
          <p>
            For repository details, if your URL is{" "}
            <code>https://github.com/manish-9245/homework</code>:
          </p>
          <ul>
            <li>
              <b>Repo Owner:</b> manish-9245
            </li>
            <li>
              <b>Repo Name:</b> homework
            </li>
          </ul>
        </div>
      )}

      {/* Modal */}
      {typeof window !== "undefined" && modalOpen && (
        // @ts-ignore dynamic import
        <CodeModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          content={modalContent}
          lang={modalLang}
          title={modalTitle}
        />
      )}
    </div>
  );
}

// Lazy client-side import of the modal to avoid tree-shaking issues in SSR
import dynamic from "next/dynamic";
const CodeModal = dynamic(() => import("../components/CodeModal"), {
  ssr: false,
});

export function DashboardModalBridge() {
  return null;
}
