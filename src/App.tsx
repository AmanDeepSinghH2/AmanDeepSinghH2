import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl"></div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text relative">
              Aman Deep Singh
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
            Machine Learning Engineer
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/AmanDeepSinghH2" className="p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500/50">
              <Github size={24} className="text-blue-400" />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500/50">
              <Linkedin size={24} className="text-blue-400" />
            </a>
            <a href="mailto:amandeepsingh090206@gmail.com" className="p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500/50">
              <Mail size={24} className="text-blue-400" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 bg-gray-900" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=600"
                  alt="Profile"
                  className="rounded-2xl shadow-2xl relative"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <User className="text-blue-400" />
                About Me
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                A motivated Machine Learning Engineer and Computer Science student with extensive knowledge of Python, SQL, and AI technologies. Experienced at crafting solutions with data at the core, with hands-on skills at developing machine learning models and full-stack projects.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                  <h3 className="font-semibold mb-3 text-blue-400">Frontend</h3>
                  <p className="text-gray-400">React, TypeScript, Next.js</p>
                </div>
                <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                  <h3 className="font-semibold mb-3 text-blue-400">Backend</h3>
                  <p className="text-gray-400">Node.js, Python, PostgreSQL</p>
                </div>
                <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                  <h3 className="font-semibold mb-3 text-blue-400">Cloud</h3>
                  <p className="text-gray-400">AWS, Docker, Kubernetes</p>
                </div>
                <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                  <h3 className="font-semibold mb-3 text-blue-400">Tools</h3>
                  <p className="text-gray-400">Git, CI/CD, Agile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-gray-800" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center flex items-center gap-3 justify-center">
            <Briefcase className="text-blue-400" />
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row gap-6 justify-between mb-6">
                <h3 className="text-2xl font-bold">Sales Management System</h3>
                <p className="text-blue-400">2023 - Present</p>
              </div>
              <p className="text-xl text-blue-400 mb-4">Tech Solutions Inc.</p>
              <ul className="text-gray-400 space-y-3 list-disc list-inside">
                <li>Led a team of 5 developers in building a cloud-native SaaS platform</li>
                <li>Improved application performance by 40% through code optimization</li>
                <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
              </ul>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row gap-6 justify-between mb-6">
                <h3 className="text-2xl font-bold">Machine Learning Models</h3>
                <p className="text-blue-400">2022 - 2023</p>
              </div>
              <p className="text-xl text-blue-400 mb-4">Digital Innovations Ltd</p>
              <ul className="text-gray-400 space-y-3 list-disc list-inside">
                <li>Developed and maintained multiple React-based web applications</li>
                <li>Implemented RESTful APIs using Node.js and Express</li>
                <li>Reduced bug reports by 30% through comprehensive unit testing</li>
              </ul>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row gap-6 justify-between mb-6">
                <h3 className="text-2xl font-bold">Feeding Futures</h3>
                <p className="text-blue-400">2023 - 2027</p>
              </div>
              <p className="text-xl text-blue-400 mb-4">StartUp Hub</p>
              <ul className="text-gray-400 space-y-3 list-disc list-inside">
                  <li>Feeding futures is a full stack project which helps Mess, hospitals and other venues to provide food for those who are in need, available to all.</li>

                <li>Collaborated with UX team to implement modern design patterns</li>
                <li>Mentored junior developers in best practices and coding standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-gray-900" id="projects">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center flex items-center gap-3 justify-center">
              Featured Projects

            <Code2 className="text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
                  alt="E-commerce Platform"
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">Sales Management System</h3>

                <p className="text-gray-400 mb-6">
                  A full-stack e-commerce platform built with React, Node.js, and PostgreSQL.
                  Features include real-time inventory, payment processing, and admin dashboard.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop"
                  alt="Analytics Dashboard"
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">Student-Grade Prediction Model</h3>

                <p className="text-gray-400 mb-6">
                  Real-time analytics dashboard using React, D3.js, and WebSocket.
                  Visualizes complex data sets with interactive charts and filters.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=500&h=300&fit=crop"
                  alt="Task Management App"
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">Email-Spam Prediction Model</h3>
                  <h3 className="text-2xl font-bold mb-3">Feeding Futures</h3>

                <p className="text-gray-400 mb-6">
                  A collaborative task management application with real-time updates.
                  Built using Next.js, TypeScript, and Firebase.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-800" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!

            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
            <a
              href="mailto:amandeepsingh090206@email.com"

            className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors text-lg"
          >
            <Mail size={20} />
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aman Deep Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
