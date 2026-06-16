import express from 'express'; // ==> Bu yerda Express Node.js Ustiga qurilgan Framework buning vazifasi asosan sserver yaratish, route yozish va req,res boshqarish
import path from 'path'; // bu bizga papka va filelar yo'lini to'g'ri boshqarishda kerak bo'ladi
import router from './router'; // biz bu yerda router.ts bilan ulanish xosil qildik sababi router ts bizni 
import routerAdmin from "./routerAdmin"; // bu yerda routerAdminni chaqirib olayabmiz 
import morgan from "morgan" // bu Morganni chaqiradi sababi Morgan bizga 
import { MORGAN_FORMAT } from './libs/config';

import session from 'express-session';
import ConnectMongoDB from 'connect-mongodb-session';
import { T } from './libs/types/common';

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",
})
/** 1- ENTRANCE **/
const app = express(); // 1 ! server yaratayabmiz
app.use(express.static(path.join(__dirname, 'public'))) // 2 ! public package ni internetga ochayabmiz
app.use(express.json());// Api ga kelgan JSON ni o'qitayabmiz
app.use(express.urlencoded({ extended: true })); // Html dan kelgan Datani o'qiydi bu code
app.use(morgan(MORGAN_FORMAT)) //Morganni ishga tushurayabmiz: Bu serverga kim nima req yuborganini tekshirib terminalga yozib chiqarib beradi

/** 2-SESSIONS **/
app.use(
    session({ //Session middleware ni Express’ga ulanish xosil qilindi va bu shuni bildiradiki express server har bir req bergan userni eslab qola oladi ekan.
       // session { shuni ichiga esa qanday ishlashlarini belgilab berayabmiz! }
        secret: String(process.env.SESSION_SECRET), // Sessionni shifrlab himoya qiladi. Kirgan userlar sessionni buzib qo'ymasligi uchun qo'yilgan
        cookie: {
            maxAge: 1000 * 3600 * 6, //6 hours sekundlarda beriladi va bu session qancha vaqt umr kechirish uchun qo'yilgan
        },
        store: store, // User kirganini eslab, Saqlanadigan manzil bu manzil bizda MONGO DB
        resave: true, // session o'zgarmasa ham saqlanadi MongoDb ga 
        saveUninitialized: true, //User kirib login bo'lmasa ham u uchun session yasaladi
    })
); //  bu Logika Userlarni eslab qolish tizimini xosil qilayabdi

app.use(function (req, res, next) // Bu har bir req dan OLDIN ishlaydi ma'nosi har bir request kelganda shu function ishlasin degani
{
    const sessionInstance = req.session as T; // sessionni oladi sessionInstancega Joylab beradi
    res.locals.member = sessionInstance.member; // userni res.local ga joylaydi va uni kegin EJS da ko'rsatish uchun ishlatadi
    next(); // kegingi operation ga o'tib ketadi!
})



/** 3 - VIEWS **/
app.set('views', path.join(__dirname, "views")) //bu yerda Expressga views nomli folder bizni EJS filelarimizni saqlashini ta'kidlab o'tayabmiz 
app.set("view engine", "ejs") // Bu view engine esa Express ga => qaysi template engine ishlatayotganimizni ko'rsatib beradi!

/** 4 - ROUTERS **/
app.use("/admin", routerAdmin) // SSR // bu yerda */admin* bilan boshlangan barcha req lar /routerAdmin ga yuborilishi buyurildi
app.use("/", router) // SPA //bu yerda esa User route'lari ulanayabdi va saytning asosiy qismi shu routerdan ishlab turadi 

export default app; // app filemizni exportga chiqarayabmiz