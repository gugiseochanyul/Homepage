"use client";

import { useEffect, useState, type FormEvent } from "react";

type Entry = {
  id: string;
  name: string;
  message: string;
  date: string;
};

const STORAGE_KEY = "sola-guestbook";

export default function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: Entry = {
      id: `${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("ko-KR"),
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setName("");
    setMessage("");
  }

  return (
    <section id="guestbook" className="bg-sola-yellowLight px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-3 text-center text-3xl font-extrabold text-sola-brown sm:text-4xl">
          📖 쏠랭이 방명록
        </h2>
        <p className="mb-8 text-center text-lg">쏠랭이에게 응원 메시지를 남겨주세요!</p>

        <form
          onSubmit={handleSubmit}
          className="mb-8 flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 적어주세요"
            className="rounded-xl border-2 border-sola-pink px-4 py-3 text-lg outline-none focus:border-sola-sky"
            maxLength={20}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="쏠랭이에게 하고 싶은 말을 남겨주세요 :)"
            className="min-h-24 rounded-xl border-2 border-sola-pink px-4 py-3 text-lg outline-none focus:border-sola-sky"
            maxLength={200}
          />
          <button
            type="submit"
            className="rounded-full bg-sola-pink px-6 py-3 text-lg font-bold text-white shadow-md transition hover:bg-sola-pink/80"
          >
            방명록 남기기 🐾
          </button>
        </form>

        <div className="flex flex-col gap-4">
          {entries.length === 0 && (
            <p className="text-center text-lg text-sola-brown/60">
              아직 방명록이 없어요. 첫 번째 메시지를 남겨주세요!
            </p>
          )}
          {entries.map((entry) => (
            <div key={entry.id} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-lg font-bold">{entry.name}</p>
                <p className="text-sm text-sola-brown/60">{entry.date}</p>
              </div>
              <p className="text-lg">{entry.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
