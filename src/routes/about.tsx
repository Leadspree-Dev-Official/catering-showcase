import { createFileRoute } from "@tanstack/react-router";
import chef from "@/assets/avatar-chef.jpg";
import plating from "@/assets/post-plating.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Om Shree Krishna Caterer" },
      { name: "description", content: "Learn more about Om Shree Krishna Caterer, providing catering and catering equipment rental services in Howrah and Kolkata." },
      { property: "og:title", content: "About — Om Shree Krishna Caterer" },
      { property: "og:description", content: "Catering and catering equipment rental services in Howrah and Kolkata." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About us</p>
            <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
              Trusted catering for every occasion.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Om Shree Krishna Caterer provides professional catering services for weddings, parties,
              corporate events, family celebrations and other special occasions across Howrah and Kolkata.
            </p>
            <p className="mt-4 text-muted-foreground">
              We also provide catering equipment rental services, helping event hosts and businesses
              arrange the essential equipment needed for smooth and successful functions.
            </p>
          </div>
          <img src={plating} alt="Catering food preparation" className="rounded-2xl object-cover" />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Our services</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { name: "Event Catering", role: "Weddings, parties & celebrations", img: chef },
              { name: "Corporate Catering", role: "Professional food service for business events", img: chef },
              { name: "Equipment Rental", role: "Catering equipment for events and functions", img: chef },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-6 text-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="mt-4 font-display text-xl font-semibold">{p.name}</div>
                <div className="text-sm text-muted-foreground">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Quality service", b: "We focus on dependable food and professional service for every event." },
            { n: "02", t: "Complete solutions", b: "From catering to essential equipment rentals, we help make event planning simpler." },
            { n: "03", t: "Local expertise", b: "Serving customers across Howrah and Kolkata with practical catering solutions for every occasion." },
          ].map((v) => (
            <div key={v.n}>
              <div className="font-display text-4xl font-bold text-primary">{v.n}</div>
              <div className="mt-2 font-display text-xl font-semibold">{v.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
