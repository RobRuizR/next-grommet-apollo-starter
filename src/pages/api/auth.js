/* eslint import/no-unused-modules: 0 */

function makeToken() {
  let result = '';
  const length = 50;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function(req, res) {
  const jsonResponse = JSON.parse(req.body);
  const { username, password } = jsonResponse;

  if (username === 'admin' && password === 'admin') {
    const token = makeToken();
    res.json({ token });
  } else {
    res.status(401).send({ error: 'Unauthorized' });
  }
}
