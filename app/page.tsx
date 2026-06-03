'use client';

import { useState } from 'react';

const reminders = [
  'Drink water 💧',
  'Eat on time 🍲',
  'Sleep properly 😴',
  'Stop skipping meals 😑',
  'Someone loves seeing you healthy ❤️',
];

export default function Page() {
  const [reminderIndex, setReminderIndex] = useState(0);

  const nextReminder = () => {
    setReminderIndex((prev) => (prev + 1) % reminders.length);
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section
        style={{
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src="/couple.png"
          alt="Senorita & Marito"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '4rem',
                marginBottom: '10px',
              }}
            >
              Hey Senorita,
            </h1>

            <h2
              style={{
                marginBottom: '20px',
              }}
            >
              Your Marito is here ❤️
            </h2>

            <p
              style={{
                maxWidth: '700px',
                margin: '0 auto',
                fontSize: '1.2rem',
                lineHeight: '1.8',
              }}
            >
              Among all the sensible choices you could have made,
              you somehow chose me.
              <br />
              I'm still trying to understand that decision.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ARE YOU STILL HERE */}
      <section
        style={{
          padding: '80px 20px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <h2>Why Are You Still Here?</h2>

        <p>
          I overthink.
        </p>

        <p>
          I annoy you.
        </p>

        <p>
          I disturb your peace.
        </p>

        <p>
          I ask if you've eaten way too many times.
        </p>

        <p>
          Yet somehow...
          <br />
          you still stay.
        </p>
      </section>

      {/* HEALTH REMINDER */}
      <section
        style={{
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <h2>Daily Reminder</h2>

        <div
          style={{
            fontSize: '1.5rem',
            marginTop: '20px',
            minHeight: '60px',
          }}
        >
          {reminders[reminderIndex]}
        </div>

        <button
          onClick={nextReminder}
          style={{
            padding: '12px 24px',
            marginTop: '20px',
            cursor: 'pointer',
            borderRadius: '8px',
          }}
        >
          Next Reminder
        </button>
      </section>

      {/* TIMELINE */}
      <section
        style={{
          padding: '80px 20px',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <h2>Our Timeline</h2>

        <ul
          style={{
            lineHeight: '3',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>First Conversation</li>
          <li>↓</li>
          <li>First Laugh</li>
          <li>↓</li>
          <li>First Care</li>
          <li>↓</li>
          <li>First Fight</li>
          <li>↓</li>
          <li>Still Here</li>
          <li>↓</li>
          <li>Today</li>
          <li>↓</li>
          <li>Many More Chapters Ahead</li>
        </ul>
      </section>

      {/* MALAYALAM SECTION */}
      <section
        style={{
          padding: '80px 20px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h2>For My Senorita</h2>

        <p>
          "നിന്റെ കൂടെ ഉള്ളപ്പോൾ ജീവിതം കുറച്ചു കൂടി മനോഹരമാകുന്നു."
        </p>

        <p>
          "എന്റെ ദിവസങ്ങളിൽ ഏറ്റവും ശാന്തമായ ഭാഗം നീയാണ്."
        </p>

        <p>
          "എന്നെക്കാൾ നിന്നെ നോക്കിക്കൊള്ളാൻ എനിക്ക് ഇഷ്ടമാണ്."
        </p>

        <br />

        <p>
          I don't think love is grand gestures.
          <br />
          I think it's remembering whether you've eaten.
          <br />
          Getting worried when you don't reply.
          <br />
          Wanting you healthy.
          <br />
          Wanting you happy.
          <br />
          Wanting you around.
        </p>
      </section>

      {/* ENDING */}
      <section
        style={{
          padding: '100px 20px',
          textAlign: 'center',
        }}
      >
        <h2>Thank You</h2>

        <p>
          Thank you for choosing me
          on the days I'm easy to love.
        </p>

        <p>
          And thank you even more
          on the days I'm not.
        </p>

        <h3>— Your Marito ❤️</h3>
      </section>
    </main>
  );
}
