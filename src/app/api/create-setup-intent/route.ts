import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

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

    // Create a SetupIntent for ACH payments
    const setupIntent = await stripe.setupIntents.create({
      payment_method_types: ['us_bank_account'],
      metadata: {
        amount: amount.toString(),
        recurring: recurring ? 'true' : 'false',
        organization: 'EHR Research Institute',
      },
    });

    return NextResponse.json({
      clientSecret: setupIntent.client_secret,
    });
  } catch (error: any) {
    console.error('Error creating setup intent:', error);
    const errorMessage = error?.message || 'Failed to create setup intent';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
