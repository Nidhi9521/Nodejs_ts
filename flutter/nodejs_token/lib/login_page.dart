import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:nodejs_token/cubit/user_state.dart';

import 'cubit/user_cubit.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    TextEditingController _email=TextEditingController();
    TextEditingController _pwd=TextEditingController();
    return Scaffold(
      body: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextFormField(
              decoration: const InputDecoration(
                icon: const Icon(Icons.email),
                hintText: 'Enter your full email',
                labelText: 'Email',
              ),
              controller: _email,

            ),
            SizedBox(
              height: 10,
            ),
            TextFormField(
              decoration: const InputDecoration(
                icon: const Icon(Icons.remove_red_eye),
                hintText: 'Enter your password',
                labelText: 'Password',
              ),
              controller: _pwd,

              obscureText: true,
            ),
            SizedBox(
              height: 10,
            ),
            BlocListener<UserCubit, UserState>(
                listener: (context, state) {
                  if (state is LogInSucc) {
                    print('Login Successfully');
                  }
                  if (state is LogInFail) {
                    print('Login Fail');
                    // Navigator.of(context).pushNamed('/screen2');
                  }
                },
                child: RaisedButton(
                  onPressed: () {
                      context.read<UserCubit>().Login(_email.text, _pwd.text);
                  },
                  color: Colors.indigo,
                  child: Text(
                    'Login',
                    style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.w400,
                        color: Colors.white),
                  ),
                )),


            RaisedButton(
              onPressed: () {
                context.read<UserCubit>().loginAnyo();
              },
              color: Colors.indigo,
              child: Text(
                'Login',
                style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w400,
                    color: Colors.white),
              ),
            )
          ]));
  }
}