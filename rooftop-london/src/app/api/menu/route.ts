import { NextResponse } from 'next/server';
import { SAMPLE_MENU_ITEMS } from '@/lib/constants';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: SAMPLE_MENU_ITEMS,
  });
}
