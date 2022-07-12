import {studentmodel}  from '../model/students';
import express, { Express, Request, Response } from 'express';
class StudentDomain {

    getAllStudent(req:Request, res:Response) {
      studentmodel.find({}, function (err:Error, result:String) {
        res.send(result);
        console.log(result)
        res.end();
      })
    }
}  

export {StudentDomain};