### import dotenv from 'dotenv'

# bu bizga omborxonamizdagi ma'lumotlarni olib kelib beradi

### dotenv.config();

# bu esa bizga omborxnadagi ma'lumotlarni olib kelib biz uchun ochib beradi

### import mongoose from 'mongoose';

bu yerda biz mongoose pack ni olib kelib ber deb buyruq berayabmiz

" Mongoose bu - BIzning omborxonamiz (mongoDB) nazoratchisi
bu bizga crud operationlarni qilishga yordam beradi omborxonamizda tartib saqlab beradi va h.k "
================================================================

### mongoose.connect(process.env.MONGO_URL as string, {})

bu yerda biz mongoose ni mongoDB URL ga ulanish xosil qilib, TYPESCRIPT ga Undagi ma'lumotlarni string ko'rinishida ekanligini aytayabmiz.
