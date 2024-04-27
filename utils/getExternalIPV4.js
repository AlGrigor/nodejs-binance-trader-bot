app.get('/getip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Разрешаем запросы с http://localhost:5173
  res.setHeader('Access-Control-Allow-Methods', 'GET'); // Разрешаем только GET запросы
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // Разрешаем только указанные заголовки
  res.setHeader('Access-Control-Allow-Credentials', true); // Разрешаем передавать куки и аутентификационные заголовки

  res.send(ip);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});