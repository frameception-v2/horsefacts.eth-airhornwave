import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "AirHornWave - Farcaster Soundboard Frame";
export const size = {
  width: 1200,
  height: 630, // Standard OpenGraph size
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative" style={{
        backgroundColor: '#1a1a1a',
        backgroundImage: 'radial-gradient(circle at 25% 25%, #333333, #1a1a1a 60%)'
      }}>
        <div tw="flex flex-col items-center text-center p-12">
          <h1 tw="text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Inter' }}>
            {PROJECT_TITLE}
          </h1>
          <h3 tw="text-3xl text-gray-300 mb-8" style={{ fontFamily: 'Inter' }}>
            {PROJECT_DESCRIPTION}
          </h3>
          <div tw="flex items-center bg-black/20 rounded-full px-6 py-3">
            <span tw="text-xl text-gray-200 mr-2">🎺</span>
            <span tw="text-xl text-gray-200">A Farcaster Frame by horsefacts.eth</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
