import { Resend } from 'resend';

export async function POST(req) {
  const data = await req.json();
  const { name, email, phone, service, message } = data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const logoUrl = "https://finanzconsult.vercel.app/images/logo.png"; // Înlocuiește cu URL-ul public al logo-ului

  const html = `
    <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 32px;">
      <div style="max-width: 480px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #0001; padding: 32px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <img src="${logoUrl}" alt="Finanz Consult" style="max-width: 180px; margin-bottom: 16px;" />
          <h2 style="color: #1e293b; margin: 0;">Mesaj nou de pe formularul de contact</h2>
        </div>
        <table style="width: 100%; font-size: 16px; color: #222;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Nume:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Telefon:</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Serviciu:</td>
            <td style="padding: 8px 0;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Mesaj:</td>
            <td style="padding: 8px 0; white-space: pre-line;">${message}</td>
          </tr>
        </table>
        <div style="margin-top: 32px; text-align: center; color: #64748b; font-size: 13px;">
          Acest mesaj a fost trimis de pe formularul de contact <br />finanzconsult.ro
        </div>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev', // <- adresa de test Resend
      to: 'alexandrumunteanu010@gmail.com',
      subject: 'Mesaj nou de pe formularul de contact',
      html,
    });

    console.log("RESEND RESULT:", result);

    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
  } catch (err) {
    console.error("RESEND ERROR:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}