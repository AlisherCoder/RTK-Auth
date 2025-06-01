import { Button, Form, FormProps, Input, message, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { useLoginMutation } from "../redux/api/auth.api";
import { useNavigate } from "react-router-dom";
import { clearAuth } from "../redux/features/auth.slice";
import { setToken } from "../redux/features/token.slice";
const { Title } = Typography;

type FieldType = {
   email?: string;
   password?: string;
};

const Login = () => {
   const email = useSelector((state: RootState) => state.auth.email);
   const [login, { isLoading }] = useLoginMutation();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [messageApi, contextHolder] = message.useMessage();

   const error = (message: string) => {
      console.log(message);
      messageApi.open({
         type: "error",
         content: message,
      });
   };

   const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      login(values)
         .unwrap()
         .then((res) => {
            dispatch(clearAuth());
            dispatch(setToken({ token: res.token }));
            navigate("/profile");
         })
         .catch((err) => {
            error(err.data?.message);
         });
   };

   return (
      <>
         {contextHolder}
         <div className='w-full h-screen flex items-center justify-center'>
            <div className='max-w-[340px] w-full'>
               <Title level={5} className='text-center'>
                  Login
               </Title>

               <Form
                  name='basic'
                  initialValues={email ? { email } : {}}
                  onFinish={onFinish}
                  autoComplete='off'
                  layout='vertical'
               >
                  <Form.Item<FieldType>
                     label='Email'
                     name='email'
                     rules={[
                        { required: true, message: "Please input your email!" },
                        { type: "email", message: "Please enter a valid email!" },
                     ]}
                  >
                     <Input disabled={email ? true : false} placeholder='Enter email' />
                  </Form.Item>

                  <Form.Item<FieldType>
                     label='Password'
                     name='password'
                     rules={[{ required: true, message: "Please input your password!" }]}
                  >
                     <Input.Password placeholder='Enter password' />
                  </Form.Item>

                  <Form.Item label={null}>
                     <Button
                        loading={isLoading}
                        className='w-full'
                        type='primary'
                        htmlType='submit'
                     >
                        Submit
                     </Button>
                  </Form.Item>
               </Form>
            </div>
         </div>
      </>
   );
};

export default React.memo(Login);
