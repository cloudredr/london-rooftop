import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contact message received successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error processing contact message' },
      { status: 500 }
    );
  }
}
