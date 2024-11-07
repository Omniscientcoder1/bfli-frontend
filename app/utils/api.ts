export const submitContactForm = async (formData: {
    name: string;
    email: string;
    cell: string;
    subject: string;
    message: string;
  }) => {
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      return await response.json();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return { error: 'Failed to submit form' };
    }
  };
  