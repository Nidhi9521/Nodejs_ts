import * as admin from 'firebase-admin';
import cre from '../nodejsauth-f12ae-firebase-adminsdk-e4myk-e352533acb.json';
import jwt_decode from 'jwt-decode';


function verifyToken(req: any, res: any,next:any): any {
    try {
        var resData: any;
        var token: any = req.headers['token'];
        let decoded: any = jwt_decode(token);
        console.log(req);
        
        console.log(decoded.email);
        
        admin.auth().verifyIdToken(token).then((decodedToken) => {
            let email: any = decodedToken.email;
            console.log(email);
            let uid: any = decodedToken.uid;
            console.log('uid  ' + uid);
            
            resData = {
                "uid": decodedToken.user_id,
                "email": decodedToken.email,
                "provider": decodedToken.firebase.sign_in_provider
            }
            req.headers["data"] = resData;
            console.log(req.headers["data"]);
            console.log('url');
            console.log(req.url);
            
            
            next();
        }
        ).catch((error) => {
            console.log('this is ${error}');
            let errorData = {
                message: error.message,
                expiredAt: error.expiredAt
            };
            res.status(401).json({
                errorMessage: error.message,
                message: 'Unauthorized Access'
            });
        });
        
    } catch (error: any) {
        console.log('catch');
        return res.status(401).json({
            errorMessage: error.message,
            message: 'Unauthorized Access'
        });

    }
}


function checkRequest(req:any,res:any,next:any){



    console.log('check Request');




    console.log(req.header['data']);
    console.log('url data');
    console.log(req.url);
    var url=req.url;

    
    

    next();
    


}

export { verifyToken,checkRequest};