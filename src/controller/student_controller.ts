import {StudentDomain} from '../domain/student_domain'
import express, { Express, Request, Response } from 'express';
var router = express.Router();

class StudentController {
    static async get(req:Request,res:Response) {
        const studentDomain = new StudentDomain();
        studentDomain.getAllStudent(req,res);
    }
    static async AA(req:Request,res:Response) {
        const studentDomain = new StudentDomain();
        studentDomain.getAllStudent(req,res);
    }
}

router.get("/", StudentController.get);
router.post("/post", StudentController.AA);
export{router};