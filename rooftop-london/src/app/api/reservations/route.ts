import { NextResponse } from 'next/server';
import { generateReferenceNumber } from '@/lib/utils';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone || !body.date) {
      return NextResponse.json(
        { error: 'Name, phone, and date are required' },
        { status: 400 }
      );
    }

    const referenceNumber = generateReferenceNumber();

    // In production with Supabase configured:
    // const supabase = await createClient();
    // if (supabase) await supabase.from('reservations').insert({ ...body, reference_number: referenceNumber });

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: 'Reservation request logged successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error processing reservation' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Reservation endpoint active',
  });
}
