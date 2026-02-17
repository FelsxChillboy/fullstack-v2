import Image from "next/image";

const team = [
  { name: "ketua Rayon", role: "ketua Rayon", photoUrl: "/foto-1.jpg" },
  { name: "Sekretaris Rayon", role: "Sekretaris Rayon", photoUrl: "/foto-2.jpg" },
  { name: "Bendahara Rayon", role: "Bendahara Rayon", photoUrl: "/foto-3.jpg" },
  { name: "Wakil ketua I", role: "Wakil ketua I", photoUrl: "/foto-4.jpg" },
  { name: "Wakil ketua II", role: "Wakil ketua II", photoUrl: "/foto-5.jpg" },
  { name: "Wakil ketua III", role: "Wakil ketua III", photoUrl: "/foto-6.jpeg" },
  { name: "Ketua biro kaderisasi", role: "Ketua biro kaderisasi", photoUrl: "/foto-7.jpg" },
  { name: "Ketua biro media", role: "Ketua biro media", photoUrl: "/foto-8.jpg" },
  { name: "anggota biro kaderisasi", role: "anggota biro kaderisasi", photoUrl: "/foto-11.jpg" },
  { name: "anggota kaderisasi", role: "anggota kaderisasi", photoUrl: "/foto-18.jpg" },
  { name: "anggota biro kaderisasi", role: "anggota biro kaderisasi", photoUrl: "/foto-19.jpg" },
];

function ProfileCard({ member }: { member: typeof team[number] }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-[200px] h-[260px] rounded-[28px] overflow-hidden bg-[#E09B19] border-2 border-white">
        <Image src={member.photoUrl} alt={member.name} fill className="object-cover object-top" />
      </div>

      <div className="mt-4 text-[11px] uppercase tracking-widest leading-5 text-white">
        <div className="font-extrabold">{member.name}</div>
        <div className="text-white/70">{member.role}</div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mt-5 text-2xl md:text-3xl font-extrabold">Struktur / Team</h1>
        <p className="mt-2 text-sm text-white/80">
          Data ini versi statis (tanpa database), fotonya tetap dari folder <b>public/</b>.
        </p>

        <section className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {team.map((m) => (
            <ProfileCard key={m.photoUrl} member={m} />
          ))}
        </section>
      </div>
    </main>
  );
}
