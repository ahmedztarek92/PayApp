export const environment = {
apiBaseUrl: 'http://localhost:5287/api',   
msalConfig: {
  auth: {
    clientId: "d2e9d649-5e90-428b-a5a1-ba95caed67b2",
    authority: "https://login.microsoftonline.com/f25d4b9e-06f0-45e2-ab10-888a024ed6e5",
    redirectUri: 'http://localhost:4200/'
  }
},
apiConfig: {
  scopes: ["profile"],
  uri: 'api://d2e9d649-5e90-428b-a5a1-ba95caed67b2'
}
};
