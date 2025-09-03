import { useState } from 'react';
import '../components/Stats.css';

const profileStats = [
  { label: 'Favorite Weapon', value: 'Sarcasm' },
  { label: 'Starting Zone', value: 'Pacific Northwest' },
  { label: 'Alignment', value: 'Introvert Clever' },
  { label: 'Languages Spoken', value: 'English, Swahili, Movie Quotes' },
  { label: 'Special Ability', value: 'Room Reader' },
];

const specialAbilityDescription = `When getting to know a group, Tanner can detect which kind of humor will land best, quickly adapting his style to make everyone feel at ease and entertained.`;

const charmStats = [
  { label: 'Humor', value: 92 },
  { label: 'Emotional Intelligence', value: 88 },
  { label: 'Flirting Finesse', value: 84 },
  { label: 'Romantic Boldness', value: 76 },
  { label: 'Text Game', value: 93 },
  { label: 'DM Opener Creativity', value: 96 },
];

const brainStats = [
  { label: 'Smarts (Tech & Tactics)', value: 89 },
  { label: 'Meme Accuracy', value: 90 },
  { label: 'Playlist Curation', value: 91 },
  { label: 'Overthinking Efficiency', value: 98 },
  { label: 'Late-Night Deep Thoughts', value: 87 },
];

const lifestyleStats = [
  { label: 'Favorite Food: Italian', value: 100 },
  { label: 'Snack Strategy', value: 95 },
  { label: 'Laundry Folding Accuracy', value: 59 },
  { label: 'Unnecessary Tab Count', value: 97 },
  { label: 'Parallel Parking Confidence', value: 42 },
];

const chaosStats = [
  { label: 'TV Show Marathon Stamina', value: 94 },
  { label: 'Spontaneous Out of Pocket Hot Takes', value: 67 },
  { label: 'GIF Reaction Timing', value: 89 },
  { label: 'Movie Quote Fluency', value: 100 },
];

const weaknesses = [
  'That cute smile of yours',
  'Dessert menus',
  'Brunettes with pretty eyes',
  'Latinas that have cute smiles',
  'Loyal during talking stage',
  'Girls that reply fast',
  'Using humor to cope with stress',
  'Thinking I am Ryan Gosling',
];

const favoriteQuote = `"Strength and Honor" – Gladiator`;

const renderStats = (stats) =>
  stats.map((stat, index) => (
    <div key={index} className="stat-block">
      <div className="stat-label">{stat.label}</div>
      <div className="stat-bar">
        <div
          className="stat-fill"
          style={{ width: `${stat.value}%` }}
        ></div>
      </div>
      <div className="stat-value">{stat.value}%</div>
    </div>
  ));

export default function Stats() {
  const [view, setView] = useState('strengths');

  return (
    <section className="stats-page">
      <h2>Tanner’s Personality Stats</h2>
      <p>Swipe-worthy metrics, cinematic chaos, and snack supremacy.</p>

      <section className="stats-theme">
        <h3>🎥 Favorite Movie Quote</h3>
        <p className="quote">{favoriteQuote}</p>
      </section>

      <section className="stats-theme">
        <h3> Personal Profile</h3>
        <ul className="profile-list">
          {profileStats.map((item, index) => (
            <li key={index}>
              <strong>{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>
        <div className="ability-description">
          <strong>Room Reader:</strong> {specialAbilityDescription}
        </div>
      </section>

      <div className="toggle-buttons">
        <button
          className={view === 'strengths' ? 'active' : ''}
          onClick={() => setView('strengths')}
        >
          Strengths
        </button>
        <button
          className={view === 'weaknesses' ? 'active' : ''}
          onClick={() => setView('weaknesses')}
        >
          Weaknesses
        </button>
      </div>

      {view === 'strengths' && (
        <>
          <section className="stats-theme">
            <h3>🎭 Charm & Connection</h3>
            <div className="stats-grid">{renderStats(charmStats)}</div>
          </section>

          <section className="stats-theme">
            <h3>🧠 Brains & Tactics</h3>
            <div className="stats-grid">{renderStats(brainStats)}</div>
          </section>

          <section className="stats-theme">
            <h3>🍣 Taste & Lifestyle</h3>
            <div className="stats-grid">{renderStats(lifestyleStats)}</div>
          </section>

          <section className="stats-theme">
            <h3>🎬 Chaos & Creativity</h3>
            <div className="stats-grid">{renderStats(chaosStats)}</div>
          </section>
        </>
      )}

      {view === 'weaknesses' && (
        <section className="stats-theme">
          <h3>⚠️ Weaknesses</h3>
          <ul className="weakness-list">
            {weaknesses.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}