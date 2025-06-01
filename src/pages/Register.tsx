import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { Button, Form, FormProps, Input, Typography, Select, Upload } from "antd";
import { useGetRegionsQuery } from "../redux/api/region.api";
import { useRegisterMutation } from "../redux/api/auth.api";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
const { Title } = Typography;

type FieldType = {
   email?: string;
   firstname?: string;
   lastname?: string;
   regionId?: string;
   password?: string;
   img?: string;
};

type Region = {
   id: string;
   name: string;
};

const Register = () => {
   const navigate = useNavigate();
   const email = useSelector((state: RootState) => state.auth.email);
   const { data } = useGetRegionsQuery({});
   const [register, { isLoading }] = useRegisterMutation();
   const options = data?.data?.map((item: Region) => ({ value: item.id, label: item.name }));
   const [image, setImage] = useState("");

   const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      values.img = image;
      register(values)
         .unwrap()
         .then(() => {
            navigate("/login");
         });
   };

   const uploadImage = async (options: any) => {
      const { onSuccess, onError, file } = options;

      const fmData = new FormData();
      fmData.append("file", file);

      axios
         .post("https://keldibekov.online/upload", fmData)
         .then((res) => {
            onSuccess("ok");
            setImage(res.data?.fileUrl);
         })
         .catch((err) => onError(err));
   };

   return (
      <div className='w-full h-screen flex items-center justify-center'>
         <div className='max-w-[340px] w-full'>
            <Title level={5} className='text-center'>
               Register
            </Title>

            <Form
               name='basic'
               initialValues={{ email }}
               onFinish={onFinish}
               autoComplete='off'
               layout='vertical'
            >
               <Form.Item<FieldType>
                  label='Image'
                  name='img'
                  rules={[{ required: true, message: "Please input your image!" }]}
               >
                  <Upload
                     // action='https://keldibekov.online/upload'
                     customRequest={uploadImage}
                     listType='picture'
                     maxCount={1}
                  >
                     <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
               </Form.Item>

               <Form.Item<FieldType>
                  label='First name'
                  name='firstname'
                  rules={[{ required: true, message: "Please input your firstname!" }]}
               >
                  <Input placeholder='Enter first name' />
               </Form.Item>

               <Form.Item<FieldType>
                  label='Last name'
                  name='lastname'
                  rules={[{ required: true, message: "Please input your lastname!" }]}
               >
                  <Input placeholder='Enter last name' />
               </Form.Item>

               <Form.Item<FieldType>
                  label='Region'
                  name='regionId'
                  rules={[{ required: true, message: "Please input your region!" }]}
               >
                  <Select placeholder='Select region' options={options} />
               </Form.Item>

               <Form.Item<FieldType>
                  label='Email'
                  name='email'
                  rules={[{ required: true, message: "Please input your email!" }]}
               >
                  <Input disabled={true} placeholder='Enter email' />
               </Form.Item>

               <Form.Item<FieldType>
                  label='Password'
                  name='password'
                  rules={[{ required: true, message: "Please input your password!" }]}
               >
                  <Input.Password placeholder='Enter password' />
               </Form.Item>

               <Form.Item label={null}>
                  <Button loading={isLoading} className='w-full' type='primary' htmlType='submit'>
                     Submit
                  </Button>
               </Form.Item>
            </Form>
         </div>
      </div>
   );
};

export default React.memo(Register);
