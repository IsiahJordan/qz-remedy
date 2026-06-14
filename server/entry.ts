import api from './src/api.ts'

const PORT = process.env.PORT || 3000;

api.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening to ${PORT}`);
})
