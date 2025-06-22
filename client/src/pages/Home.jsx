import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="max-w-3xl mx-auto text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to MediFlow</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Book your hospital appointments and check bed
        availability in real time.
      </p>
      <Button onClick={() => nav("/book")} size="lg">
        Book Appointment
      </Button>
    </div>
  );
}
