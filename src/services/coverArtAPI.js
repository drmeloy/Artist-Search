export const getAlbumCover = id => {
  return fetch(`https://coverartarchive.org/release/${id}/front`);
};

