import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }
  return new Stripe(secretKey);
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const { amount, recurring } = await req.json();

    // Validate amount
    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Convert to cents for Stripe
    const amountInCents = Math.round(amount * 100);

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        recurring: recurring ? 'true' : 'false',
        organization: 'EHR Research Institute',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    const errorMessage = error?.message || 'Failed to create payment intent';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
