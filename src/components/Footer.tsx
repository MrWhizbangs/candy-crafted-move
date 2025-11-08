import logo from "@/assets/header-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img src={logo} alt="Whizbangs" className="h-12 w-auto brightness-0 invert" />
          <p className="text-center text-sm opacity-80">
            © 2025 Whizbangs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
