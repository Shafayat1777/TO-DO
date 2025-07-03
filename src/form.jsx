"use client";

import { zodResolver } from "@sub-module/lib/utils";
import { useForm } from "@sub-module/lib/utils";
import { z } from "@sub-module/lib/utils";

import { Button } from "@sub-module/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@sub-module/components/ui/form";
import { Input } from "@sub-module/components/ui/input";
import { Textarea } from "@sub-module/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  to_do: z.string().min(2, {
    message: "To-Do must be at least 2 characters.",
  }),
});

export function ToDOForm({ setData }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      to_do: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setData((prevData) => [...prevData, values]);
    form.reset({
      title: "",
      to_do: "",
    }); // Reset the form after submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Write a title..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="to_do"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To-Do</FormLabel>
              <FormControl>
                <Textarea placeholder="Write to-do..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
