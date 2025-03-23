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
              Your Actual Name
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
            Senior Software Engineer
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com" className="p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500/50">
              <Github size={24} className="text-blue-400" />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500/50">
              <Linkedin size={24} className="text-blue-400" />
            </a>
            <a href="mailto:contact@example.com" className="p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500/50">
              <Mail size={24} className="text-blue-400" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-32 bg-gray-800" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:contact@example.com"
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
          <p>© {new Date().getFullYear()} Your Actual Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
