import { UserManager } from 'oidc-client';

const oidcConfig = {
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
    client_id: "YOUR_CLIENT_ID",
    redirect_uri: "http://localhost:3000/callback", // Your redirect URI
    response_type: "id_token token",
    scope: "openid profile User.Read", // Requesting scopes
    post_logout_redirect_uri: "http://localhost:3000/",
};

const userManager = new UserManager(oidcConfig);

export default userManager;
