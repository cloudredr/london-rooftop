import { NextResponse } from 'next/server';
import { generateReferenceNumber } from '@/lib/utils';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone || !body.eventDate) {
      return NextResponse.json(
        { error: 'Name, phone, and event date are required' },
        { status: 400 }
      );
    }

    const referenceNumber = `EVT-${Math.floor(100 + Math.random() * 900)}`;

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: 'Event enquiry logged successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error processing event enquiry' },
      { status: 500 }
    );
  }
}
