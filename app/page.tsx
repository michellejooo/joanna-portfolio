"use client";

import React, { useState } from "react";

export default function PortfolioWebsite() {
  const experiences = [
    {
      title: 'Himpunan Mahasiswa Teknologi Informasi',
      role: 'Staff Akademik',
      desc: 'Berperan aktif dalam kegiatan akademik organisasi dan mendukung pelaksanaan program mahasiswa teknologi informasi.',
    },
    {
      title: 'Seminar Mahasiswa Teknologi Informasi',
      role: 'Sekretaris & Bendahara',
      desc: 'Mengelola administrasi, proposal, serta pengelolaan keuangan selama pelaksanaan seminar mahasiswa teknologi informasi.',
    },
    {
      title: 'PMK Telkom University',
      role: 'Keyboardist',
      desc: 'Menjadi keyboardist dalam pelayanan ibadah PMK Telkom University serta berkolaborasi dalam kegiatan musik pelayanan.',
    },
    {
      title: 'Club Study SEARCH : Divisi Essay',
      role: 'Member',
      desc: 'Aktif mengikuti pengembangan kemampuan menulis, riset, dan kompetisi essay.',
    },
  ];

  const tools = [
    'Microsoft Office',
    'Google Workspace',
    'Research & Writing',
  ];

  const skills = [
    'Organizational Management',
    'Administration',
    'Event Coordination',
    'Financial Management',
    'Essay Writing',
    'Time Management',
    'Bahasa Mandarin',
    'Communication',
    'Leadership',
  ];

  const certifications = [
  {
    title: 'Coming Soon 🚀',
    desc: 'Currently preparing certifications and achievements. Stay tuned for future updates!',
  },
];

  return (
    <div className="bg-white text-[#7a0000] scroll-smooth min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#7a0000]/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="font-bold text-2xl">Joanna</h1>

          <div className="flex gap-8 text-sm font-semibold uppercase tracking-wide">
            <a href="#home" className="hover:opacity-70 transition">Home</a>
            <a href="#about" className="hover:opacity-70 transition">About</a>
            <a href="#experience" className="hover:opacity-70 transition">Experience</a>
             <a href="#experience" className="hover:opacity-70 transition">License and Sertification</a>
            <a href="#tools" className="hover:opacity-70 transition">Tools & Skills</a>
            <a href="#more" className="hover:opacity-70 transition">More</a>
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden px-8"
      >
        <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-[#7a0000]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#7a0000]/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#7a0000]/70">
              My Personal Website
            </p>

            <h1 className="text-6xl md:text-8xl font-bold mt-6 leading-tight">
              Hi, I’m <br />
              <span className="bg-[#7a0000] text-white px-6 rounded-[2rem] inline-block mt-2">
                Joanna
              </span>
            </h1>

            <div className="mt-10 flex gap-5 flex-wrap">
              <a
                href="#about"
                className="px-8 py-4 rounded-[1.5rem] bg-[#7a0000] text-white font-semibold hover:scale-105 transition"
              >
                Explore More
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-[1.5rem] border-2 border-[#7a0000] hover:bg-[#7a0000] hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-[#7a0000] rounded-[3rem] p-10 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Quick Introduction</h2>
            <p className="text-lg leading-relaxed text-white/90">
              I enjoy contributing to organizations, academic events,
              leadership roles, and collaborative environments while
              continuously improving communication and management skills.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed text-[#7a0000]/80">
              I’m an Information Technology Student at Telkom University. I have passionate in data analyst, backend-developer, IT Consultant and can speak chinese. I have expirience in organization, leadership, and communication. 
            </p>
          </div>

          <div className="bg-[#7a0000] text-white rounded-[3rem] p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Personal Values</h3>
            <ul className="space-y-4 text-lg text-white/90 list-disc pl-6">
              <li>Leadership & Responsibility</li>
              <li>Teamwork & Collaboration</li>
              <li>Creativity & Discipline</li>
              <li>Communication & Adaptability</li>
            </ul>
          </div>
        </div>

 <div className="mt-20">
  <h3 className="text-4xl font-bold mb-8 text-center">
    Licenses & Certifications
  </h3>

  <div className="max-w-2xl mx-auto">
    {certifications.map((cert) => (
      <div
        key={cert.title}
        className="border border-[#7a0000]/10 rounded-[2rem] p-12 shadow-lg bg-white text-center"
      >
        <h4 className="text-2xl font-bold">
          {cert.title}
        </h4>
        <p className="mt-4 text-[#7a0000]/75 leading-relaxed">
          {cert.desc}
        </p>
      </div>
    ))}
  </div>
</div>
</section>

      <section id="experience" className="bg-[#7a0000]/5 py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-14 text-center">
            Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="bg-white rounded-[2rem] p-8 shadow-lg border border-[#7a0000]/10"
              >
                <p className="text-sm uppercase tracking-wide text-[#7a0000]/60 font-semibold">
                  {exp.role}
                </p>
                <h3 className="text-2xl font-bold mt-2">
                  {exp.title}
                </h3>
                <p className="mt-4 text-[#7a0000]/80 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-5xl font-bold mb-8">Tools</h2>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-3 rounded-full bg-[#7a0000] text-white font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-8">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 rounded-full border-2 border-[#7a0000] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="more" className="bg-[#7a0000]/5 py-28 px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-bold text-center mb-14">
      More ✨
    </h2>

    <div className="grid lg:grid-cols-2 gap-10">
      {/* Spotify */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-[#7a0000]/10">
        <h3 className="text-3xl font-bold mb-4">
          What's jojooo listening to??
        </h3>


        <iframe
          style={{ borderRadius: "20px" }}
          src="https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* FunBot */}
      <div className="bg-[#7a0000] text-white rounded-[2.5rem] p-8 shadow-xl">
        <h3 className="text-3xl font-bold mb-4">
          Jojooo's bot
        </h3>

        <p className="text-white/80 mb-6">
          Click the button and discover
          random fun facts about me.
        </p>

        <div className="bg-white/10 rounded-[2rem] p-8 min-h-[180px] flex items-center justify-center text-center text-xl leading-relaxed">
          {fact}
        </div>

        <button
          onClick={randomFact}
          className="mt-6 bg-white text-[#7a0000] px-8 py-4 rounded-[1.5rem] font-semibold hover:scale-105 transition"
        >
          Generate Fun Fact ✨
        </button>
      </div>
    </div>
  </div>
</section>

      <section id="contact" className="bg-[#7a0000] text-white py-28 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold">Contact</h2>
          <p className="mt-5 text-white/80 text-lg">
            Feel free to connect and collaborate with me.
          </p>

          <div className="mt-10 flex justify-center flex-wrap gap-6 text-lg">
            <a
              href="mailto:your@email.com"
              className="bg-white text-[#7a0000] px-8 py-4 rounded-[1.5rem] font-semibold hover:scale-105 transition"
            >
              Email
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-white px-8 py-4 rounded-[1.5rem] hover:bg-white hover:text-[#7a0000] transition"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="border border-white px-8 py-4 rounded-[1.5rem] hover:bg-white hover:text-[#7a0000] transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
