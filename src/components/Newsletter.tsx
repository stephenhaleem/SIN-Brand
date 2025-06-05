
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to Rock County!",
        description: "You've joined our exclusive community.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-6xl font-bold mb-4 tracking-wider text-white">
            JOIN THE COMMUNITY
          </h3>
          <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
        </div>
        
        <p className="text-2xl mb-12 text-gray-300 leading-relaxed">
          Be the first to know about new drops, exclusive collections, and special releases.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 bg-white text-black border-2 border-white focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500 text-lg rounded-lg"
          />
          <Button
            type="submit"
            className="bg-white text-black hover:bg-gray-200 border-2 border-white font-bold tracking-wider py-4 px-8 text-lg rounded-lg"
          >
            JOIN US
          </Button>
        </form>
        
        <p className="text-gray-400 mt-6 text-sm">
          No spam, just pure streetwear. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
