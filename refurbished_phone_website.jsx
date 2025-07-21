import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneIcon, MailIcon, MessageCircle } from "lucide-react";

export default function RefurbishedPhoneStore() {
  const [query, setQuery] = useState("");
  console.log("Component RefurbishedPhoneStore mounted");

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-10">
      {/* Homepage */}
      <section className="text-center space-y-4">
        {console.log("Rendering Homepage section")}
        <h1 className="text-4xl font-bold">ErmarMaric Refurbs & Accessories</h1>
        <p className="text-lg">Affordable. Sustainable. Reliable.</p>
        <div className="bg-green-100 p-4 rounded-xl">
          <h2 className="text-2xl font-semibold">Featured Deal: iPhone 11 – Ksh. 42,999</h2>
          <p>Certified refurbished with 6-month warranty.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardContent className="p-4">“Fast delivery and great quality!” – James M.</CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">“Affordable and reliable. Highly recommended!” – Amina K.</CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">“Looks and works like new!” – Brian O.</CardContent>
          </Card>
        </div>
      </section>

      {/* Product Listings */}
      <section>
        {console.log("Rendering Product Listings section")}
        <h2 className="text-2xl font-bold mb-4">Shop Phones</h2>
        <Input
          placeholder="Search by brand or model..."
          value={query}
          onChange={(e) => {
            console.log("Search query updated:", e.target.value);
            setQuery(e.target.value);
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {["Samsung Galaxy S21", "iPhone 11 Pro", "Xiaomi Redmi Note 10"].map((phone) => (
            <Card key={phone} className="hover:shadow-xl">
              {console.log("Rendering phone card for:", phone)}
              <CardContent className="p-4 space-y-2">
                <img src="/placeholder.jpg" alt={phone} className="w-full rounded-xl" />
                <h3 className="text-lg font-semibold">{phone}</h3>
                <p>Fully tested. 6-month warranty. Priced from Ksh. 25,000.</p>
                <Button onClick={() => console.log("Add to Cart clicked for:", phone)}>Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="space-y-4">
        {console.log("Rendering About Us section")}
        <h2 className="text-2xl font-bold">About Us</h2>
        <p>We are committed to sustainability and quality. All phones undergo a 30-point check and come with a warranty.</p>
        <p>Our goal is to make smartphones more affordable while reducing e-waste across Kenya.</p>
      </section>

      {/* Services */}
      <section className="space-y-4">
        {console.log("Rendering Services section")}
        <h2 className="text-2xl font-bold">Why Choose Refurbished?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Save up to 40% compared to new phones</li>
          <li>Support sustainable consumption</li>
          <li>All devices are certified and warrantied</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">FAQs</h3>
        <p><strong>Q: Are refurbished phones reliable?</strong><br />A: Yes! Each phone is tested and includes a warranty.</p>
        <p><strong>Q: Do you offer delivery?</strong><br />A: We deliver countrywide within 2–3 days.</p>
      </section>

      {/* Contact & Support */}
      <section className="space-y-4">
        {console.log("Rendering Contact & Support section")}
        <h2 className="text-2xl font-bold">Contact & Support</h2>
        <p>Need help? Reach out to us below:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2"><PhoneIcon className="w-5" /> <span>+254 712 345678</span></div>
          <div className="flex items-center space-x-2"><MailIcon className="w-5" /> <span>support@refurbphones.co.ke</span></div>
          <div className="flex items-center space-x-2"><MessageCircle className="w-5" /> <span>Live Chat</span></div>
        </div>
        <form className="grid grid-cols-1 gap-2 mt-4" onSubmit={(e) => { e.preventDefault(); console.log("Contact form submitted"); }}>
          <Input placeholder="Your Name" onChange={(e) => console.log("Name input:", e.target.value)} />
          <Input placeholder="Your Email" onChange={(e) => console.log("Email input:", e.target.value)} />
          <Textarea placeholder="Your Message" onChange={(e) => console.log("Message input:", e.target.value)} />
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t pt-4 mt-10 text-center text-sm text-gray-500">
        <p>&copy; 2025 ErmarMaric Refurbs & Accessories | <a href="#" className="underline">Facebook</a> | <a href="#" className="underline">Instagram</a> | <a href="#" className="underline">Blog</a></p>
      </footer>
    </div>
  );
}
