export default function ContactPage() {
  return (
    <main className="py-10 max-w-4xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-white/80">Hubungi kami melalui kanal berikut.</p>

      <div className="mt-6 grid gap-4">
        <a
          className="rounded-2xl border border-white/15 bg-white/5 p-5 hover:bg-white/10 transition"
          href="mailto:rayonteknikunusia@gmail.com"
        >
          <div className="font-semibold">Email</div>
          <div className="text-white/70">rayonteknikunusia@gmail.com</div>
        </a>

        <a
          className="rounded-2xl border border-white/15 bg-white/5 p-5 hover:bg-white/10 transition"
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="font-semibold">Instagram</div>
          <div className="text-white/70">@rayonteknikunusia</div>
        </a>
      </div>
    </main>
  );
}
