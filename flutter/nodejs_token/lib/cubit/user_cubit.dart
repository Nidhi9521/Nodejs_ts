


import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:nodejs_token/cubit/user_state.dart';

class UserCubit extends Cubit<UserState> {
  UserCubit() : super(UserInitial());

  Future<void> Login(String email,String pwd) async {
  print('cubit');
  print(email);
  print(pwd);
    UserCredential userCredential = await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: email,
        password: pwd
    );
    if(userCredential!=null){
      String user=await FirebaseAuth.instance.currentUser!.getIdToken();
      print(user);
      emit(LogInSucc());
    }else{
      emit(LogInFail());
    }
  }


  loginAnyo()async{
    try {
      final userCredential = await FirebaseAuth.instance.signInAnonymously();
      print("Signed in with temporary account.");
      if(userCredential!=null){
        String user=await FirebaseAuth.instance.currentUser!.getIdToken();
        print(user);
        emit(LogInSucc());
      }else{
        emit(LogInFail());
      }
    } on FirebaseAuthException catch (e) {
      switch (e.code) {
        case "operation-not-allowed":
          print("Anonymous auth hasn't been enabled for this project.");
          break;
        default:
          print("Unknown error.");
      }
    }
  }
}
