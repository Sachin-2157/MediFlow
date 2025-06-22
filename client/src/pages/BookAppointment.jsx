import { useForm } from "react-hook-form"; // Import useForm
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function BookAppointment() {
  // 1. Set up react-hook-form
  const form = useForm({
    defaultValues: { // Set your form's starting values here
      name: "",
      hospital: "",
      doctor: "",
      date: "",
    },
  });

  // 2. This runs when the form is submitted
  const onSubmit = (data) => {
    // 'data' will automatically contain all your form's values
    console.log("Booking:", data);
    // TODO: You can call your booking function here with 'data'
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">Book an Appointment</h2>
      {/* 3. Link your Form component to react-hook-form */}
      <Form {...form}>
        {/* Use form.handleSubmit to manage submission */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control} // Pass control to connect to react-hook-form
            name="name" // Unique name for this field
            render={({ field }) => ( // 'field' gives you props for your input
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    {...field} // This connects the input to react-hook-form
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hospital"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital</FormLabel>
                <Select
                  onValueChange={field.onChange} // Use field.onChange for Select
                  defaultValue={field.value} // Use field.value for Select's default
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Hospital" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="City Hospital">City Hospital</SelectItem>
                    <SelectItem value="Central Clinic">Central Clinic</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="doctor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Doctor</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Doctor" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Dr. Smith">Dr. Smith</SelectItem>
                    <SelectItem value="Dr. Patel">Dr. Patel</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date & Time</FormLabel>
                <FormControl>
                  <Input
                    type="datetime-local"
                    {...field} // This connects the input to react-hook-form
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}