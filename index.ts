import app from './src/app'
import { PORT } from './src/config'

app.listen(PORT)
console.log('Server on port' + ' http://localhost:' + PORT)

