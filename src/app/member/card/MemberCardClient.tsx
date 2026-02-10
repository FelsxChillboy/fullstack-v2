"use client";
import { User } from "@prisma/client";

export default function MemberCardClient({ members }: { members: User[] }) {
  return (
    <div>
      {members.map((m) => (
        <div key={m.id}>{m.name}</div>
      ))}
    </div>
  );
}
