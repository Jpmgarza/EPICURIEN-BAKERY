export function MapEmbed() {
  return (
    <section className="bg-[var(--dominant-brand)] pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3895046044!2d101.0458073!3d13.7168177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5fe61d3b78b3%3A0x6ec866ef86acb0a!2sW%20District!5e0!3m2!1sen!2sth!4v1680000000000!5m2!1sen!2sth"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="W District Bangkok — Épicurien French Bakery"
        />
      </div>
    </section>
  );
}
