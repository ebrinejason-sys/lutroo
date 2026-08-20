import { ImageResponse } from 'next/og';
import { studio } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${studio.name} — ${studio.discipline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#2F3A33',
          color: '#FCFBF8',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#8C9C8B',
          }}
        >
          Lutroo Spaces
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.1, maxWidth: 900 }}>
            Every space has the ability to affect the mind.
          </div>
          <div style={{ fontSize: 28, color: 'rgba(252, 251, 248, 0.75)', fontStyle: 'italic' }}>
            {studio.promise}
          </div>
        </div>

        <div
          style={{
            fontSize: 20,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#8C9C8B',
          }}
        >
          {studio.tagline}
        </div>
      </div>
    ),
    size
  );
}
