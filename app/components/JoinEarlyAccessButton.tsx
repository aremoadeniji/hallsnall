"use client";

import { useState } from "react";

export default function JoinEarlyAccessButton() {
  const [loading, setLoading] = useState(false);

  async function submitLead() {
    try {
      setLoading(true);

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website Visitor",
          email: "unknown@visitor.com",
          message: "Clicked Join early access",
          source: "navbar",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data?.error || "Something went wrong.");
        return;
      }

      alert("✅ Thanks! You’re on the early access list.");
    } catch (e) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={submitLead}
      disabled={loading}
      className="rounded-lg bg-black px-4 py-2 text-sm text-white disabled:opacity-60"
    >
      {loading ? "Joining..." : "Join early access"}
    </button>
  );
}
