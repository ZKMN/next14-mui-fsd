import Creatomate from 'creatomate';

// TODO: PUT KEY HERE
const client = new Creatomate.Client('');

export async function POST(request: Request) {
  try {
    const video = await client.render({
      source: new Creatomate.Source({
        outputFormat: 'mp4',
        width: 1920,
        height: 1080,
        elements: [
          new Creatomate.Video({
            track: 1,
            source: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
          }),

          new Creatomate.Video({
            track: 1,
            source: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            animations: [
              new Creatomate.Fade({
                time: 'start',
                duration: 1,
                transition: true,
              }),
            ],
          }),
        ],
      }),
    });

    const data = video;

    return Response.json({ data });
  } catch (error) {
    throw new Error(error);
  }
}
