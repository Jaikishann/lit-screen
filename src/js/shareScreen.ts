export async function startScreenShare() {
  try {
    const stream = await window.navigator.mediaDevices.getDisplayMedia();
    const [screenTrack] = stream.getVideoTracks();
    return screenTrack;
  } catch (error) {
    console.error(error);
    return null;
  }
}