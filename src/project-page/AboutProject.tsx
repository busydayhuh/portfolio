import React from "react";

export function AboutProject({ about }: { about: React.ReactNode }) {
  return (
    <section className="space-y-4 md:space-y-8">
      <h3>О проекте</h3>
      <div className="space-y-2 max-w-5xl">{about}</div>
    </section>
  );
}
