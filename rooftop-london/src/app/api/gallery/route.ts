import { NextResponse } from 'next/server';
import { SAMPLE_GALLERY_IMAGES } from '@/lib/constants';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: SAMPLE_GALLERY_IMAGES,
  });
}
