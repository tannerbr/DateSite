import '../components/Testimonials.css';

const topQuotes = [
  {
    text: '“Are you a model? Your smile lights up the whole world”',
    source: '– Random Southern Grandma',
  },
  {
    text: '“You are literally the funniest person I know”',
    source: '– Lexi',
  },
  {
    text: '“You look like Henry Cavill”',
    source: '– Random dude at GNC',
  },
];

const humorQuotes = [
  '“My abs hurt from laughing so much” – Hannah',
  '“Tanner is actually really funny” – Tiara',
  '“Would ghost again.” – Hinge Girl #3',
];

const looksQuotes = [
  '“Dude you’re looking jacked” – Random dude from the gym #5',
  '“Has anyone ever told you that you look like Prince Eric?” – Jocelyn',
  '“You are so handsome" *said while holding a hotdog* – Stranger at Costco',
];

const vibeQuotes = [
  '“Do you have sisters? We can tell because of how comfortable you are around women” – FHE Sisters',
];

export default function Testimonials() {
  return (
    <section className="testimonials-page">
      <h2>💬 What People Are Saying</h2>

      <section className="highlight-reel">
        {topQuotes.map((quote, index) => (
          <div key={index} className="highlight-quote">
            <p>{quote.text}</p>
            <span>{quote.source}</span>
          </div>
        ))}
      </section>

      <section className="quote-group">
        <h3>😂 Humor & Personality</h3>
        <ul>
          {humorQuotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </section>

      <section className="quote-group">
        <h3>💪 Looks & Physique</h3>
        <ul>
          {looksQuotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </section>

      <section className="quote-group">
        <h3>🧠 Emotional Vibes</h3>
        <ul>
          {vibeQuotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}