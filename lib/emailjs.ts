const SERVICE_ID = 'service_13qc077';
const TEMPLATE_ID = 'template_tfm2dgf';
const PUBLIC_KEY = 'klkFjFH1M9A-PKrw9';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<void> {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`EmailJS error: ${response.status}`);
  }
}
