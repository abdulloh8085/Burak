// import moment from 'moment'; // const moment = require (moment); <= bu Faqat C.Js da ishlatiladi bu faqat vaqtni ko'rsatib turadi
// console.log(moment());
import dotenv from 'dotenv';// omborxonadan ma'lumotlarni import qilish buyurildi ammo xali ishlatilmadi.
// console.log (process.env.PORT); // biz omborxonani manzilini berdik ammo stolni ustiga u yerdan olgan narsalarni qo'yishni buyurmasdan ularni ochishni aytdik va natija undefined
dotenv.config(); // stol // biz omborxonadagi ma'lumotlarni olib kelib stolni ustiga qo'yishni buyurayabmiz va uni endi ishlatayabmiz!
// console.log("PORT:", process.env.PORT); // biz bunda faqat omborxonadagi port manzilini ko'rsatishni buyurayabmiz va natija qoniqarli 👌

// console.log("MONGO_URL:", process.env.MONGO_URL); bu bizga mongoURL ni ochiqlayabdi

import mongoose from 'mongoose'; // bu yerda biz mongoose pack ni chaqirib olayabmiz (ammo Xali ishlatishni boshlamadik) sabai bu bizga mongoDB bilan ishlashni osonlashtiradi,  Crud processni xosil qilishni tezlashtiradi, 
import app from './app'; // << ============ bu yerda biz app file mizni Server filemiz bilan ulanish xosil qilayabmiz...

// console.log("0");
mongoose.connect(process.env.MONGO_URL as string, {}) // bu yerda biz mongoose ni MongoDB ga connect qilib uni ichidagi ma'lunotlar string ko'rinishida ekanligini aytayabmiz (uni ishlatishni boshladik!)
.then(() => {  
// console.log("1");
console.log("MongoDB connection succeed"); // bu agar mongo db connection to'g'ri xosil bo'lsa success xabar qaytarishini buyrug'i
const PORT = process.env.PORT ?? 3003;  // bu yerda biz .env ichidagi berilgan Portni aniqlab foydalanishni buyurayabmiz, va agar u yerda Port belgilab ketilmagan bo'lsa unda Default xolda biz kiritgan 3003 Portdan chiqib ishlab ketaversin deb yozganmiz
// console.log("2");
app.listen(PORT, function() { // biz bu yerda Portimizni Listen qildirayabmiz va callback function yasayabmiz 
console.log(`the server is running successfully on port: ${PORT}`); //bu yerda esa callback function ishlaganda chiqadigan matnni yozib ketayabmiz
// console.log("3");
})
})
.catch((err) => console.log("Error on connection with MongoDB", err)); // bu yerda esa agar mongoDB bilan ulanishda err xosil bo'lsa buni .catch qilib consolega chiqarishni buyurayabmiz!