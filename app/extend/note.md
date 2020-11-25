## Examples

`password` mode **app.oauth.token()** lifecycle
> getClient --> getUser --> saveToken

`password` mode **app.oauth.authenticate()** lifecycle
> Only getAccessToken

`authorization_code` mode **app.oauth.authorize()** lifecycle
> getClient --> getUser --> saveAuthorizationCode

`authorization_code` mode **app.oauth.token()** lifecycle
> getClient --> getAuthorizationCode --> revokeAuthorizationCode --> saveToken

`authorization_code` mode **app.oauth.authenticate()** lifecycle
> Only getAccessToken