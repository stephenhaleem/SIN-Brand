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
    <section className="py-20 px-6 bg-foreground text-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="font-shadows text-3xl font-bold mb-4 tracking-wider text-background">
            JOIN THE COMMUNITY
          </h3>
          <div className="w-32 h-1 bg-background mx-auto mb-8"></div>
        </div>

        <p className="text-2xl mb-12 text-muted-foreground leading-relaxed">
          Be the first to know about new drops, exclusive collections, and
          special releases.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 bg-background text-foreground border-2 border-background focus:outline-none focus:ring-2 focus:ring-muted placeholder-muted-foreground text-lg rounded-lg"
          />
          <Button
            type="submit"
            className="bg-background text-foreground hover:bg-foreground hover:text-background border-2 border-background font-bold tracking-wider py-4 px-8 text-lg rounded-lg"
          >
            JOIN US
          </Button>
        </form>

        <p className="text-muted-foreground mt-6 text-sm">
          No spam, just pure streetwear. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
