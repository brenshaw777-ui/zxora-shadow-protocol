import { Github, Twitter, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center border border-primary/30">
              <span className="text-white font-display font-bold text-sm">Z</span>
            </div>
            <span className="font-display text-xl font-bold tracking-widest bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              ZXORA
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Security
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Zxora. Built for operators who value privacy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
