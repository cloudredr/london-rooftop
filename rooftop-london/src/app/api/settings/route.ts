import { NextResponse } from 'next/server';
import { RESTAURANT_INFO } from '@/lib/constants';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: RESTAURANT_INFO,
  });
}
