const noteApiToken = process.env.REACT_APP_NOTE_API_TOKEN;
const noteApiBaseUrl = process.env.REACT_APP_NOTE_API_BASE_URL;

// List API endpoint
const API_ENDPOINT = {
  AUTH: {
    REGISTER: `${noteApiBaseUrl}/auth/register`,
    LOGIN: `${noteApiBaseUrl}/auth/login`,
    LOGOUT: `${noteApiBaseUrl}/auth/logout`
  },
  NOTES: {
    LIST: `${noteApiBaseUrl}/notes`,
    ARCHIVED: `${noteApiBaseUrl}/notes/archived`,
    DETAIL: (noteId) => `${noteApiBaseUrl}/notes/${noteId}`,
    UPDATE: (noteId) => `${noteApiBaseUrl}/notes/${noteId}`,
    DELETE: (noteId) => `${noteApiBaseUrl}/notes/${noteId}`,
  }
};

const apiOptions = {
  headers: {
    'Authorization': `Bearer ${noteApiToken}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
}

export {
  API_ENDPOINT, apiOptions
}