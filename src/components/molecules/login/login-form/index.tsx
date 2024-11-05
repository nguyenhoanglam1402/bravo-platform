import { Button, Checkbox, Form } from 'antd'
import CInput from '../../../atoms/input'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import useLogin from '../hooks/useLogin'
import { loginFormResolver } from '../resolvers/login.resolver'

export function LoginForm() {
  const [, { onHandleLogin }] = useLogin()
  return (
    <div className='flex flex-col max-w-[500px] w-full shadow-standard px-6 py-8 bg-white'>
      <Form layout='vertical' onFinish={onHandleLogin}>
        <Form.Item
          name='username'
          label={<p className='font-semibold font-nunito'>Username</p>}
          layout='vertical'
          rules={loginFormResolver.username}
        >
          <CInput prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          name='password'
          label={<p className='font-semibold font-nunito'>Password</p>}
          layout='vertical'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <CInput type='password' prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='text-base w-full py-2 px-4 h-10'>
            <p className='font-semibold font-nunito'>Log in</p>
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
