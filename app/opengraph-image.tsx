import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { studio } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${studio.name} — ${studio.tagline}`;

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/logo.png'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
        }}
      >
        <img
          src={`data:image/png;base64,${logo.toString('base64')}`}
          alt=""
          width={480}
          height={317}
        />
      </div>
    ),
    size
  );
}
