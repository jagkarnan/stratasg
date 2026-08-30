import Image from "next/image"

// Drop a logo file into public/images/clients/ and set `logo` below to use it.
// `width`/`height` are the file's intrinsic pixel size, so the aspect ratio is preserved.
const clients = [
  { name: "Parkway East Hospital", logo: "/images/clients/parkway-east-hospital.png", width: 1526, height: 250 },
  { name: "Gleneagles Hospital", logo: "/images/clients/gleneagles-hospital.png", width: 684, height: 157 },
  { name: "Goethe-Institut", logo: "/images/clients/goethe-institut.png", width: 400, height: 640 },
  { name: "SK Ang Group" },
  { name: "YDL Construction", logo: "/images/clients/ydl-construction.png", width: 284, height: 79 },
  { name: "Anglo Chinese School", logo: "/images/clients/anglo-chinese-school.png", width: 269, height: 281 },
  { name: "North London Collegiate", logo: "/images/clients/north-london-collegiate.png", width: 738, height: 303 },
  { name: "Euroworld ACD" },
  { name: "True Harmony", logo: "/images/clients/true-harmony.png", width: 432, height: 128 },
] as { name: string; logo?: string; width?: number; height?: number }[]

const initials = (name: string) =>
  name
    .replace(/[^A-Za-z\s-]/g, " ")
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((w) => (w === w.toUpperCase() && w.length > 1 ? w : w[0].toUpperCase()))
    .join("")
    .slice(0, 4)

export function ClientsSection() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hospitals, schools, institutions and businesses across Singapore trust Strata.sg with their spaces.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {clients.map((client) => (
            <li
              key={client.name}
              className="group flex flex-col items-center justify-start gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-full items-center justify-center">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={client.width!}
                    height={client.height!}
                    className="h-auto max-h-16 w-auto max-w-full object-contain"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-xl font-bold tracking-wide text-secondary transition-colors group-hover:bg-secondary/20"
                  >
                    {initials(client.name)}
                  </span>
                )}
              </div>
              <span className="text-center text-sm font-semibold leading-snug text-foreground">{client.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
