"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z.string().min(3, "First Name is required"),
  lastName: z.string().min(5, "Last name is required"),
  email: z.string().email(),
  phone: z.coerce.number(),
  message: z.string().optional(),
});

export type EnrolFormType = z.infer<typeof formSchema>;

export default function DonateForm() {
  const form = useForm<EnrolFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = (values: EnrolFormType) => {
    console.log(values);
  };
  return (
    <div className="flex-1 border p-4 bg-stone-300 rounded-md space-y-4 md:w-[50%]">
      <Form {...form}>
        <form className="space-y-4 pb-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="First name*" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Last name*" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Email address*" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Phone number*" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Message"
                    className="bg-white w-full border border-white/30 focus:outline-none focus:border-white/70 text-xs placeholder:text-black/60 px-4 py-2 rounded-sm "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"secondary"} className="rounded-full uppercase">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
