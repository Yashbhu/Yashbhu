<p align="center">
  <img src="https://i.pinimg.com/originals/7c/d7/2d/7cd72df765ac4f50767325c7c6564058.jpg" alt="profile picture" width="180" style="border-radius: 50%;" />
</p>

<h1 align="center">Hi 👋, I'm Yash Bahuguna</h1>

<h3 align="center" style="line-height: 1.6;">
  A tech enthusiast who loves exploring and building cool stuff that solves real-world problems.<br><br>
  🎓 Pursuing B.Tech in Computer Science and Technology<br><br>
  🚀 Actively looking to collaborate on cool projects, hackathons, and innovative ideas<br><br>
  🌱 Currently sharpening my web dev skills and learning new tech stacks<br><br>
  🤝 Open to connections for hackathons, ideas, and projects!
</h3>

---

import React from "react";

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "Python",
  "React", "Next.js", "Node.js", "Express.js", "Socket.IO", "JWT", "TailwindCSS",
  "MongoDB", "Postman", "Heroku", "Vultr", "Arduino"
];

const skillColors = {
  HTML5: "bg-orange-600",
  CSS3: "bg-blue-600",
  JavaScript: "bg-yellow-400 text-black",
  TypeScript: "bg-blue-500",
  Python: "bg-blue-700",
  React: "bg-[#20232A]",
  "Next.js": "bg-black",
  "Node.js": "bg-green-600",
  "Express.js": "bg-gray-700",
  "Socket.IO": "bg-black",
  JWT: "bg-black",
  TailwindCSS: "bg-cyan-500",
  MongoDB: "bg-green-700",
  Postman: "bg-orange-500",
  Heroku: "bg-purple-700",
  Vultr: "bg-blue-600",
  Arduino: "bg-teal-500",
};

const SkillsSection = () => {
  return (
    <div className="px-4 py-6 bg-gray-900 text-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">💻 Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1 rounded-full text-sm font-medium ${skillColors[skill] || "bg-gray-600"}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
---

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=yashbhu&show_icons=true&theme=dark" alt="GitHub Stats" />
</p>

---

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com?user=yashbhu&theme=dark&hide_border=false" alt="GitHub Streak" />
</p>

---

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yashbhu&layout=compact&theme=dark" alt="Top Languages" />
</p>

---

import React from "react";

const DevQuoteCard = () => {
  return (
    <div className="bg-[#1e1e2e] text-white rounded-xl shadow-md p-5 mb-6">
      <h2 className="text-xl font-semibold mb-3">📝 Random Dev Quote</h2>
      <p className="text-cyan-300 text-lg italic">
        "The only sin is to make a choice without knowing you are making one."
      </p>
      <p className="text-pink-400 mt-2 text-right">– Jonathan Shewchuk</p>
    </div>
  );
};

export default DevQuoteCard;
---

<h2 align="center" style="margin-top: 40px;">📫 Contact</h2>

<p align="center">
  📧 Email: <a href="mailto:yashbahuguna@example.com">yashbahuguna@example.com</a>
</p>