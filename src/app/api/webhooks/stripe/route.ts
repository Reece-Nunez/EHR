import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  const stripe = getStripe();

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  try {
    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handleSuccessfulPayment(paymentIntent);
        break;
      }

      case 'setup_intent.succeeded': {
        const setupIntent = event.data.object as Stripe.SetupIntent;
        await handleSuccessfulSetup(setupIntent);
        break;
      }

      case 'charge.succeeded': {
        const charge = event.data.object as Stripe.Charge;
        // Additional charge confirmation (redundant with payment_intent.succeeded but useful for logging)
        console.log('Charge succeeded:', charge.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleSuccessfulPayment(paymentIntent: Stripe.PaymentIntent) {
  const stripe = getStripe();
  const resend = getResend();

  try {
    // Get customer email from payment method or charge
    const charges = await stripe.charges.list({
      payment_intent: paymentIntent.id,
      limit: 1,
    });

    const charge = charges.data[0];
    const email = charge?.billing_details?.email;

    if (!email) {
      console.error('No email found for payment intent:', paymentIntent.id);
      return;
    }

    const amount = (paymentIntent.amount / 100).toFixed(2);
    const recurring = paymentIntent.metadata?.recurring === 'true';
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Send receipt email using Resend
    await resend.emails.send({
      from: 'EHR Research Institute <noreply@erhri.org>',
      to: [email, 'erhri@proton.me'],
      subject: 'Thank You for Your Donation - EHR Research Institute',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Donation Receipt</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(to right, #2563eb, #7c3aed); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Your Support!</h1>
            </div>

            <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <p style="font-size: 16px; margin-bottom: 20px;">Dear Supporter,</p>

              <p style="font-size: 16px; margin-bottom: 20px;">
                Thank you for your generous ${recurring ? 'monthly' : 'one-time'} donation of <strong>$${amount}</strong> to EHR Research Institute.
                Your support enables us to continue our critical work in discovering and researching surveillance technologies that threaten our constitutional rights.
              </p>

              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h2 style="color: #1f2937; margin-top: 0; font-size: 18px;">Donation Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Amount:</td>
                    <td style="padding: 8px 0; text-align: right; font-weight: bold;">$${amount}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Type:</td>
                    <td style="padding: 8px 0; text-align: right; font-weight: bold;">${recurring ? 'Monthly Recurring' : 'One-Time'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Date:</td>
                    <td style="padding: 8px 0; text-align: right; font-weight: bold;">${date}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Transaction ID:</td>
                    <td style="padding: 8px 0; text-align: right; font-size: 12px; word-break: break-all;">${paymentIntent.id}</td>
                  </tr>
                </table>
              </div>

              <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 15px; margin: 25px 0;">
                <p style="margin: 0; font-size: 14px;">
                  <strong>Tax Information:</strong> EHR Research Institute is a 501(c)(3) nonprofit organization.
                  Your donation is tax-deductible as allowed by law. Please keep this receipt for your tax records.
                </p>
              </div>

              <p style="font-size: 16px; margin-top: 25px;">
                If you have any questions about your donation, please don't hesitate to contact us.
              </p>

              <p style="font-size: 16px; margin-top: 25px;">
                With gratitude,<br>
                <strong>The EHR Research Institute Team</strong>
              </p>

              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
                  EHR Research Institute<br>
                  Box 3307, San Diego, CA 92163
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Receipt email sent for payment:', paymentIntent.id);
  } catch (error) {
    console.error('Error sending receipt email:', error);
  }
}

async function handleSuccessfulSetup(setupIntent: Stripe.SetupIntent) {
  const stripe = getStripe();
  const resend = getResend();

  try {
    // For ACH setup intents, we'll send a confirmation email
    // Note: The actual charge will happen later, which will trigger payment_intent.succeeded

    const paymentMethod = await stripe.paymentMethods.retrieve(
      setupIntent.payment_method as string
    );

    const email = paymentMethod.billing_details.email;

    if (!email) {
      console.error('No email found for setup intent:', setupIntent.id);
      return;
    }

    const amount = setupIntent.metadata?.amount;
    const recurring = setupIntent.metadata?.recurring === 'true';

    await resend.emails.send({
      from: 'EHR Research Institute <noreply@erhri.org>',
      to: [email, 'erhri@proton.me'],
      subject: 'Bank Account Verified - EHR Research Institute',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bank Account Verified</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(to right, #059669, #10b981); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Bank Account Verified!</h1>
            </div>

            <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <p style="font-size: 16px; margin-bottom: 20px;">Dear Supporter,</p>

              <p style="font-size: 16px; margin-bottom: 20px;">
                Your bank account has been successfully verified for ${recurring ? 'monthly recurring' : 'one-time'} donations to EHR Research Institute.
                ${amount ? `Your donation of $${amount} will be processed shortly.` : 'Your donation will be processed shortly.'}
              </p>

              <p style="font-size: 16px; margin-bottom: 20px;">
                You will receive another email receipt once your donation has been completed.
              </p>

              <p style="font-size: 16px; margin-top: 25px;">
                Thank you for your generous support!
              </p>

              <p style="font-size: 16px; margin-top: 25px;">
                With gratitude,<br>
                <strong>The EHR Research Institute Team</strong>
              </p>

              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
                  EHR Research Institute<br>
                  Box 3307, San Diego, CA 92163
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Setup confirmation email sent for:', setupIntent.id);
  } catch (error) {
    console.error('Error sending setup confirmation email:', error);
  }
}
