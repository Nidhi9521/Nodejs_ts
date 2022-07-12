import express, { Express, Request, Response } from 'express';
const app: Express = express();
import mongoose from 'mongoose';
const connection = mongoose.connect('mongodb://localhost:27017/mytsdata');
import { router } from './controller/student_controller'
import * as dotenv from 'dotenv';
import {verifyToken,checkRequest} from '../src/authentication/verifytoken';
dotenv.config();
app.use(express.json())    
const port = process.env.PORT;

console.log(port);
import { initializeApp } from 'firebase-admin/app';

import * as admin from 'firebase-admin';
import cre from './nodejsauth-f12ae-firebase-adminsdk-e4myk-e352533acb.json';
// import { Auth } from '@firebase/auth';
// import { FirebaseApp } from '@firebase/app';

// import jwt_decode from 'jwt-decode';

// var token: any = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwYTdhYTlkNzg5MmI1MmE4YzgxMzkwMzIzYzVjMjJlMTkwMzI1ZDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbm9kZWpzYXV0aC1mMTJhZSIsImF1ZCI6Im5vZGVqc2F1dGgtZjEyYWUiLCJhdXRoX3RpbWUiOjE2NTcyMDM5MjIsInVzZXJfaWQiOiJEcVh4WXNPYTV6VHQ3RktUVVJnbm1qcW9zdjAyIiwic3ViIjoiRHFYeFlzT2E1elR0N0ZLVFVSZ25tanFvc3YwMiIsImlhdCI6MTY1NzIwMzkyMiwiZXhwIjoxNjU3MjA3NTIyLCJlbWFpbCI6InF3ZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AoPqXwSXPruxFsmHarAUwMpB7RGWMibFbMrxMCjPVBq0z_9dtvzoNqGWTqwkUPAiYNwe4CNXP7MGGKJD_vZoiUiqfT6ap-380CSNrH2YgNiK19i-ytui1ceeYtldvI8RrPM4dEtOLSl7QLdZd8x2ZHAST4bDh-3KOTRotFeY1w8bRqD4dlnAl6Q8FyRaNgHwYliC7vaDaUugaFDRiAcn2T1wcjFpZ2TmLqadMHefU79vCNoNNc5KaQATHoxsA5RqjZwTKjrelh0unw341yK6nkT8KRFnfngVDQ6tWRIJ-uBamOeTo-3g71QvfZSopMUT96vBb0pg9F9VwTk5fKGsTA';

// let decoded: any = jwt_decode(token);
// console.log(decoded.email);
admin.initializeApp(
    {
        credential: admin.credential.cert(JSON.parse(JSON.stringify(cre)))
    }
);
// admin.auth().verifyIdToken(token).then((decodedToken) => {
//     let email: any = decodedToken.email;
//     console.log(email);
// }
// ).catch((error) => {
//     console.log(error);

// });

// admin.auth()
//     .verifyIdToken(token)
//     .then((decodedToken) => {
//         const uid = decodedToken.uid;
//         console.log('verify');
//         console.log('uid' + uid);
//     })
//     .catch((error) => {
//         console.log('error at user found')
//     });


app.post('/signup', async (req: Request, res: Response) => {
    console.log(req.body);
    // admin.auth().
    // admin.auth().

    // admin.auth().createCustomToken('DL1VG3CfypViZykaoI11GFMcub53')
    //     .then(function (customToken) {
    //         res.send(customToken)
    //         res.end()
    //     })
    //     .catch(function (error) {
    //        res.send('fail');
    //     });
    // const user={
    //     email:req.body.email,
    //     password:req.body.password,
    // }
    // const userRes=await admin.auth().createUser({
    //     email:user.email,
    //     password:user.password,
    //     emailVerified:false,
    //     disabled:false
    // });
    // res.json(userRes);

}
)


app.use(express.json());

app.use(verifyToken,checkRequest);


app.use('/students', router);           
app.get('/data/', (req: Request, res: Response) => {
    console.log('api');
    
    var d=req.headers["data"];
    if(d?.length!=0){
        console.log(d);
    }
   
    console.log("data");
    
    res.send('Express + TypeScript Server');
    res.end();

});




app.listen(port, () => {

    console.log(`⚡️[server]: Server is running at ${port}`);

});