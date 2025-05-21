
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      toast({
        title: 'Wiadomość wysłana!',
        description: 'Skontaktujemy się z Tobą najszybciej jak to możliwe.',
        variant: 'default',
      });
    } catch (error) {
      toast({
        title: 'Błąd',
        description: 'Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-white text-sm">
          Imię
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jan Kowalski"
          required
          className="bg-darkCard border-gray-700 text-white"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-white text-sm">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="JanKowalski@poczta.pl"
          required
          className="bg-darkCard border-gray-700 text-white"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-white text-sm">
          Wiadomość
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Napisz swoją wiadomość..."
          required
          className="bg-darkCard border-gray-700 text-white min-h-32"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange hover:bg-orange-dark text-white font-medium"
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
      </Button>
    </form>
  );
};

export default ContactForm;
