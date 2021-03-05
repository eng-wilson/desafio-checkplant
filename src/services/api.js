import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hooks.zapier.com/',
});

function syncMarkers({
  latitude, longitude, annotation, datetime,
}) {
  return api.post('/hooks/catch/472009/09rj5z/?email_key=eng.wilson.c@gmail.com', {
    latitude,
    longitude,
    annotation,
    datetime,
  });
}

export default { syncMarkers };
